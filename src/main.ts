import { mount } from "svelte";
import { on } from "svelte/events";
import App from "./App.svelte";
import "./app.css";
import {
  userscriptDisabled,
  appendUserscriptEnableButton,
  prependContentSecurityPolicy,
} from "./lib/utils/handleUserscript";

// if disabled -> insert enable button
if (userscriptDisabled()) {
  if (document.readyState === "loading") {
    on(document, "DOMContentLoaded", appendUserscriptEnableButton, {
      once: true,
    });
  } else {
    appendUserscriptEnableButton();
  }
}
// else mount app
else {
  const cachedTheme = sessionStorage.getItem("dark-mode");
  if (cachedTheme !== null)
    document.documentElement.dataset["theme"] =
      cachedTheme === "true" ? "dark" : "light";

  let CSP = false;
  if (document.head) {
    CSP = prependContentSecurityPolicy();
  }

  if (document.body) {
    mountApp();
    const body_container = document.getElementById("body_container");
    if (body_container) body_container.style.display = "none";
  } else {
    const targetNode = document.documentElement;
    const config = { childList: true, subtree: true };

    const callback: MutationCallback = (
      mutationList: MutationRecord[],
      observer: MutationObserver
    ): void => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          for (const node of mutation.addedNodes) {
            if (node.nodeName === "HEAD" && !CSP)
              CSP = prependContentSecurityPolicy();

            if (node.nodeName === "BODY") mountApp();

            if (node instanceof HTMLElement && node.id === "body_container") {
              node.style.display = "none";
              observer.disconnect();
            }
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }

  /**
   * Create a full-viewport `<div id="ultra">`, prepend it to `<body>`,
   * and mount the app into that container.
   */
  function mountApp(): void {
    const app = document.createElement("div");
    app.id = "ultra";
    app.style.height = "100vh";
    document.body.prepend(app);

    mount(App, {
      target: app,
      props: { app },
    });
  }
}
