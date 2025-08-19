<!--
@component
Renders checkboxes in `Settings.svelte`
-->

<script lang="ts">
  import { store } from "../utils/store.svelte";
  import { getSettings } from "./handleSettings";
  import { saveOptions } from "./handleOptions";
  import { clearCache } from "../utils/handleCache";

  let parseTitle = $derived(getSettings("parseTitle"));

  /**
   * Handles checkbox options and saves changes
   */
  function onchange(event: Event): void {
    const checkbox = event.target as HTMLInputElement | null;
    if (!checkbox) return;

    const handleToggleFileList =
      checkbox.id === "expandFiles" && store.showFileList !== checkbox.checked;
    if (handleToggleFileList) store.toggleFileList();

    const handleClearCache = checkbox.id === "cacheImages" && !checkbox.checked;
    if (handleClearCache) clearCache();

    saveOptions();
  }
</script>

<!-- options -->
<div class="container">
  {#each Object.entries(store.options) as [title, items] (title)}
    <div class="column">
      <h2>{title}</h2>

      {#each items as item (item.key)}
        {@const disabled =
          !parseTitle &&
          (item.key === "performerLinks" || item.key === "showTags")}

        <label class:disabled>
          <input
            id={item.key}
            type="checkbox"
            {onchange}
            bind:checked={item.value}
            onclick={(event: MouseEvent): void => {
              (event.currentTarget as HTMLInputElement)?.blur();
            }}
            {disabled}
          />

          <span>
            {@html item.label}

            {#if item.description}
              <span class="description">
                {item.description}
              </span>
            {/if}
          </span>
        </label>
      {/each}
    </div>
  {/each}
</div>

<style>
  .container {
    display: flex;
    gap: 1.15rem;
    justify-content: space-between;
  }

  .column {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 0.75rem;
  }

  h2 {
    margin: 0;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  input[type="checkbox"] {
    margin: 4px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .disabled {
    text-decoration: line-through;
    cursor: default;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .description {
    opacity: 0.5;
  }

  input[type="checkbox"]:disabled {
    cursor: default;
  }

  /* breakpoints */

  @media (max-width: 1200px) {
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 1rem;
      justify-content: stretch;
    }

    .column {
      min-width: 0;
    }
  }

  @media (max-width: 768px) {
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .column {
      min-width: 0;
      width: 100%;
    }
  }
</style>
