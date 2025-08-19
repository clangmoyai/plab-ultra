import { data } from "./data.svelte";
import { store } from "../utils/store.svelte";
import { getSettings } from "../settings/handleSettings";

export type DownloadState = "idle" | "downloading" | "success" | "error";

/**
 * Sets torrent download state
 */
function state(state: DownloadState): void {
  store.downloadState = state;
}

/**
 * Handles torrent with either direct download or using
 * {@link https://github.com/valpackett/transmitter Transmitter}
 */
export async function handleDownload(
  event: MouseEvent | KeyboardEvent
): Promise<void> {
  event.preventDefault();

  if (store.downloadState === "downloading") {
    return;
  }

  if (!data.torrent?.link) {
    return state("error");
  }

  try {
    store.downloadState = "downloading";

    // .torrent
    if (!getSettings("sendToTransmitter")) {
      window.location.assign(data.torrent.link);
      return state("success");
    }

    // Transmitter
    const url =
      "http://transmitter.web-extension/" +
      encodeURIComponent(data.torrent.link);

    const bgColor = getComputedStyle(document.documentElement).getPropertyValue(
      "--main-bg"
    );

    // hack, open new NON-https window
    // load url in img -> img callback close window
    const page = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { background-color: ${bgColor}; }
            img { display: none; }
          </style>
        </head>
        <body>
          <img src="${url}" onload="window.close()" onerror="window.close()">
        </body>
      </html>
    `;

    window.open(
      URL.createObjectURL(new Blob([page], { type: "text/html" })),
      "_blank",
      "noopener"
    );

    state("success");
  } catch (err) {
    console.error("Error downloading torrent:", err);
    state("error");
  }
}
