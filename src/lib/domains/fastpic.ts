import { GM_fetch } from "../utils/GM_fetch";

const parser = new DOMParser();

/**
 * Handles fastpic.org
 */
export async function fastpic(href: string): Promise<string> {
  const { response, responseText, finalUrl } = await GM_fetch(
    "GET",
    href,
    "blob",
  );

  if (response.type.startsWith("image/")) {
    return finalUrl;
  }

  const doc = parser.parseFromString(responseText, "text/html");
  const anchor = doc.querySelector<HTMLAnchorElement>(
    "a.btn-outline-secondary",
  );
  const src = anchor?.getAttribute("href");

  if (!src) {
    throw new Error(`image not found: ${href}`);
  }

  // dl=1 forces a download instead of rendering the image
  const url = new URL(src, href);
  url.searchParams.delete("dl");

  return url.href;
}
