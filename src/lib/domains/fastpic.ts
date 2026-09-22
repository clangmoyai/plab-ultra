import { GM_fetch } from "../utils/GM_fetch";

const parser = new DOMParser();

/**
 * Handles fastpic.org
 *
 * The /view/ page sets the image src via obfuscated JS (and sometimes shows
 * an interstitial first). The /fullview/ page exposes the signed full size
 * URL in a plain `loading_img` variable.
 */
/**
 * Some posts link straight to the image CDN (e.g. `i128.fastpic.org/big/...`)
 * instead of the `fastpic.org/view/...html` page. Those CDN URLs need a
 * signed `md5`/`expires` query to load, which the plain link lacks, so
 * rebuild the `/view/` URL from it to fetch a fresh signed link.
 */
function toViewHref(href: string): string {
  const match = href.match(
    /^https?:\/\/i(\d+)\.fastpic\.org\/(?:big|thumb)\/(\d{4})\/(\d{4})\/[0-9a-f]{2}\/(_[0-9a-f]+\.\w+)/,
  );
  if (!match) return href;

  const [, server, year, monthDay, filename] = match;
  return `https://fastpic.org/view/${server}/${year}/${monthDay}/${filename}.html`;
}

export async function fastpic(href: string): Promise<string> {
  const fullview = toViewHref(href).replace("/view/", "/fullview/");
  const { response, responseText, finalUrl } = await GM_fetch(
    "GET",
    fullview,
    "blob",
  );

  if (response.type.startsWith("image/")) {
    return finalUrl;
  }

  const src = findSrc(responseText);
  if (src) return src;

  // interstitial page: follow the "continue" link, which has a token query
  const doc = parser.parseFromString(responseText, "text/html");
  const path = new URL(fullview).pathname;
  const next = [...doc.querySelectorAll<HTMLAnchorElement>("a[href]")]
    .map((a) => new URL(a.getAttribute("href")!, fullview))
    .find((u) => u.pathname === path && u.search.includes("="));

  if (next) {
    const retry = await GM_fetch("GET", next.href, "blob");
    const retrySrc = findSrc(retry.responseText);
    if (retrySrc) return retrySrc;
  }

  throw new Error(`image not found: ${href}`);
}

function findSrc(html: string): string | undefined {
  return html.match(/loading_img\s*=\s*(["'])(.+?)\1/)?.[2];
}
