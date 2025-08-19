import { GM_fetch } from "../utils/GM_fetch";

const parser = new DOMParser();

/**
 * Handles imgbum.ru
 */
export async function imgbum(href: string): Promise<string> {
  const { responseText } = await GM_fetch("GET", href, "text");
  const doc = parser.parseFromString(responseText, "text/html");

  const selector = "table > tbody > tr > td > img";
  const img = doc.querySelector<HTMLImageElement>(selector);
  const onclick = img?.getAttribute("onclick");
  const match = onclick?.match(/\/\*mshow\('([^']+)'\);\*\//);
  const imgSrc = match?.[1];

  if (!imgSrc) {
    throw new Error(`image not found: ${href}`);
  }

  return new URL(imgSrc, href).href;
}
