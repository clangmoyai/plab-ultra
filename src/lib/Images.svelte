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
    }
  );
</script>

{#if data.images && data.images.length}
  <div
    id="x-images"
    class="section"
    class:dragging={clicked && resized}
    bind:this={store.ultraImages}
    bind:offsetWidth={containerWidth}
  >
    <Resize bind:clicked bind:resized {containerWidth}>
      {#each data.images as img, i (img.id)}
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
              <Loader
                loading={upgradeImages &&
                  store.upgradeImgData?.[img.id]?.status === "loading"}
              />
            {/if}
          </a>
        </div>
      {/each}
    </Resize>
  </div>
{/if}

<style>
  .section {
    display: flex;
    padding: 1rem;
    flex-direction: column;
    align-items: center;
    user-select: none;
    margin-bottom: var(--content-margin);
  }

  a {
    position: relative;
    display: block;
    overflow: hidden;
  }

  .container {
    border-radius: var(--border-radius-small);
    overflow: hidden;
  }

  img {
    width: 100%;
    height: auto;
    border: none;
    flex: 1 0 100%;
    user-select: none;
    will-change: width;
    display: block;
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
