import { GM_fetch } from "../utils/GM_fetch";

const parser = new DOMParser();

/**
 * Fetches given URL and resolves the target image selector
 */
export async function generic(
  href: string,
  selector: string,
  headers?: Record<string, string>
): Promise<string> {
  const { response, responseText, finalUrl } = await GM_fetch(
    "GET",
    href,
    "blob",
    headers
  );

  if (response.type.startsWith("image/")) {
    return finalUrl;
  }

  const doc = parser.parseFromString(responseText, "text/html");
  const img = doc.querySelector<HTMLImageElement>(selector);
  const src = img?.getAttribute("src");

  if (!src) {
    throw new Error(`image not found: ${href}`);
  }

  return new URL(src, href).href;
}
