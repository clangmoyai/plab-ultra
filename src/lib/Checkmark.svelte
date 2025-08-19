<!--
@component
Component for button with checkmark animation
-->

<script lang="ts">
  import { onDestroy, type Snippet } from "svelte";
  import { store } from "./utils/store.svelte";
  import { scale } from "svelte/transition";

  let {
    children,
    title,
    disabled,
    onclick: propClick,
  }: {
    children: Snippet;
    title: string;
    disabled?: boolean;
    onclick?: () => void;
  } = $props();

  const DURATION = 1000;

  let clicked = $state(false);
  let timeout: NodeJS.Timeout | null;

  let clientWidth = $state(0);
  let clientHeight = $state(0);

  let opts = $derived({ ...store.transition, start: 0.6 });

  /**
   * Handles click by running prop onclick first
   */
  function onclick(): void {
    propClick?.();
    handleTransition();
  }

  /**
   * Handles transition
   */
  function handleTransition(): void {
    clicked = true;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      clicked = false;
      timeout = null;
    }, DURATION);
  }

  onDestroy(() => {
    if (timeout) clearTimeout(timeout);
  });
</script>

<button
  style:width="{clientWidth}px"
  style:height="{clientHeight}px"
  {onclick}
  {title}
  {disabled}
>
  {#if !clicked}
    <span transition:scale={opts} bind:clientWidth bind:clientHeight>
      {@render children()}
    </span>
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path
        transition:scale={opts}
        d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39l8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33Z"
      />
    </svg>
  {/if}
</button>

<style>
  button {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    background: var(--button-color) !important;
    border: none !important;
    border-radius: var(--border-radius-small);
    padding: 0.4rem 0.5rem;
    font-family: inherit;
    font-weight: 500;
    font-size: 0.8rem;
    color: white;
    transition: background-color opacity 1800ms ease-in-out;
  }

  button:disabled {
    background-color: var(--post-border-color) !important;
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    position: absolute;
  }

  svg path {
    transform-origin: center;
    fill: white;
  }
</style>
