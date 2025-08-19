import { GM_fetch } from "../utils/GM_fetch";

/**
 * Handles
 * - imgfrost.net
 * - imgblaze.net
 */
export async function imgfrost(href: string, src?: string): Promise<string> {
  if (!src) return Promise.resolve(href);

  const parsed = new URL(src);
  parsed.hostname = "prcf.imglomalr.site";
  parsed.pathname = parsed.pathname.replace("/small/small_", "/big/");

  // imgfrost redirects to one of ["imgair.net", "cloudgallery.net", "imghot.net"]
  // but even if cloudgallery.net is redirected, imgair.net as referer works
  const headers = { Referer: "https://imgair.net" };

  const { response, finalUrl } = await GM_fetch(
    "GET",
    parsed.href,
    "blob",
    headers
  );

  if (!response.type.startsWith("image/")) {
    throw new Error(`Expected image but got ${response.type} from ${finalUrl}`);
  }

  return finalUrl;
}
