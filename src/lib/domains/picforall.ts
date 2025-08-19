import { GM_fetch } from "../utils/GM_fetch";

const parser = new DOMParser();

/**
 * Handles
 * - picforall.ru
 * - imgclick.ru
 * - freescreens.ru
 */
export async function picforall(href: string): Promise<string> {
  const { responseText } = await GM_fetch("GET", href, "text");

  const selector = "#pay_thumb_img img";
  const doc = parser.parseFromString(responseText, "text/html");

  const img = doc.querySelector<HTMLImageElement>(selector);
  const onclick = img?.getAttribute("onclick");
  const match = onclick?.match(/mshow\('([^']+)'\)/);
  const imgSrc = match?.[1];

  if (!imgSrc) {
    throw new Error(`image not found: ${href}`);
  }

  return imgSrc;
}
