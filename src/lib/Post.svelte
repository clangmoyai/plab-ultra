<!--
@component
Renders post and comments
- `data.posts`
-->

<script lang="ts">
  import type { Attachment } from "svelte/attachments";
  import { handleDate, handleRelativeDate } from "./utils/handleParse";
  import { data } from "./utils/data.svelte";
  import { store } from "./utils/store.svelte";
  import { getSettings } from "./settings/handleSettings";
  import { updateOption } from "./settings/handleOptions";

  let incognito = $derived(getSettings("incognito"));
  let showFullDate = $state<Record<number, boolean>>({});

  /**
   * Toggles the display of relative time and full date
   */
  function toggleFullDate(index: number): void {
    showFullDate[index] = !showFullDate[index];
  }

  /**
   * Inserts post message into the DOM
   */
  function insertPost(message: HTMLElement): Attachment {
    return (element) => {
      element.appendChild(message);
      return () => message.remove();
    };
  }
</script>

<!-- -------------------------------------------------- -->

{#snippet Incognito()}
  <div>
    Post not rendered... <a
      href="#incognito"
      style:cursor="pointer"
      onclick={(event): void => {
        event.preventDefault();
        updateOption("incognito", false);
      }}
    >
      turn off incognito
    </a>
  </div>
{/snippet}

{#snippet Forumline(forumline: Element)}
  {@const infoHeader = forumline?.querySelector("th")?.textContent}
  {@const infoBody = forumline?.querySelector("td")?.innerHTML}
  <div class="forumline">
    {#if forumline?.textContent?.includes("Тема находится в мусорке")}
      <!-- handle trash -->
      <p>The topic is in the trash</p>
      <br />
      <a href="/forum/index.php">Return to home page</a>
    {:else if forumline?.textContent?.includes("Тема не найдена")}
      <!-- handle not found -->
      <p>Topic not found</p>
      <br />
      <a href="/forum/index.php">Return to home page</a>
    {:else if infoHeader && infoBody}
      <!-- "try" -->
      <h3>{infoHeader}</h3>
      {@html infoBody}
    {:else}
      <!-- "catch" -->
      {@html forumline?.innerHTML}
    {/if}
  </div>
{/snippet}

{#snippet Avatar(avatar: string | null, nick: string, link: string | null)}
  <a href={link} class="no-avatar">
    {#if avatar}
      <img src={avatar} alt={nick} />
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="currentcolor"
          fill-rule="evenodd"
          d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
          clip-rule="evenodd"
        />
      </svg>
    {/if}
  </a>
{/snippet}

{#snippet Nick(nick: string, link: string | null)}
  {#if nick}
    {@const content = nick === "Гость" ? "Guest" : nick}
    <span class="nick">
      {#if link}
        <a href={link}>
          {content}
        </a>
      {:else}
        {content}
      {/if}
    </span>
  {/if}
{/snippet}

{#snippet Date(date: string, i: number)}
  {#if date}
    {@const paredDate = handleDate(date)}

    <button class="date" onclick={(): void => toggleFullDate(i)}>
      {#if showFullDate[i]}
        {paredDate?.toLocaleString()}
      {:else}
        {handleRelativeDate(paredDate)}
      {/if}
    </button>
  {/if}
{/snippet}

<!-- -------------------------------------------------- -->

{#if incognito}
  {@render Incognito()}
{:else}
  <div
    id="x-post"
    class:section={data.forumline || data.posts?.length}
    bind:this={store.ultraPost}
  >
    {#if data.forumline}
      {@render Forumline(data.forumline)}
    {:else if data.posts && data.posts?.length}
      {#each data.posts as { nick, link, avatar, date, message }, i (i)}
        <div class="post">
          <div class="avatar">
            {@render Avatar(avatar, nick, link)}
          </div>

          <div class="content">
            <div class="header">
              {@render Nick(nick, link)}
              {@render Date(date, i)}
            </div>
            <div class="message" {@attach insertPost(message)}></div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
{/if}

<style>
  .forumline {
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section {
    margin-bottom: var(--content-margin);
  }

  a {
    color: #4da3ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .post {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid var(--post-border-color);
  }

  .post:nth-child(even) {
    background-color: var(--post-odd-bg);
  }

  .post:last-child {
    border-bottom: none;
  }

  .avatar img {
    width: 48px;
    height: 48px;
    border-radius: var(--border-radius-small);
    object-fit: cover;
    border: 1px solid var(--post-border-color);
  }

  .no-avatar {
    display: flex;
    width: 48px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    background: var(--main-bg);
    border: 1px solid var(--post-border-color);
    border-radius: var(--border-radius-small);
    font-size: 1.3rem;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }

  .no-avatar svg {
    width: 55%;
    height: 55%;
  }

  .no-avatar:hover {
    text-decoration: none !important;
  }

  .content {
    flex: 1;
  }

  .header {
    font-size: 0.8rem;
    color: #bbb;
    margin-block-end: 0.4rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .nick {
    font-weight: 600;
  }

  .date {
    all: unset !important;
    color: var(--post-date-color) !important;
    font-weight: 400 !important;
    opacity: 0.8 !important;
    cursor: pointer !important;
  }

  .date:hover {
    opacity: 1 !important;
  }

  .message {
    margin: 0;
    line-height: 1.4;
  }
</style>
