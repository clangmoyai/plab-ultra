<!--
@component
Renders debug message in `Images.svelte`
-->

<script lang="ts">
  import { slide } from "svelte/transition";
  import { store, type ImgData } from "./utils/store.svelte";
  import type { Image } from "./utils/data.svelte";
  import Checkmark from "./Checkmark.svelte";

  let { img }: { img: Image } = $props();

  let data = $derived(store.upgradeImgData?.[img.id] || {});

  /**
   * Copies debug data to clipboard
   */
  async function copyToClipboard(
    data: { id: string; href: string; src: string } & ImgData
  ): Promise<void> {
    try {
      const dataWithoutId = Object.fromEntries(
        Object.entries(data).filter(([key]) => key !== "id")
      );

      await navigator.clipboard.writeText(
        JSON.stringify(dataWithoutId, null, 2)
      );
    } catch (err) {
      console.error("Failed to copy debug:", err);
    }
  }
</script>

{#snippet Item(
  key: string | null | undefined,
  value: string | null | undefined,
  error?: string | null | undefined
)}
  <p data-key={key}>
    <strong>{key}</strong>:
    {#if value && value.startsWith("http")}
      <a href={value}>{value}</a>
    {:else if value === undefined}
      <span class="error">null</span>
    {:else}
      {value}
      {#if value === "error" && error}
        <span class="error">{error}</span>
      {/if}
    {/if}
  </p>
{/snippet}

<div class="debug" transition:slide={store.transition}>
  {@render Item("status", data.status, data.error)}
  {@render Item("href", img.href)}
  {@render Item("src", img.src)}
  {@render Item("resolved", data.resolved)}

  <div class="copy">
    <Checkmark
      onclick={(): Promise<void> =>
        copyToClipboard({
          id: img.id,
          href: img.href,
          src: img.src,
          status: data.status,
          resolved: data.resolved,
          error: data.error,
        })}
      title="Copy to clipboard"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          d="M17 9H7V7h10m0 6H7v-2h10m-3 6H7v-2h7M12 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m7 0h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"
        />
      </svg>
    </Checkmark>
  </div>
</div>

<style>
  .debug {
    position: relative;
    display: flex;
    flex-direction: column;
    font-family: monospace;
    background: var(--button-color);
    padding: 1rem;
    width: -webkit-fill-available;
    color: white;
    user-select: text;
    word-wrap: break-word;
    gap: 0.4rem;
  }

  .debug a {
    color: white;
    text-decoration: none;
    display: contents;
  }

  .error {
    color: red;
  }

  .copy {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: none !important;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    flex-shrink: 0;
  }

  svg path {
    transform-origin: center;
    fill: white;
    transform: translateY(2px);
  }
</style>
