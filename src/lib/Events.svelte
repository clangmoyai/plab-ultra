<!--
@component
Attaches event listeners to window and document:
- `Space`
- `KeyS`
- `KeyD`
- `Escape`
- `Digit1`
- `Digit2`
- `Digit3`
- `Digit4`
- `onstorage`
- `onvisibilitychange`
-->

<script lang="ts">
  import { on } from "svelte/events";
  import { onMount } from "svelte";
  import { handleDownload } from "./utils/handleDownload";
  import {
    getSettings,
    saveShowSettings,
    toggleShowSettings,
    onstorage,
  } from "./settings/handleSettings";
  import { store } from "./utils/store.svelte";

  /**
   * Don't transition on page load, wait for complete
   */
  function handleReadyStateChange(): void {
    if (document.readyState === "complete") {
      store.readyStateComplete = true;
    }
  }

  onMount(() => {
    handleReadyStateChange();
    if (store.readyStateComplete) return;

    // else wait for complete
    return on(document, "readystatechange", handleReadyStateChange);
  });

  /**
   * Handles the `keydown` event on the document
   */
  function onkeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement;
    const input =
      target.isContentEditable ||
      (target instanceof HTMLInputElement && target.type === "text");

    if (input || event.ctrlKey || event.metaKey || event.altKey) return;

    switch (event.code) {
      case "Space":
        handleSpace(event);
        break;

      case "KeyS":
        handleKeyS(event);
        break;

      case "KeyD":
        handleKeyD(event);
        break;

      case "Escape":
        handleEscape();
        break;

      case "Digit1":
      case "Digit2":
      case "Digit3":
      case "Digit4":
        if (!getSettings("numKeys")) return;
        event.preventDefault();
        digitHandlers[event.code]();
        break;

      default:
        return;
    }
  }

  const digitHandlers = {
    Digit1: handleDigit1,
    Digit2: handleDigit2,
    Digit3: handleDigit3,
    Digit4: handleDigit4,
  };

  /**
   * Handles the `Space` key press event
   */
  function handleSpace(event: KeyboardEvent): void {
    if (
      !getSettings("spaceImageAnchor") ||
      !store.imgRefs.length ||
      !store.ultraImages
    )
      return;

    const scrollY = window.scrollY;
    const containerTop = store.ultraImages.offsetTop;
    const containerBottom = containerTop + store.ultraImages.offsetHeight;

    if (
      containerTop >= scrollY + window.innerHeight ||
      containerBottom <= scrollY
    )
      return;

    let imgRefs = [...store.imgRefs];

    if (getSettings("lastImageFirst") && imgRefs.length > 1) {
      const lastImg = imgRefs.pop();
      if (lastImg) imgRefs.unshift(lastImg);
    }

    let filteredImgRefs = imgRefs.filter(
      (el): el is HTMLImageElement => el.dataset["broken"] !== "true"
    );

    if (filteredImgRefs.length === 0) return;

    if (scrollY < containerTop) {
      if (!event.shiftKey) {
        event.preventDefault();
        filteredImgRefs[0]?.scrollIntoView({ block: "start" });
      }
      return;
    }

    const backward = event.shiftKey;
    const threshold = scrollY + (backward ? -10 : 10);

    if (backward) {
      for (const img of filteredImgRefs.slice().reverse()) {
        const imgTop = scrollY + img.getBoundingClientRect().top;
        if (imgTop < threshold) {
          event.preventDefault();
          img.scrollIntoView({ block: "start" });
          return;
        }
      }
    } else {
      for (const img of filteredImgRefs) {
        const imgTop = scrollY + img.getBoundingClientRect().top;
        if (imgTop > threshold) {
          event.preventDefault();
          img.scrollIntoView({ block: "start" });
          return;
        }
      }
    }
  }

  /**
   * Handles the `KeyD` key press event
   */
  function handleKeyD(event: KeyboardEvent): void {
    if (!getSettings("dKeyToDownload")) return;
    event.preventDefault();
    handleDownload(event);
  }

  /**
   * Handles the `Escape` key press event
   */
  function handleEscape(): void {
    if (store.dropdown !== null) {
      store.closeDropdown();
    } else if (store.showSettings) {
      store.showSettings = false;
      saveShowSettings(store.showSettings);
    }
  }

  /**
   * Handles the `KeyS` key press event
   */
  function handleKeyS(event: MouseEvent | KeyboardEvent): void {
    if (!getSettings("sKeySettings")) return;
    if (!store.showSettings) window.scrollTo({ top: 0 });
    toggleShowSettings(event);
  }

  /**
   * Handles the `Digit1` key press event
   */
  function handleDigit1(): void {
    window.scrollTo({ top: 0 });
  }

  /**
   * Handles the `Digit2` key press event
   */
  function handleDigit2(): void {
    store.ultraImages?.scrollIntoView({ block: "start" });
  }

  /**
   * Handles the `Digit3` key press event
   */
  function handleDigit3(): void {
    store.ultraPost?.scrollIntoView({ block: "start" });
  }

  /**
   * Handles the `Digit4` key press event
   */
  function handleDigit4(): void {
    window.scrollTo({ top: document.body.scrollHeight });
  }

  /**
   * Event handler for the visibilitychange event
   */
  function onvisibilitychange(): void {
    store.documentHidden = document.hidden;
  }
</script>

<svelte:window {onkeydown} {onstorage} />

<svelte:document {onvisibilitychange} />
