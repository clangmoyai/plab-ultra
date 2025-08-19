<!--
@component
Renders performer links in `Settings.svelte`
-->

<script lang="ts">
  import { store } from "../utils/store.svelte";
  import { getSettings } from "./handleSettings";
  import {
    updatePerformerLink,
    removePerformerLink,
    getFaviconUrl,
    type PerformerLink,
  } from "./handleLinks";
  import { slideFade } from "../utils/slideFade";

  const placeholders = {
    id: "ID",
    label: "Label",
    url: "URL",
  };

  let parseTitle = $derived(getSettings("parseTitle"));
  let performerLinks = $derived(getSettings("performerLinks"));
</script>

{#snippet Favicon(link: PerformerLink)}
  {@const src = getFaviconUrl(link.url)}
  {#if src}
    <img {src} alt={link.label} />
  {/if}
{/snippet}

{#snippet Input(key: keyof PerformerLink, link: PerformerLink, index: number)}
  <input
    type="text"
    name={placeholders[key]}
    placeholder={placeholders[key]}
    bind:value={link[key]}
    oninput={(): void =>
      updatePerformerLink(index, {
        [key]: link[key],
      })}
  />
{/snippet}

{#snippet Remove(index: number)}
  <button title="Remove link" onclick={(): void => removePerformerLink(index)}>
    ×
  </button>
{/snippet}

{#if parseTitle && performerLinks && store.performerLinks?.length}
  <div class="container" transition:slideFade={store.transition}>
    {#each store.performerLinks as link, index (link.id)}
      <div class="item" transition:slideFade={store.transition}>
        {@render Favicon(link)}
        {@render Input("label", link, index)}
        {@render Input("url", link, index)}
        {@render Remove(index)}
      </div>
    {/each}
  </div>
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 1.25rem;
  }

  .item {
    display: grid;
    grid-template-columns: min-content minmax(0, 10rem) 1fr auto;
    align-items: center;
    gap: 0.75rem;
    min-width: 0;
    margin-bottom: 0.5rem;
  }

  img {
    width: 0.9rem;
    height: 0.9rem;
    flex-shrink: 0;
  }

  input[type="text"] {
    padding: 0.3rem 0.5rem 0.4rem 0.5rem;
    border: 1px solid var(--post-border-color);
    border-radius: var(--border-radius-small);
    font-size: 0.8rem !important;
    background: var(--input-bg) !important;
    color: inherit;
    font: inherit;
    min-width: 0;
  }

  button {
    background: rgb(166, 47, 47, 0.75) !important;
    border-radius: var(--border-radius-small);
    font-size: 1.2rem;
    border: none !important;
    color: white !important;
    display: flex;
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
    align-items: flex-end;
    justify-content: center;
    user-select: none;
  }

  button:hover {
    background: rgb(166, 47, 47) !important;
  }
</style>
