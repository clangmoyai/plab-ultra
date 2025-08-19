<!--
@component
Renders tags below title
-->

<script lang="ts">
  import { store } from "./utils/store.svelte";
  import { data } from "./utils/data.svelte";
  import { getSettings } from "./settings/handleSettings";
  import { getLinkUrl } from "./settings/handleLinks";
  import { slideFade } from "./utils/slideFade";

  let parseTitle = $derived(getSettings("parseTitle"));
  let showTags = $derived(getSettings("showTags"));
  let performerLinks = $derived(getSettings("performerLinks"));

  let derivedTags = $derived.by(
    /**
     * Returns:
     * - placeholder tags
     * - empty array
     * - deduplicated title tags
     */ () => {
      if (getSettings("incognito"))
        return ["tag1", "tag2", "tag3", "tag4", "tag5"];
      const tags = data?.title?.tags || [];
      return [...new Set(tags)];
    }
  );

  /**
   * Handles resolution tag - Number and "p" or "k"
   * number before "p" must be at least 3 digits
   * @example
   * 1080p, 4k
   */
  function resTag(tag: string): boolean {
    return /\b(?:\d{3,}p|\d+k)\b/i.test(tag);
  }
</script>

{#if parseTitle && showTags && derivedTags?.length}
  <div id="x-tags" transition:slideFade={store.transition}>
    {#each derivedTags as item, i (i)}
      {@const classList = ["tag-item", resTag(item) && "tag-res"]}
      <!-- disabled -->
      {#if !performerLinks}
        <a
          class={classList}
          href="/forum/tracker.php?nm={encodeURIComponent(item)}"
        >
          {item}
        </a>
      {:else if store.performerLinks.length === 1}
        <!-- single -->
        {@const link = store.performerLinks[0]}
        {#if link}
          <a class={classList} href={getLinkUrl(link, item)}>
            {item}
          </a>
        {/if}
      {:else}
        <!-- multiple -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span
          class={classList}
          onclick={(event): void =>
            store.openDropdown(event, item, ["tag-item--hover"])}
        >
          {item}</span
        >
      {/if}
    {/each}
  </div>
{/if}

<style>
  #x-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-bottom: var(--content-margin);
  }

  .tag-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.6rem 0.255rem 0.6rem;
    border-radius: var(--border-radius-small);
    font-size: 0.7rem;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
    opacity: 0.75;
    transition: opacity 0.1s ease;
    color: var(--tag-color);
    background-color: var(--tag-bg);
    row-gap: 0.35rem;
    column-gap: 0.35rem;
    transition: opacity 0.15s ease-in-out;
  }

  .tag-item:hover,
  :global(.tag-item--hover) {
    opacity: 1 !important;
    text-decoration: none !important;
  }

  .tag-res {
    background: var(--highlighted) !important;
    color: white !important;
    opacity: 1;
  }
</style>
