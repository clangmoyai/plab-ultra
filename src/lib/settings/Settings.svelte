<!--
@component
Renders userscript settings below `Header.svelte`
-->

<script lang="ts">
  import { store } from "../utils/store.svelte";
  import { toggleShowSettings as onclick } from "./handleSettings";
  import Options from "./Options.svelte";
  import Actions from "./Actions.svelte";
  import Links from "./Links.svelte";
  import { slideFade } from "../utils/slideFade";
</script>

{#if store.showSettings}
  <div transition:slideFade={store.transition}>
    <button {onclick}> × </button>

    <Options />

    <Links />

    <Actions />
  </div>
{/if}

<style>
  div {
    font-size: 0.8rem;
    position: relative;
    background: var(--post-bg);
    border: 1px solid var(--post-border-color);
    padding: 0.9rem 1rem 1rem 1rem;
    border-radius: var(--border-radius-large);
    overflow: hidden;
    display: flex;
    flex-flow: column;
    font-family: inherit;
    margin-bottom: var(--content-margin);
  }

  button {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    background: none !important;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    flex-shrink: 0;
    user-select: none;
  }
</style>
