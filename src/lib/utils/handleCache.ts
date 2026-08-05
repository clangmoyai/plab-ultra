const KEY = "resolved-urls";

const cache: Record<string, string> = JSON.parse(
  sessionStorage.getItem(KEY) || "{}",
);

/**
 * Retrieves cached resolved URL
 */
export function getCache(url: string): string | undefined {
  return cache[url];
}

/**
 * Sets a URL and its corresponding source into the cache,
 * updates both the in-memory cache and the session storage
 */
export function setCache(url: string, src: string): void {
  cache[url] = src;
  sessionStorage.setItem(KEY, JSON.stringify(cache));
}

/**
 * Clears the cache from memory and session storage
 */
export function clearCache(): void {
  Object.keys(cache).forEach((key) => delete cache[key]);
  sessionStorage.removeItem(KEY);
}
