import { generic } from "./generic";

/**
 * Handles imgbox.com
 */
export async function imgbox(href: string): Promise<string> {
  if (href.includes("thumbs"))
    return href.replace("thumbs", "images").replace("_t.", "_o.");

  const selector = "#img";
  return generic(href, selector);
}
