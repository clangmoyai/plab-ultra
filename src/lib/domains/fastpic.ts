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

  // first try template tag
  const template = doc.querySelector<HTMLTemplateElement>("template");
  if (template) {
    const templateImg = template.content.querySelector("img");
    const src = templateImg?.getAttribute("src");
    if (src) return new URL(src, href).href;
  }

  // fall back to direct image
  const img = doc.querySelector<HTMLImageElement>("img.image.img-fluid");
  const imgSrc = img?.getAttribute("src");
  if (imgSrc) return new URL(imgSrc, href).href;

  // else try download button link
  const anchor = doc.querySelector<HTMLAnchorElement>(
    "a.btn-outline-secondary",
  );
  const anchorHref = anchor?.getAttribute("href");
  if (anchorHref) {
    const url = new URL(anchorHref, href);
    url.searchParams.delete("dl");
    return url.href;
  }

  throw new Error(`image not found: ${href}`);
}
