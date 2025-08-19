<script lang="ts">
  import { fade } from "svelte/transition";
  import { store } from "./utils/store.svelte";

  let { loading } = $props();
</script>

{#if loading}
  <div class="loader" transition:fade={store.transition}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
        opacity="0.5"
      />
      <path class="animate" d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z" />
    </svg>
  </div>
{/if}

<style>
  .loader {
    width: 15%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  svg {
    width: 100%;
    height: auto;
    will-change: transform;
  }

  svg path {
    fill: white;
  }

  .animate {
    animation: spin 1s linear infinite;
    transform-origin: center center;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
