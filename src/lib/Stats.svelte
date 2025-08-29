<!--
@component
Stats
- Seeders
- Leechers
- Size
- Date
- Files
- Thanks
- Downloads
- Download
- Related
-->

<script lang="ts">
  import { onMount } from "svelte";
  import { handleRelativeDate } from "./utils/handleParse";
  import { handleDownload, type DownloadState } from "./utils/handleDownload";
  import { store } from "./utils/store.svelte";
  import { data } from "./utils/data.svelte";
  import { getSettings } from "./settings/handleSettings";
  import { getRelated } from "./utils/handleRelated";
  import Thank from "./Thank.svelte";

  let showFullDate = $state(false);
  let expandFiles = $derived(getSettings("expandFiles"));
  let fileListState = $state<"idle" | "loading" | "loaded">("idle");
  let downloadState = $state<DownloadState>("idle");

  onMount(
    /**
     * Toggles file list from option `expandFiles`
     */ () => {
      if (expandFiles) {
        store.toggleFileList();
      }
    }
  );

  $effect(
    /**
     * Updates fileListState
     */ () => {
      if (!store.showFileList) {
        fileListState = "idle";
      }

      if (store.fileListData && fileListState === "loading") {
        fileListState = "loaded";
      }
    }
  );

  /**
   * Toggles the display of relative time and full date
   */
  function handleDateClick(): void {
    showFullDate = !showFullDate;
  }

  /**
   * Toggles the file list
   */
  function handleFileListClick(): void {
    if (store.showFileList) {
      fileListState = "idle";
    } else {
      fileListState = "loading";
    }
    store.toggleFileList();
  }
</script>

<!-- -------------------------------------------------- -->

{#snippet Item(title: string, data?: string | null)}
  {#if data}
    <div class="item">
      <span class="title">{title}:</span>
      <span class={title.toLowerCase()}>{data}</span>
    </div>
  {:else}
    {@render Error(title)}
  {/if}
{/snippet}

{#snippet Error(title: string)}
  <div class="item">
    <span class="title">{title}:</span>
    <span class="error">N/A</span>
  </div>
{/snippet}

<!-- -------------------------------------------------- -->

{#if data.user && !data.forumline}
  <div id="x-stats">
    {@render Item("Seeders", data.torrent?.seeders || "0")}
    {@render Item("Leechers", data.torrent?.leechers || "0")}
    {@render Item("Size", data.torrent?.size)}

    <!-- date -->
    {#if data.torrent?.date}
      <button class="item" onclick={handleDateClick}>
        <span class="title">Date:</span>
        {#if !showFullDate}
          {handleRelativeDate(data.torrent.date)}
        {:else}
          {data.torrent.date?.toLocaleString()}
        {/if}
      </button>
    {:else}
      {@render Error("Date")}
    {/if}

    <!-- file list -->
    <button
      class="item"
      onclick={handleFileListClick}
      disabled={fileListState === "loading"}
    >
      <span class="title">Files:</span>
      {#if fileListState === "loading"}
        Loading...
      {:else if store.showFileList}
        Hide
      {:else}
        Show
      {/if}
    </button>

    <!-- thank -->
    {#if data.thank?.element && data.thank?.list}
      <span class="item">
        <Thank />
      </span>
    {:else}
      {@render Error("Thanks")}
    {/if}

    <!-- times -->
    {#if data.torrent?.times != null}
      {@const format = new Intl.NumberFormat("en-US").format(
        data.torrent.times
      )}
      {@render Item("Downloads", format)}
    {:else}
      {@render Error("Downloads")}
    {/if}

    <!-- download -->
    {#if data.torrent}
      <button
        class="item"
        onclick={handleDownload}
        disabled={downloadState === "downloading"}
      >
        <span class="title">Download:</span>
        {#if downloadState === "error"}
          Error
        {:else if downloadState === "downloading"}
          Loading...
        {:else}
          <a href={data.torrent?.link}>.torrent</a>
        {/if}
      </button>
    {:else}
      {@render Error("Download")}
    {/if}

    <!-- related -->
    {#if data.title?.original}
      {@const max = 5}
      {#await getRelated(data.title.original) then related}
        {@const results = related.filter(
          (result) => result.textContent !== data.title?.original
        )}
        {#if results.length > 0 && results.length < max}
          <div class="item">
            <span class="title">Related:</span>
            {#each results as result, i (i)}
              <span>
                <a href={result.href}>{result.resolution}</a>
                {i < results.length - 1 ? ", " : ""}
              </span>
            {/each}
          </div>
        {/if}
      {/await}
    {/if}
  </div>
{/if}

<style>
  #x-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: var(--content-margin);
  }

  .item:not(:last-child)::after {
    display: inline-block;
    content: "|";
    color: var(--post-border-color);
    margin-left: 0.8rem;
    transform: translateY(-1px);
  }

  button {
    all: unset;
    cursor: pointer;
    background: none !important;
  }

  button:disabled {
    cursor: text;
    user-select: text;
  }

  .seeders {
    color: var(--seed-color);
  }

  .leechers,
  .error {
    color: var(--leech-color);
  }
</style>
