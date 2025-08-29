interface SearchResult {
  href: string;
  textContent: string;
  resolution: string;
}

const parser = new DOMParser();
const decoder = new TextDecoder("windows-1251");
const regex = /\b\d+[pk]\b/gi;

/**
 * Search for related files
 */
export async function getRelated(title: string): Promise<SearchResult[]> {
  const query = stripResolution(title);

  const cache = getCache();
  if (cache[query]) return cache[query];

  const elements = await handleSearch(query);
  const results: SearchResult[] = [];

  elements.forEach((element) => {
    if (
      element instanceof HTMLAnchorElement &&
      element.href &&
      element.textContent
    ) {
      const resolution = getResolution(element.textContent);
      if (resolution) {
        results.push({
          href: element.href,
          textContent: element.textContent,
          resolution,
        });
      }
    }
  });

  cache[query] = results;
  setCache(cache);

  return results;
}

/**
 * Handle search
 */
async function handleSearch(searchQuery: string): Promise<Element[]> {
  const headers = { "Content-Type": "application/x-www-form-urlencoded" };
  const body = `max=1&to=1&nm=${encodeURIComponent(searchQuery)}`;

  const response = await fetch("/forum/tracker.php", {
    method: "POST",
    headers,
    body,
  });

  const buffer = await response.arrayBuffer();
  const result = decoder.decode(buffer);
  const doc = parser.parseFromString(result, "text/html");

  const nothingFound = doc.querySelector(".info_msg_wrap");
  if (nothingFound) return [];

  const related = doc.querySelectorAll(".med.tLink.bold");
  return Array.from(related);
}

/**
 * Strip out video‐resolution tags from the title:
 *  - resolutions (e.g. "1080p")
 *  - space and comma (“ ,”)
 *  - commas before closing brackets (",]")
 *  - special case: any empty brackets ("[]")
 */
function stripResolution(title: string): string {
  return title
    .replace(regex, "") // resolutions "1080p" etc
    .replace(/ ,/g, "") // space-comma " ,"
    .replace(/\s*,\s*(?=\])/g, "") // any comma before closing bracket ",]"
    .replace(/\[\]/g, ""); // special case: empty brackets "[]"
}

/**
 * Extract resolution from search result
 */
function getResolution(title: string): string | undefined {
  const match = title.match(regex);
  return match?.[0];
}

const CACHE_KEY = "related-cache";

/**
 * Get cache
 */
function getCache(): Record<string, SearchResult[]> {
  const cached = sessionStorage.getItem(CACHE_KEY);
  return cached ? JSON.parse(cached) : {};
}

/**
 * Set cache
 */
function setCache(cache: Record<string, SearchResult[]>): void {
  sessionStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

/**
 * Clears the cache from session storage
 */
export function restoreRelated(): void {
  sessionStorage.removeItem(CACHE_KEY);
}
