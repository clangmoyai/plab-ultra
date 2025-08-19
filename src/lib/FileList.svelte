<!--
@component
Renders `store.fileListData`
-->

<script lang="ts">
  import { store } from "./utils/store.svelte";
  import { slideFade } from "./utils/slideFade";

  /**
   * Converts a number of bytes to a human-readable size string
   */
  function humanSize(bytes: number): string | null {
    if (bytes <= 0) return "0 B";

    const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const rounders = [1, 1, 1, 100, 1000, 1000, 1000, 1000, 1000];

    const idx = Math.min(
      Math.floor(Math.log(bytes) / Math.log(1024)),
      units.length - 1
    );

    let value = bytes / Math.pow(1024, idx);

    const factor = rounders[idx];
    if (!factor) return null;

    value = Math.round((value + Number.EPSILON) * factor) / factor;
    return `${value} ${units[idx]}`;
  }

  /**
   * Fetches a file list from the server and updates `store.fileListData`
   */
  async function getFileList(): Promise<void> {
    const t = new URL(location.href).searchParams.get("t");
    if (!t) {
      console.error('Missing "t" parameter');
      return;
    }

    try {
      const res = await fetch("viewtorrent.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ t }).toString(),
      });
      if (!res.ok) {
        console.error(`Server error: ${res.status}`);
        return;
      }

      const raw = await res.text();
      const doc = new DOMParser().parseFromString(raw, "text/html");

      doc.querySelectorAll("li.collapsable").forEach((li) => {
        let dirSize = 0;
        li.querySelectorAll("i").forEach((i) => {
          dirSize += parseInt(i.textContent?.trim() || "0", 10);
        });
        const spanB = li.querySelector("span.b");
        if (spanB) {
          const s = doc.createElement("s");
          s.textContent = humanSize(dirSize);
          spanB.append(" · ", s);
        }
      });

      doc.querySelectorAll("i").forEach((i) => {
        const bytes = parseInt(i.textContent?.trim() || "0", 10);
        i.textContent = humanSize(bytes);
      });

      store.fileListData = doc.body.innerHTML;
    } catch (err) {
      console.error("Failed to fetch/transform torrent filelist:", err);
    }
  }

  $effect(
    /**
     * Only fetch data if `store.fileListData` isn't set
     */ () => {
      if (!store.fileListData && store.showFileList) {
        getFileList();
      }
    }
  );
</script>

{#if store.fileListData && store.showFileList}
  <div class="filelist" transition:slideFade={store.transition}>
    {@html store.fileListData}
  </div>
{/if}

<style>
  .filelist {
    background: var(--post-bg);
    border: 1px solid var(--post-border-color);
    padding: 0.75rem;
    border-radius: var(--border-radius-large);
    margin-bottom: var(--content-margin);
  }

  /* content in {@html store.fileListData} */
  .filelist :global {
    i {
      color: var(--link-color);
      font-style: normal;
      font-weight: 500;
    }
  }
</style>
