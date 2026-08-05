import { GM_fetch } from "./GM_fetch";
import { getSettings } from "../settings/handleSettings";

/**
 * Fetches a blob from the given URL and returns its object URL
 * or if enabled uses `corsproxy.io` instead
 */
export async function getBlob(url: string): Promise<string> {
  if (getSettings("proxyCache"))
    return "https://corsproxy.io/?url=" + encodeURIComponent(url);

  const { response } = await GM_fetch("GET", url, "blob");
  return URL.createObjectURL(response);
}
