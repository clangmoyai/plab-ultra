import { generic } from "./generic";

/**
 * Handles imagevenue.com
 */
export async function imagevenue(
  href: string,
  selector: string,
): Promise<string> {
  try {
    return await generic(href, selector);
  } catch {
    // Sometimes serves an ad gate on first load (retry once)
    return generic(href, selector);
  }
}
