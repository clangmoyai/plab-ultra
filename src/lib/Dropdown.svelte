<!--
@component
Renders dropdown performer links in its own layer because
if it's in the title it will mess up whitespace
-->

<script lang="ts">
  import { on } from "svelte/events";
  import { fade } from "svelte/transition";
  import { store } from "./utils/store.svelte";
  import { getLinkUrl } from "./settings/handleLinks";

  let top = $state(0);
  let left = $state(0);

  let container = $state<HTMLDivElement | null>(null);
  let currentTarget = $derived(store.dropdown?.currentTarget as HTMLElement);

  $effect(
    /**
     * Updates dropdown position with adjusted mouseX/Y,
     * adds class and event listener to clicked element
     */
    () => {
      if (
        !store.dropdown?.clientX ||
        !store.dropdown?.clientY ||
        !currentTarget
      )
        return;

      const rect = getClickedRect(
        store.dropdown.clientX,
        store.dropdown.clientY
      );

      if (!rect) return;

      top = rect.bottom + window.scrollY;
      left = store.dropdown.clientX + window.scrollX;

      if (store.dropdown?.classList)
        currentTarget.classList.add(...store.dropdown.classList);

      return on(currentTarget, "pointerleave", onpointerleave);
    }
  );

  /**
   * Gets correct rect in multiline text
   */
  function getClickedRect(clientX: number, clientY: number): DOMRect | null {
    const rects = currentTarget.getClientRects();
    if (!rects.length) return null;

    let clickedRect: DOMRect | null = null;

    for (let i = 0; i < rects.length; i++) {
      const rect = rects[i];
      if (
        rect &&
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        clickedRect = rect;
        break;
      }
    }

    return clickedRect;
  }

  /**
   * Leaving the dropdown or clicked element
   */
  function onpointerleave(event: PointerEvent): void {
    const related = event.relatedTarget as Node | null;

    if (currentTarget?.contains(related) || container?.contains(related))
      return;

    store.closeDropdown();
  }

  /**
   * Closes the dropdown on link navigation
   * also fixes browser history dropdown state
   */
  function onclickcapture(): void {
    store.closeDropdown();
  }
</script>

<svelte:head>
  {#each store.performerLinks as link (link.id)}
    {#if link.url && store.favIcons[link.url]}
      <link rel="prefetch" href={store.favIcons[link.url]} as="image" />
    {/if}
  {/each}
</svelte:head>

{#if store.dropdown}
  <div
    class="container"
    style:top="{top}px"
    style:left="{left}px"
    bind:this={container}
    {onpointerleave}
    out:fade={store.transition}
  >
    <div class="indicator"></div>
    <div class="items">
      {#each store.performerLinks as link (link.id)}
        {#if link.label && link.url && store.favIcons[link.url] && store.dropdown?.item}
          <a href={getLinkUrl(link, store.dropdown.item)} {onclickcapture}>
            <img src={store.favIcons[link.url]} alt={link.label} />
            {link.label}
          </a>
        {/if}
      {/each}
    </div>
  </div>
{/if}

<style>
  .container {
    position: absolute;
    z-index: 2;
    transform: translateX(-50%);
    padding-top: 0.2rem;
  }

  .indicator {
    position: absolute;
    left: calc(50% - 8px);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 7px solid var(--post-border-color);
  }

  .items {
    margin-top: 7px;
    position: relative;
    backdrop-filter: blur(16px);
    border-radius: var(--border-radius-large);
    user-select: none;
    border: 1px solid var(--post-border-color);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    background: var(--overlay-bg);
    white-space: nowrap;
  }

  .items img {
    width: 0.9rem;
    height: 1rem;
    width: 1rem;
    -webkit-user-drag: none;
  }

  .items a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    -webkit-user-drag: none;
  }

  .items a:hover {
    color: unset;
  }

  .items a:first-of-type {
    padding-top: 0.9rem;
  }

  .items a:last-of-type {
    padding-bottom: 1rem;
  }
</style>
