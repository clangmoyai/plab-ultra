import { generic } from "./generic";

/**
 * Handles imgxxt.in
 */
export async function imgxxt(href: string): Promise<string> {
  const selector = "#image-viewer-container > img";
  const imgSrc = await generic(href, selector);

  // remove any "medium" resolution
  return imgSrc.replace(".md.", ".");
}
