import {
  GM_xmlhttpRequest,
  type GmResponseTypeMap,
} from "vite-plugin-monkey/dist/client";

/**
 * Wrapper for {@link GM_xmlhttpRequest}
 *
 *  {@link https://github.com/lisonge/vite-plugin-monkey?tab=readme-ov-file#esm-usage}
 */
export function GM_fetch(
  method: "GET" | "POST" | "HEAD",
  url: string,
  responseType: keyof GmResponseTypeMap,
  headers?: Record<string, string>,
  data?: string
): Promise<GmResponseTypeMap[typeof responseType]> {
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      method,
      url,
      responseType,
      headers,
      data,
      onload: (response) => resolve(response),
      onerror: () => reject(new Error(`GM_fetch failed: ${url}`)),
    });
  });
}
