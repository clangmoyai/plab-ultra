<!--
@component
App component mounted from `main.ts`
-->

<script lang="ts">
  import { on } from "svelte/events";
  import { store } from "./lib/utils/store.svelte";
  import { handleData, data } from "./lib/utils/data.svelte";
  import { loadShowSettings } from "./lib/settings/handleSettings";
  import { loadOptions } from "./lib/settings/handleOptions";
  import { loadPerformerLinks } from "./lib/settings/handleLinks";
  import { loadResize } from "./lib/utils/handleResize";
  import { forumDisabled } from "./lib/utils/handleUserscript";
  import Events from "./lib/Events.svelte";
  import Header from "./lib/Header.svelte";
  import Settings from "./lib/settings/Settings.svelte";
  import Float from "./lib/Float.svelte";
  import Dropdown from "./lib/Dropdown.svelte";
  import Title from "./lib/Title.svelte";
  import Stats from "./lib/Stats.svelte";
  import Tags from "./lib/Tags.svelte";
  import FileList from "./lib/FileList.svelte";
  import Images from "./lib/Images.svelte";
  import Post from "./lib/Post.svelte";
  import Pagination from "./lib/Pagination.svelte";

  let { app }: { app: HTMLDivElement } = $props();
  let firstPage = $state<boolean>(true);

  if (document.readyState === "loading") {
    on(document, "DOMContentLoaded", parseDOM, { once: true });
  } else {
    parseDOM();
  }

  /**
   * Entry point to parse DOM with `handleData()` and cleanup
   */
  function parseDOM(): void {
    // early return on `forumDisabled`
    if (forumDisabled(app)) return;

    // handleData
    if (Object.keys(data).length === 0) {
      Object.assign(data, handleData());

      store.showSettings = loadShowSettings();
      store.options = loadOptions();
      store.performerLinks = loadPerformerLinks();
      store.resizeWidth = loadResize();

      // firstPage boolean
      const startParam = new URLSearchParams(location.search).get("start");
      firstPage = startParam === null || Number(startParam) === 0;

      // cleanup other elements
      Array.from(document.body.children).forEach((child) => {
        if (child !== app) child.remove();
      });

      // done
      app.style.height = "auto";
    }
  }

  $effect(
    /**
     * Side‑effect that applies the current `darkMode` value
     */ () => {
      const darkMode = data.theme?.darkmode;
      if (darkMode !== undefined) {
        document.documentElement.dataset["theme"] = darkMode ? "dark" : "light";
        sessionStorage.setItem("dark-mode", darkMode.toString());
      }
    }
  );

  $inspect(data);
</script>

{#if Object.keys(data).length !== 0}
  <Events />

  <Header />

  <Settings />

  <Float />

  <Dropdown />

  <Title />

  {#if firstPage}
    <Stats />
  {:else}
    <Pagination />
  {/if}

  <Tags />

  <FileList />

  <Images />

  <Post />

  <Pagination />
{/if}
