<!--
@component
Renders images within post
-->

<script lang="ts">
  import { store } from "./utils/store.svelte";
  import { observer, observeImg } from "./utils/handleUpgrade";
  import { data } from "./utils/data.svelte";
  import { getSettings } from "./settings/handleSettings";
  import Resize from "./Resize.svelte";
  import Loader from "./Loader.svelte";
  import Debug from "./Debug.svelte";
  import Columns from "./Columns.svelte";
  import type { Image } from "./utils/data.svelte";

  let clicked = $state(false);
  let resized = $state(false);
  let containerWidth = $state(0);

  let upgradeImages = $derived(getSettings("upgradeImages"));
  let incognito = $derived(getSettings("incognito"));
  let lastImageFirst = $derived(getSettings("lastImageFirst"));
  let debugImgs = $derived(getSettings("debugImgs"));

  /**
   * Sets 'broken' dataset attribute on image error
   */
  function onerror(event: Event): void {
    const img = event.currentTarget as HTMLImageElement;
    img.dataset["broken"] = "true";
  }

  /**
   * Returns the index of an image in the `data.images` array for css order
   * @example
   * if lastImageFirst -> the index of the last image is returned as -1
   */
  function handleOrder(index: number): number | undefined {
    if (data.images && lastImageFirst)
      if (index === data.images.length - 1) return -1;
    return;
  }

  $effect(
    /**
     * Observes `store.imgRefs` and upgrades their sources:
     * - only if `upgradeImages` is `true`
     * - keeps track of images with:
     *
     * ```js
     * const observed = new WeakSet<HTMLImageElement>()
     * ```
     */ () => {
      if (upgradeImages && store.imgRefs.length) {
        observeImg(store.imgRefs);
      }
      return (): void => observer.disconnect();
    },
  );

  let images = $derived.by<Image[]>(() => {
    const images = data.images || [];

    if (!lastImageFirst || images.length <= 1) {
      return images;
    }

    const reordered = images.slice();
    reordered.unshift(reordered.pop()!);
    return reordered;
  });
</script>

{#snippet Images(images: Image[])}
  {#each images as img, i (img.id)}
    <!-- check if image is a gif by extension -->
    {@const gif = img?.src?.toLowerCase()?.includes(".gif")}

    <!-- no href means image is directly linked which can cause rate limiting -->
    {@const loading = img?.href ? "eager" : "lazy"}

    <div data-id={img.id} class="container" style:order={handleOrder(i)}>
      {#if debugImgs}
        <Debug {img} />
      {/if}

      <a href={img?.href} target="_blank" class:gif>
        <img
          {loading}
          id={img.id}
          src={img?.src}
          alt={img?.src}
          class:incognito
          class:gif
          bind:this={store.imgRefs[i]}
          {onerror}
        />

        <!-- gif is loading as it plays  -->
        {#if !gif}
          {@const statusLoading =
            store.upgradeImgData?.[img.id]?.status === "loading"}

          <Loader loading={upgradeImages && statusLoading} />
        {/if}
      </a>
    </div>
  {/each}
{/snippet}

{#if data.images && data.images.length}
  <div
    id="x-images"
    class="section"
    class:dragging={clicked && resized}
    bind:this={store.ultraImages}
    bind:offsetWidth={containerWidth}
  >
    <Columns />

    <Resize bind:clicked bind:resized {containerWidth}>
      {@render Images(images)}
    </Resize>
  </div>
{/if}

<style>
  .section {
    display: grid;
    padding: 1rem;
    justify-items: center;
    margin-bottom: var(--content-margin);
    position: relative;
  }

  a {
    position: relative;
    display: block;
    overflow: hidden;
  }

  .container {
    border-radius: var(--border-radius-small);
    height: min-content;
    overflow: hidden;

    /* "columns" */
    break-inside: avoid;
    margin-bottom: 0.75rem;
  }

  img {
    width: 100%;
    height: auto;
    border: none;
    flex: 1 0 100%;
    user-select: none;
    will-change: width;
    display: block;

    /* broken img */
    word-break: break-all;
  }

  a.gif {
    width: fit-content;
  }

  img.gif {
    width: auto;
    max-width: 100%;
  }

  .incognito {
    filter: var(--incognito-filter) !important;
  }

  .dragging a,
  .dragging img {
    pointer-events: none;
  }
</style>
