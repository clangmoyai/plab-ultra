import { generic } from "./generic";
import { getBlob } from "../utils/handleCache";

/**
 * Handles
 * - imagetwist.com
 * - picturelol.com
 * - vipr.im
 *
 * Returns blob since these domains have hotlinking disabled
 */
export async function imagetwist(href: string, src?: string): Promise<string> {
  let imgSrc: string;

  if (src && src.includes("/th/")) {
    // Extract file extension from href because there are cases
    // where href extension differs from src e.g. `.JPG` and `.jpg`
    // or ignore extension when href has no extension at all
    const extRegex = /\.([\w]{2,4})(\?|$)/;
    const hrefExt = href.match(extRegex)?.[1];

    imgSrc = src.replace("/th/", "/i/");

    if (hrefExt) {
      imgSrc = imgSrc.replace(extRegex, `.${hrefExt}$2`);
    }
  } else {
    imgSrc = await generic(href, "img.pic");
    if (!imgSrc) {
      throw new Error(`image not found: ${href}`);
    }
  }

  return await getBlob(imgSrc);
}
