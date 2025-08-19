<!--
@component
Renders page header with logo, links and search
-->

<script lang="ts">
  import { data } from "./utils/data.svelte";
  import { getSettings, toggleShowSettings } from "./settings/handleSettings";
  import type { Attachment } from "svelte/attachments";
  import { mockDataTest, setUserscript } from "./utils/handleUserscript";
  import { type Snippet } from "svelte";

  let incognito = $derived(getSettings("incognito"));
  let floatingDownload = $derived(getSettings("floatingDownload"));
  let messagesTitle = $derived(data.messages ? "Unread" : "Messages");

  let searchQuery = $state("");
  let mockClicked = $state(false);

  /**
   * Disables userscript
   */
  function disableUserscript(event: MouseEvent): void {
    event.preventDefault();
    setUserscript(true);
  }

  /**
   * Handles search box
   */
  function handleSearch(): void {
    const url = "/forum/tracker.php?search_id=&nm=";
    window.location.href = `${url}${encodeURIComponent(searchQuery)}`;
  }

  /**
   * Appends theme button
   */
  function appendThemeButton(
    themeElement: HTMLAnchorElement | null
  ): Attachment {
    return (element) => {
      if (!(themeElement instanceof HTMLAnchorElement)) return;
      element.appendChild(themeElement);
      return () => {
        themeElement.remove();
      };
    };
  }

  /**
   * Triggers mock data
   */
  function handleMockData(event: MouseEvent): void {
    event.preventDefault();
    mockClicked = true;
    mockDataTest();
  }
</script>

<!-- -------------------------------------------------- -->

{#snippet Item(title: string, content: Snippet)}
  <div class="item" {title}>
    {@render content()}
  </div>
{/snippet}

{#snippet Profile()}
  {#if incognito}
    Profile
  {:else if data.user?.link}
    <a href={data.user.link} title={data.user?.name}>Profile</a>
  {:else}
    <a href="/">Login</a>
  {/if}
{/snippet}

{#snippet Messages()}
  {@const href = "/forum/privmsg.php?folder=inbox"}
  <a {href} aria-label="inbox">
    <i class={["fas", "fa-envelope", data.messages && "unread"]}></i>
  </a>
{/snippet}

{#snippet Theme()}
  {#if data.theme?.element}
    <span class="themeIcon" {@attach appendThemeButton(data.theme.element)}
    ></span>
  {:else}
    {@const darkMode = data.theme?.darkmode}
    <a href="/" aria-label="placeholder">
      <i class={["fas", darkMode && "fa-sun", !darkMode && "fa-moon"]}> </i>
    </a>
  {/if}
{/snippet}

{#snippet Settings()}
  <a href="#settings" onclick={toggleShowSettings}>
    <img src="/" class="ultra-logo" alt="logo" />
  </a>

  <a href="#settings" onclick={toggleShowSettings}> Settings </a>
{/snippet}

{#snippet Disable()}
  <a href="#disable" onclick={disableUserscript}> Disable </a>
{/snippet}

{#snippet Mock()}
  <a href="#mock" onclick={handleMockData}> Mock </a>
{/snippet}

<!-- -------------------------------------------------- -->

<div id="x-header" class:floatingDownload>
  <div class="logo">
    <a href="/forum/index.php">
      <img src={data.logo} class:incognito alt="" />
    </a>
  </div>

  <div class="align-right">
    <div class="container">
      <div class="links">
        {@render Item("Profile", Profile)}
        {@render Item(messagesTitle, Messages)}
        {@render Item("Theme", Theme)}
        {@render Item("Settings", Settings)}

        {#if import.meta.env.DEV && !mockClicked}
          {@render Item("Mock", Mock)}
        {/if}

        {@render Item("Disable", Disable)}
      </div>

      <div class="search">
        <input
          type="text"
          name="search"
          placeholder="Search…"
          onkeypress={(event): void => {
            if (event.key === "Enter") handleSearch();
          }}
          bind:value={searchQuery}
        />
        <button onclick={handleSearch}>»</button>
      </div>
    </div>
  </div>
</div>

<style>
  .ultra-logo {
    width: 16px;
    display: inline-flex;
    vertical-align: top;
    margin: 0 0.45rem 0 0;
  }

  .ultra-logo:hover {
    cursor: pointer;
  }

  #x-header {
    --header-height: 4.5rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    margin-bottom: var(--content-margin);
    min-height: var(--header-height);
  }

  .floatingDownload {
    padding-right: 5rem;
  }

  .logo {
    height: var(--header-height);
  }

  .logo img {
    height: 100%;
    border-radius: var(--border-radius-large);
  }

  .align-right {
    display: flex;
    justify-content: flex-end;
    min-width: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-width: 0;
    row-gap: 1rem;
  }

  .links {
    display: flex;
    min-width: 0;
    flex-wrap: nowrap;
    justify-content: end;
  }

  .unread {
    color: var(--highlighted);
    filter: brightness(1.25);
  }

  .item {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .item + .item::before {
    display: inline-block;
    content: "|";
    margin: 0 0.8rem;
    color: var(--post-border-color);
    transform: translateY(-1px);
  }

  .search {
    display: flex;
    gap: 0.5rem;
  }

  .search input {
    flex: 1 1 auto;
    min-width: 0;
    border: 1px solid var(--post-border-color);
    color: var(--search-color);
    background: var(--input-bg) !important;
    padding: 0.3rem 0.5rem 0.4rem 0.5rem;
    border-radius: var(--border-radius-small);
    font-size: 0.8rem !important;
    font-family: inherit;
  }

  .search button {
    background: var(--input-bg) !important;
    border: 1px solid var(--post-border-color) !important;
    width: 1.75rem;
    border-radius: var(--border-radius-small);
  }

  .incognito {
    filter: var(--incognito-filter) !important;
  }

  .themeIcon :global {
    a,
    a:hover {
      text-decoration: none !important;
    }
  }

  /* breakpoints */
  @media (max-width: 768px) {
    #x-header {
      grid-template-columns: 1fr;
    }

    .logo {
      display: none;
    }

    .container {
      width: 100%;
    }
  }
</style>
