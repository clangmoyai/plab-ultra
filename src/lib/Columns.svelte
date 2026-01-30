<!--
@component
Renders column count control for `Images.svelte`
-->

<script lang="ts">
  import { store } from "./utils/store.svelte";
  import { slideFade } from "./utils/slideFade";
  import { saveColumnCount } from "./utils/handleColumns";

  let open = $state(false);

  /**
   * Opens controls
   */
  function onpointerenter(): void {
    open = true;
  }

  /**
   * Closes controls
   */
  function onpointerleave(): void {
    open = false;
  }

  /**
   * Saves grid size on change
   */
  function onchange(): void {
    saveColumnCount(store.columnCount);
  }
</script>

<div role="img" class="image-columns" {onpointerenter} {onpointerleave}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      d="M22 9.999V20a1 1 0 0 1-1 1h-8V9.999zm-11 6V21H3a1 1 0 0 1-1-1v-4.001zM11 3v10.999H2V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3.999h-9V3z"
    />
  </svg>

  {#if open}
    {@const opts = { ...store.transition, axis: "x" }}
    <div class="slider" transition:slideFade={opts}>
      <input
        type="range"
        bind:value={store.columnCount}
        {onchange}
        min="1"
        max="5"
        step="1"
      />

      <span class="value" title="Max columns">
        <span class="text">
          {store.columnCount}
        </span>
      </span>
    </div>
  {/if}
</div>

<style>
  .image-columns {
    display: flex;
    grid-template-columns: auto auto 1fr;
    position: absolute;
    top: -1px;
    right: -1px;
    background: transparent !important;
    padding: 0.75rem;
    z-index: 2;

    /* dropdown style */
    background: var(--overlay-bg) !important;
    backdrop-filter: blur(16px);
    border-radius: 0 0 0 var(--border-radius-large);
    border: 1px solid var(--post-border-color);
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0) 0px 25px 50px -12px;
  }

  .image-columns:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  }

  svg {
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
    fill: white;
    opacity: 0.75;
    mix-blend-mode: difference;
  }

  .slider {
    display: flex;
    gap: 0.55rem;
  }

  input {
    margin-left: 0.75rem;
  }

  .value {
    --size: 1.25rem;
    width: var(--size);
    height: var(--size);
    font-weight: 500;
    font-size: 0.75rem;
    background: var(--tag-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  .value .text {
    margin-top: -1px;
    color: var(--tag-color);
  }
</style>
