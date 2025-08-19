import { generic } from "./generic";
import { getBlob } from "../utils/handleCache";

/**
 * Handles picshick.com
 */
export async function picshick(href: string, src?: string): Promise<string> {
  if (!src || !src.includes("/th/") || !href.includes("/")) {
    const selector = "img.pic";
    const imgSrc = await generic(href, selector);
    return await getBlob(imgSrc);
  }

  const fileName = href.substring(href.lastIndexOf("/") + 1);
  const extension = fileName.substring(fileName.lastIndexOf(".") + 1);
  const parts = src.split("/");
  const albumId = parts[parts.length - 2];
  const thumbFile = parts[parts.length - 1];

  if (!thumbFile) {
    throw Error(`parsing image: ${href}`);
  }

  const imageId = thumbFile.substring(0, thumbFile.lastIndexOf("."));
  const host = src.substring(0, src.indexOf("/th/"));
  const fullSizePath = `/i/${albumId}/${imageId}.${extension}/${fileName}`;
  const finalUrl = `${host}${fullSizePath}`;

  // hotlinking disabled
  return await getBlob(finalUrl);
}
