import type { Data, Image, Posts } from "./data.svelte";

/**
 * Handles user element parsing
 */
export function handleUser(element?: Element): Data["user"] {
  if (!element) return;

  const name = element?.textContent;
  const link = element.getAttribute("href");

  if (name && link && link?.includes("viewprofile")) {
    return { name, link };
  }

  return;
}

/**
 * Handles theme element parsing and `darkmode`
 */
export function handleTheme(element?: Element): Data["theme"] {
  if (!element) return;

  const parentNode = element.closest("a");
  const darkmode = element.classList.contains("fa-sun");

  return { element: parentNode, darkmode };
}

/**
 * Parses the number of times downloaded
 */
export function handleTimes(element?: Element): Data["torrent"]["times"] {
  if (!element) return;

  const part = element?.textContent?.split(" ")[0];
  if (!part) return;

  const parsed = parseInt(part);
  if (isNaN(parsed)) return;

  return parsed;
}

/**
 * Handles parsing of images within a post
 */
export function handleImages(postImgs?: NodeListOf<Element>): Data["images"] {
  const images: Image[] = [];
  if (!postImgs) return images;

  postImgs.forEach((varElement) => {
    const src = varElement.getAttribute("title");
    if (src) {
      const parentAnchor = varElement.closest("a") as HTMLAnchorElement;
      const href = parentAnchor?.href;
      images.push({
        id: crypto.randomUUID(),
        href,
        src,
      });
    }
  });

  return images;
}

/**
 * Parses a NodeList of elements containing posts
 * and returns an array of Posts objects:
 * - nick
 * - date
 * - avatar
 * - link
 * - message
 */
export function handlePosts(posts?: NodeListOf<Element>): Data["posts"] {
  // Parse posts once
  if (posts) {
    return Array.from(posts).map((msg) => {
      const row = (msg as Element)?.closest("tbody");
      const nickEl = row?.querySelector<HTMLElement>(".nick");
      const dateEl = row?.querySelector<HTMLElement>(".small");
      const avatarImg = row?.querySelector<HTMLImageElement>(".avatar img");
      const profileLink = row?.querySelector<HTMLAnchorElement>(
        'a.txtb[href*="viewprofile"]'
      );

      return {
        nick: nickEl?.textContent,
        date: dateEl?.textContent,
        avatar: avatarImg?.getAttribute("src"),
        link: profileLink?.getAttribute("href"),
        message: msg as HTMLDivElement,
      } as Posts;
    });
  }
  return [];
}

/**
 * Takes a Russian date string in the format "15-Май-25 16:19:17"
 * Domain launched in 2008, so 2-digit years are correctly interpreted
 */
export function handleDate(dateString?: string): Data["torrent"]["date"] {
  if (!dateString) return null;

  const ruMonthMap: Record<string, string> = {
    Янв: "Jan",
    Фев: "Feb",
    Мар: "Mar",
    Апр: "Apr",
    Май: "May",
    Июн: "Jun",
    Июл: "Jul",
    Авг: "Aug",
    Сен: "Sep",
    Окт: "Oct",
    Ноя: "Nov",
    Дек: "Dec",
  };

  const match = dateString.match(
    /(\d{2})-([А-Яа-я]{3})-(\d{2}) (\d{2}:\d{2}:\d{2})/
  );

  if (!match) return null;

  const [, day, ruMonth, shortYear, time] = match;
  if (!ruMonth || !shortYear) return null;
  const enMonth = ruMonthMap[ruMonth];
  const year = 2000 + parseInt(shortYear, 10);
  const isoString = `${day} ${enMonth} ${year} ${time}`;

  return new Date(isoString);
}

/**
 * Given a Date object, returns a string representing the time
 * elapsed since the Date until now ("2 minutes ago", "3 months ago")
 */
export function handleRelativeDate(dateLike: Data["torrent"]["date"]): string {
  if (dateLike === null) return "";

  const locale = "en";
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  const divisions = [
    { amount: 60, name: "seconds" },
    { amount: 60, name: "minutes" },
    { amount: 24, name: "hours" },
    { amount: 7, name: "days" },
    { amount: 4.34524, name: "weeks" },
    { amount: 12, name: "months" },
    { amount: Infinity, name: "years" },
  ];

  let delta = (new Date(dateLike).getTime() - Date.now()) / 1000;

  for (const { amount, name } of divisions) {
    if (Math.abs(delta) < amount) {
      return rtf.format(Math.round(delta), name as Intl.RelativeTimeFormatUnit);
    }
    delta /= amount;
  }
  return "";
}

/**
 * Extracts user ids from "thank list" element
 * to be able to compare if `data.thank.element` should be disabled
 */
export function handleThankList(element?: Element): Data["thank"]["list"] {
  if (!element) return new Set();

  const userIds = new Set<string>();
  const uElements = element.querySelectorAll("u");

  uElements.forEach((uElement) => {
    const uid = uElement.textContent;
    if (uid) userIds.add(uid);
  });

  return userIds;
}

/**
 * Parses topic element and extracts:
 * - `original`
 * - `parsed`
 * - `searchTerms`
 * - `tags`
 */
export function handleTitle(topicEl?: Element): Data["title"] {
  const text = topicEl?.textContent?.trim();
  if (!text) return null;

  const tags = extractTags(text);
  const parsed = text.replace(TAG_RE, "").trim();
  const searchTerms = extractSearchTerms(parsed);

  return { original: text, parsed, searchTerms, tags };
}

/**
 * Helper: Extracts all tags from it given string
 */
function extractTags(text: string): string[] {
  const all = [...text.matchAll(TAG_RE)]
    .flatMap((m) => m[1]?.split(",") ?? [])
    .map((t) => t.trim())
    .filter(Boolean);

  return [...new Set(all)];
}

/**
 * Helper:  Extracts search terms from a given string by
 * splitting it based on {@link SEP_RE} and {@link BRACKETS_RE}
 */
function extractSearchTerms(text: string): string[] {
  const terms: string[] = [];
  let cursor = 0;

  const splitOnSeparators = (fragment: string): string[] =>
    fragment.trim()
      ? fragment
          .split(SEP_RE)
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

  for (const match of text.matchAll(BRACKETS_RE)) {
    terms.push(...splitOnSeparators(text.slice(cursor, match.index)));
    const inner = match[1] ?? match[2] ?? "";
    terms.push(...splitOnSeparators(inner));
    cursor = match.index + match[0].length;
  }

  terms.push(...splitOnSeparators(text.slice(cursor)));
  return terms.filter((t, i) => terms.indexOf(t) === i);
}

// [tag]
const TAG_RE = /\[([^\]]+)]/g;

// ( … )  or  { … }
const BRACKETS_RE = /\(([^)]+)\)|\{([^}]+)\}/g;

const SEPARATORS = [",", "|", "/", "&", "-", "—", "aka"];
const SEP_RE = new RegExp(
  SEPARATORS.map((str) => {
    const escaped = str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

    switch (str) {
      // require whitespace around separators
      case "-":
      case "—":
      case "/":
      case "aka":
        return `(?<=\\s)${escaped}(?=\\s)`;

      // standard separators
      default:
        return escaped;
    }
  }).join("|"),
  "g"
);
