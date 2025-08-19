<!--
@component
Attaches `data.thank` button
-->

<script lang="ts">
  import { data } from "./utils/data.svelte";
  import { onDestroy } from "svelte";
  import type { Attachment } from "svelte/attachments";

  let observer: MutationObserver;
  let clicked = $state(false);
  let success = $state(false);

  let disabled = $derived.by<boolean>(
    /**
     * Checks if user id is in thanked
     * list or early return on success
     */
    (): boolean => {
      if (success) return true;

      if (!data.thank?.list) return false;

      const userLink = data.user?.link;
      if (!userLink) return false;

      const userId = new URL(userLink, location.href).searchParams.get("u");
      if (!userId) return false;

      return data.thank?.list.has(userId);
    }
  );

  let title = $derived.by<string | undefined>(
    /**
     * Button title
     */ () => {
      if (disabled) return "Already thanked";
      return;
    }
  );

  /**
   * Updates `data.thank` text
   */
  function handleValue(value: string): void {
    if (data.thank?.element && data.thank?.element instanceof HTMLInputElement)
      data.thank.element.value = "Thanks: " + value;
  }

  /**
   * Appends and modifies thanks button,
   * `element` is the `<button>` element
   */
  function handleElement(thank: Element): Attachment {
    return (element) => {
      if (thank)
        for (const attr of ["title", "style", "class"])
          thank.removeAttribute(attr);

      if (disabled) {
        handleValue("Given");
      } else if (clicked && !disabled) {
        handleValue("Loading...");
      } else {
        handleValue("Give");
      }

      element.appendChild(thank);
      return () => thank.remove();
    };
  }

  /**
   * Observes thanks button for changes
   */
  function onclick(event: MouseEvent): void {
    if (disabled || clicked) return;
    clicked = true;
    observer?.disconnect();
    const currentTarget = event.currentTarget as HTMLElement;

    const callback: MutationCallback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type !== "childList") continue;
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLHeadingElement) {
            // expecting <h1> on success
            node.remove();
            success = true;
            observer.disconnect();
          }
        });
      }
    };
    observer = new MutationObserver(callback);
    observer.observe(currentTarget, { childList: true });
  }

  onDestroy(() => observer?.disconnect());
</script>

{#if data.thank?.element}
  <button
    class="item"
    aria-label="thank"
    {@attach handleElement(data.thank.element)}
    {onclick}
    {title}
    {disabled}
  >
  </button>
{/if}

<style>
  button {
    all: unset;
    cursor: pointer;
    background: none !important;
  }

  button:disabled {
    cursor: text;
    user-select: text;
  }

  /* attachment */
  :global(#thx-btn) {
    all: unset !important;
  }
</style>
