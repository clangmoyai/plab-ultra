import { generic } from "./generic";
import { getBlob } from "../utils/handleCache";

/**
 * Handles imagenimage.com
 */
export async function imagenimage(href: string, src?: string): Promise<string> {
  const match = src?.match(
    /(https:\/\/img\d+\.imagenimage\.com\/)th\/(.+)\.jpg/
  );

  if (!src || !match) {
    const selector = "#left > a > img";
    const imgSrc = await generic(href, selector);
    return await getBlob(imgSrc);
  }

  const domain = match[1];
  const path = match[2];
  const linkMatch = href.match(/https:\/\/imagenimage\.com\/(.+)/);

  if (!linkMatch) {
    throw new Error(`Invalid URL: ${href}`);
  }

  const filename = linkMatch[1];
  const imgSrc = `${domain}i/${path}.jpg/${filename}`;

  return await getBlob(imgSrc);
}
