import { GM_fetch } from "../utils/GM_fetch";
import { generic } from "./generic";

/**
 * Handles turboimagehost.com
 */
export async function turboimagehost(href: string): Promise<string> {
  const { response, responseText, finalUrl } = await GM_fetch(
    "GET",
    href,
    "blob"
  );

  if (response.type.startsWith("image/")) {
    return finalUrl;
  }

  const match = responseText.match(/"og:image" content="([^"]+)"/);
  if (match[1]) {
    return new URL(match[1], href).href;
  }

  const selector = "#imageid";
  return generic(href, selector);
}
