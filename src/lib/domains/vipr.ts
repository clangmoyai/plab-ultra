import { GM_fetch } from "../utils/GM_fetch";
import { generic } from "./generic";

/**
 * Handles vipr.im
 */
export async function vipr(href: string, src?: string): Promise<string> {
  if (src && src.includes("/th/")) {
    const imgSrc = src.replace("/th/", "/i/");

    const response = await GM_fetch("HEAD", imgSrc, "text");

    // size of "broken image"
    const imgError = /content-length:\s*8183/i.test(response.responseHeaders);

    if (!imgError) return imgSrc;
  }

  console.warn(`failed to load image ${href} trying fallback`);
  const selector = "#body > a > img";
  return generic(href, selector);
}
