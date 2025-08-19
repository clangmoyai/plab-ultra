import { generic } from "./generic";
import { getBlob } from "../utils/handleCache";

/**
 * Handles
 * - imagetwist.com
 * - picturelol.com
 *
 * Returns blob since these domains have hotlinking disabled
 */
export async function imagetwist(href: string, src?: string): Promise<string> {
  let imgSrc: string;

  if (src && src.includes("/th/")) {
    imgSrc = src.replace("/th/", "/i/");
  } else {
    imgSrc = await generic(href, "img.pic");
    if (!imgSrc) {
      throw new Error(`image not found: ${href}`);
    }
  }

  return await getBlob(imgSrc);
}
