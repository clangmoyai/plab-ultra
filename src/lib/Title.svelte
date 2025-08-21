<!--
@component
Renders (parsed) post title
-->

<script lang="ts">
  import { getLinkUrl } from "./settings/handleLinks";
  import { store } from "./utils/store.svelte";
  import { data } from "./utils/data.svelte";
  import { getSettings } from "./settings/handleSettings";

  let incognito = $derived(getSettings("incognito"));
  let parseTitle = $derived(getSettings("parseTitle"));
  let performerLinks = $derived(getSettings("performerLinks"));

  let title = $derived(data.title?.parsed);
  let searchTerms = $derived(data.title?.searchTerms);
  let original = $derived(data.title?.original);

  let firstTag = $derived.by(
    /**
     * Returns first tag if no search terms
     */ () => {
      const tag = data.title?.tags?.[0];
      if (searchTerms?.length === 0 && tag) return tag;
      return;
    }
  );

  let items = $derived.by(
    /**
     * Splits title into parts, separating search terms from rest of the title,
     * search terms are sorted by length (longest first) to handle any overlapping
     */
    () => {
      if (!title || !searchTerms?.length) return [title];

      const sortedTerms = [...searchTerms].sort((a, b) => b.length - a.length);
      const parts = [];

      let remaining = title;

      while (remaining) {
        let foundMatch = null;
        let foundIndex = remaining.length;

        for (const term of sortedTerms) {
          const index = remaining.indexOf(term);
          if (index !== -1 && index < foundIndex) {
            foundMatch = term;
            foundIndex = index;
          }
        }

        if (foundMatch) {
          if (foundIndex > 0) parts.push(remaining.slice(0, foundIndex));
          parts.push(foundMatch);
          remaining = remaining.slice(foundIndex + foundMatch.length);
        } else {
          parts.push(remaining);
          break;
        }
      }

      return parts.filter((part) => part !== "");
    }
  );

  let documentTitle = $derived.by(
    /**
     * Returns:
     * - first tag if title is empty
     * - parsed title
     * - document title
     */ () => {
      if (parseTitle) {
        if (firstTag) {
          return firstTag;
        } else if (title) {
          return title;
        }
      }
      return document.title;
    }
  );
</script>

<svelte:head>
  {#if documentTitle}
    <title>{documentTitle}</title>
  {/if}
</svelte:head>

<!-- -------------------------------------------------- -->

{#snippet Dropdown(item: string)}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <span
    class="title-item"
    onclick={(event): void =>
      store.openDropdown(event, item, ["title-item--hover"])}
  >
    {item}
  </span>
{/snippet}

{#snippet Placholder()}
  {@const items = ["Performer", "Title"]}
  {#each items as item, i (i)}
    {i > 0 ? " - " : ""}
    {@render Dropdown(item)}
  {/each}
{/snippet}

{#snippet ParsedTitle(searchTerms: string[])}
  {@const validLinks = store.performerLinks.filter(
    (link) => link.url && link.label
  )}

  {#each items as item, i (i)}
    {#if item && searchTerms.includes(item)}
      {#if validLinks.length === 0 || !performerLinks}
        <a
          class="title-item"
          href="/forum/tracker.php?nm={encodeURIComponent(item)}"
        >
          {item}
        </a>
      {:else if validLinks.length === 1 && store.performerLinks[0]}
        <a class="title-item" href={getLinkUrl(store.performerLinks[0], item)}>
          {item}
        </a>
      {:else if validLinks.length > 1}
        {@render Dropdown(item)}
      {/if}
    {:else}
      <!-- separators -->
      {item}
    {/if}
  {/each}
{/snippet}

<!-- -------------------------------------------------- -->

{#if incognito}
  <h1 id="x-title">{@render Placholder()}</h1>
{:else if firstTag}
  <h1 id="x-title">{firstTag}</h1>
{:else if parseTitle && title && searchTerms}
  <h1 id="x-title">{@render ParsedTitle(searchTerms)}</h1>
{:else if original}
  <h1 id="x-title">
    <a
      class="original-title"
      href="/forum/tracker.php?nm={encodeURIComponent(original)}">{original}</a
    >
  </h1>
{/if}

<style>
  #x-title {
    font-size: 1.375rem;
    margin-top: 0;
    margin-bottom: var(--content-margin);
  }

  .original-title {
    text-decoration: none;
  }

  .title-item {
    color: unset;
    text-decoration: none;
  }

  .title-item:hover,
  :global(.title-item--hover) {
    text-decoration: underline !important;
    color: var(--link-color) !important;
    cursor: pointer;
  }
</style>
