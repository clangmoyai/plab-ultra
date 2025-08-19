<!--
@component
Renders optional top-right floating download button
-->

<script lang="ts">
  import { handleDownload } from "./utils/handleDownload";
  import { fade } from "svelte/transition";
  import { store } from "./utils/store.svelte";
  import { getSettings } from "./settings/handleSettings";

  let floatingDownload = $derived(getSettings("floatingDownload"));
</script>

{#if floatingDownload}
  <div in:fade={store.transition}>
    <button
      class="ic--sharp-download"
      onclick={handleDownload}
      title="Download"
      aria-label="Download"
    >
    </button>
  </div>
{/if}

<style>
  div {
    position: fixed;
    top: 1.3rem;
    right: 2.5rem;
    z-index: 9999;
    border-radius: var(--border-radius-large);
    padding: 0.35rem;
    border: 1px solid var(--post-border-color);
    background-color: rgb(0 156 60) !important;
  }

  button {
    cursor: pointer;
    aspect-ratio: 1 / 1;
    --size: 1.7rem;
    width: var(--size);
    width: var(--size);
    background-color: white !important;
  }

  /* icon */
  .ic--sharp-download {
    display: inline-block;
    --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 9h-4V3H9v6H5l7 7zM5 18v2h14v-2z'/%3E%3C/svg%3E");
    background-color: currentColor;
    -webkit-mask-image: var(--svg);
    mask-image: var(--svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
  }
</style>
