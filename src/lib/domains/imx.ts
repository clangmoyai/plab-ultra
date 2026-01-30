import { GM_fetch } from "../utils/GM_fetch";

const parser = new DOMParser();

/**
 * Handles imx.to
 */
export async function imx(href: string): Promise<string> {
  const body = new URLSearchParams();
  body.append("imgContinue", "Continue to image ... ");

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const response = await GM_fetch(
    "POST",
    href,
    "text",
    headers,
    body.toString(),
  );

  const doc = parser.parseFromString(response.responseText, "text/html");
  const selector = "img.centred";
  const imgSrc = doc.querySelector<HTMLImageElement>(selector);

  if (!imgSrc) {
    throw new Error(`image not found: ${href}`);
  }

  return imgSrc.src;
}
