import { store } from "../utils/store.svelte";

export const LINKS_KEY = "performer-links";

export type PerformerLink = {
  id?: string;
  label: string;
  url: string;
};

const defaultLinks: PerformerLink[] = [
  {
    label: "Pornolab",
    url: "http://pornolab.net/forum/tracker.php?search_id=&nm={q}",
  },
  {
    label: "Simpcity",
    url: "https://simpcity.su/search/1/?page=99&o=date&q={q}",
  },
  {
    label: "MissAV",
    url: "https://missav.ws/en/search/{q}",
  },
  {
    label: "Bunkr",
    url: "https://bunkr-albums.io/?search={q}",
  },
];

/**
 * Generates a unique ID for a {@link PerformerLink}
 * (used internally)
 */
function generateId(link: PerformerLink): PerformerLink {
  const performerLink = { ...link };
  performerLink.id = crypto.randomUUID();
  return performerLink;
}

/**
 * Removes the ID property from a {@link PerformerLink}
 * (used when saved/exported)
 */
export function stripId(link: PerformerLink): PerformerLink {
  const performerLink = { ...link };
  delete performerLink.id;
  return performerLink;
}

/**
 * Saves the {@link store.performerLinks} to localStorage
 */
function savePerformerLinks(): void {
  const stored = store.performerLinks.map(stripId);
  localStorage.setItem(LINKS_KEY, JSON.stringify(stored));
}

/**
 * Loads {@link store.performerLinks} from localStorage or `defaultLinks` if none exist
 */
export function loadPerformerLinks(): PerformerLink[] {
  try {
    const stored = localStorage.getItem(LINKS_KEY);
    if (stored === null) return defaultLinks.map(generateId);
    const parsed = JSON.parse(stored);
    return parsed.map(generateId);
  } catch {
    return defaultLinks.map(generateId);
  }
}

/**
 * Adds a new empty {@link PerformerLink}
 */
export function addPerformerLink(): void {
  const emptyLink = { label: "", url: "" };
  store.performerLinks.push(generateId(emptyLink));
  savePerformerLinks();
}

/**
 * Removes a {@link PerformerLink} at specified index
 */
export function removePerformerLink(index: number): void {
  if (index < 0 || index >= store.performerLinks.length) return;

  store.performerLinks.splice(index, 1);
  savePerformerLinks();
}

/**
 * Updates a {@link PerformerLink} at specified index
 */
export function updatePerformerLink(
  index: number,
  data: Partial<PerformerLink>
): void {
  if (index < 0 || index >= store.performerLinks.length) return;

  const link = store.performerLinks[index];
  if (link) Object.assign(link, data);

  savePerformerLinks();
}

/**
 * Generates a URL for a title dropdown {@link PerformerLink}
 */
export function getLinkUrl(link: PerformerLink, query: string): string {
  const linkUrl = link.url;
  if (!query || !linkUrl.includes("{q}")) return linkUrl;

  return linkUrl.replace("{q}", encodeURIComponent(query));
}

/**
 * Retrieves the favicon URL for dropdown {@link PerformerLink}
 *
 * Note: try/catch only guards `new URL...` and not
 * whether the resulting favicon URL actually resolves
 */
export function getFaviconUrl(url: string): string {
  try {
    const domain = new URL(url).host;
    return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
  } catch {
    return "https://icons.duckduckgo.com/ip3/invalid.ico";
  }
}

/**
 * Restores {@link store.performerLinks} to {@link defaultLinks}
 */
export function restorePerformerLinks(): void {
  localStorage.removeItem(LINKS_KEY);

  for (let i = 0; i < defaultLinks.length; i++) {
    const defaultSite = defaultLinks[i];
    if (i < store.performerLinks.length) {
      const existingLink = store.performerLinks[i];
      if (
        existingLink?.label !== defaultSite?.label ||
        existingLink?.url !== defaultSite?.url
      ) {
        if (existingLink) Object.assign(existingLink, defaultSite);
      }
    } else {
      if (defaultSite) store.performerLinks.push(generateId(defaultSite));
    }
  }

  if (store.performerLinks.length > defaultLinks.length) {
    store.performerLinks.splice(defaultLinks.length);
  }

  savePerformerLinks();
}
