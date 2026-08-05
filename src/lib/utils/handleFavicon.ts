/**
 * Retrieves the favicon URL for dropdown performer links
 *
 * Note: try/catch only guards `new URL...` and not
 * whether the resulting favicon URL actually resolves
 */
export function getFaviconUrl(url: string): string {
  try {
    const domain = new URL(url).host;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return "https://www.google.com/s2/favicons?domain=invalid&sz=64";
  }
}
