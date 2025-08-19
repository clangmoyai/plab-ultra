import { generic } from "./generic";

/**
 * Handles imagebam.com
 */
export async function imagebam(
  href: string,
  selector: string
): Promise<string> {
  // need to pass cookie to bypass intermediary page
  const headers = { Cookie: "nsfw_inter=1" };

  return generic(href, selector, headers);
}
