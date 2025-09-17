<!--
@component
Resize component for `Images.svelte`
-->

<script lang="ts">
  import { getSettings } from "./settings/handleSettings";
  import { saveResize } from "./utils/handleResize";
  import { store } from "./utils/store.svelte";
  import type { Snippet } from "svelte";

  let {
    clicked = $bindable(),
    resized = $bindable(),
    containerWidth,
    children,
  }: {
    clicked: boolean;
    resized: boolean;
    containerWidth: number;
    children: Snippet;
  } = $props();

  let dragResize = $derived(getSettings("dragResize"));
  let clientX = $state(0);
  let prevResizeWidth = $state(0);
  let draggedEl: Element | null = $state(null);
  let draggedElCenter = $state(0);

  let fitColumnCount = $state(store.columnCount);

  /**
   * Calculates the center coordinates of image
   */
  function getElementCenter(element: Element): number {
    const rect = element.getBoundingClientRect();
    return rect.top + rect.height / 2;
  }

  /**
   * Limits width between min and max
   */
  function clamp(value: number, min = 20, max = 100): number {
    return Math.min(max, Math.max(min, value));
  }

  /**
   * Handles a pointer down event
   * - Start state
   */
  function onpointerdown(event: PointerEvent): void {
    if (!dragResize || !(event.target instanceof HTMLImageElement)) return;

    // only handle left mouse button
    if (event.button !== 0) return;

    event.preventDefault();

    // img
    draggedEl = event.target;
    draggedElCenter = getElementCenter(draggedEl);

    // drag
    clicked = true;
    clientX = event.clientX;
    prevResizeWidth = store.resizeWidth;
  }

  /**
   * Handles a pointer move event
   * - Drag state
   */
  async function onpointermove(event: PointerEvent): Promise<void> {
    if (!dragResize || !clicked) return;

    if (!resized) {
      resized = event.clientX - clientX !== 0;
    } else if (resized && containerWidth) {
      const deltaPercent = ((event.clientX - clientX) / containerWidth) * 100;

      let newWidth = prevResizeWidth + deltaPercent;
      let clampedWidth = clamp(newWidth);

      if (clampedWidth !== newWidth) {
        prevResizeWidth = clampedWidth;
        clientX = event.clientX;
      }

      // round to nearest 0.1
      store.resizeWidth = Math.round(clampedWidth * 10) / 10;

      // firefox still lags because of large image resizing
      requestAnimationFrame(() => {
        if (!draggedEl) return;
        const currentCenter = getElementCenter(draggedEl);
        const deltaY = currentCenter - draggedElCenter;
        window.scrollTo(0, window.scrollY + deltaY);
      });
    }
  }

  /**
   * Handles a pointer up event
   * - Resets state
   */
  function onpointerup(): void {
    if (clicked && resized) {
      saveResize(store.resizeWidth);
    }

    clicked = false;
    resized = false;
    clientX = 0;
    prevResizeWidth = 0;
  }

  /**
   * Waits for all images to load
   */
  function waitForImages(containerEl: Element): Promise<unknown> {
    const images = containerEl.querySelectorAll("img");
    return Promise.all(
      Array.from(images).map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((resolve) => {
              img.onload = img.onerror = resolve;
            })
      )
    );
  }

  /**
   * Gets actual number of columns being used
   */
  function getpopulatedColumns(containerEl: Element): number {
    const marker = document.createElement("span");
    marker.style.cssText =
      "position: absolute; visibility: hidden; height: 1px;";

    containerEl.appendChild(marker);

    const markerRect = marker.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();
    const columnWidth =
      containerRect.width /
      parseFloat(getComputedStyle(containerEl).columnCount);
    const actualColumns =
      Math.floor((markerRect.left - containerRect.left) / columnWidth) + 1;

    containerEl.removeChild(marker);
    return actualColumns;
  }

  $effect(() => {
    fitColumnCount = store.columnCount;

    if (store.columnCount === 1) return;

    const containerEl = store.ultraImages?.querySelector(
      '[style*="column-count"]'
    );

    if (containerEl) {
      waitForImages(containerEl).then(() => {
        requestAnimationFrame(() => {
          const populatedColumns = getpopulatedColumns(containerEl);
          if (populatedColumns < store.columnCount) {
            fitColumnCount = populatedColumns;
          }
        });
      });
    }
  });
</script>

<svelte:document {onpointermove} {onpointerup} />

<div
  class:dragging={clicked && resized}
  style:width="{dragResize ? store.resizeWidth : 100}%"
  style:column-count={fitColumnCount}
  {onpointerdown}
>
  {@render children()}
</div>

<style>
  div {
    column-gap: 0.75rem;
    column-fill: balance;
  }

  .dragging {
    cursor: ew-resize;
  }
</style>
