import { getBlob } from "../utils/handleCache";

/**
 * Handles
 * - imgdrive.net
 * - imgadult.com
 * - imgwallet.com
 */
export async function imgdrive(href: string, src?: string): Promise<string> {
  if (!src) return href;
  const imgSrc = src.replace("/small/", "/big/");

  if (src.includes("imgwallet.com")) return imgSrc;

  // hotlinking disabled
  return await getBlob(imgSrc);
}
