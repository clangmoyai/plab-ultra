import { clearCache } from "../utils/handleCache";
import {
  LINKS_KEY,
  loadPerformerLinks,
  restorePerformerLinks,
  stripId,
} from "./handleLinks";
import { OPTIONS_KEY, restoreOptions, saveOptions } from "./handleOptions";
import { RESIZE_KEY, restoreResize } from "../utils/handleResize";
import { restoreRelated } from "../utils/handleRelated";
import { store } from "../utils/store.svelte";

const SETTINGS_KEY = "show-settings";

/**
 * Retrieves the value of {@link store.options} given its key
 */
export function getSettings(key: string): boolean {
  const setting = Object.values(store.options)
    .flat()
    .find((opt) => opt.key === key);
  return setting?.value || false;
}

/**
 * Loads {@link SETTINGS_KEY} from localStorage
 */
export function loadShowSettings(): boolean {
  const stored = localStorage.getItem(SETTINGS_KEY);
  if (stored === null) return false;
  try {
    return JSON.parse(stored) as boolean;
  } catch (error) {
    console.warn(`Failed to parse settings from localStorage:`, stored, error);
    return false;
  }
}

/**
 * Saves {@link SETTINGS_KEY} to localStorage
 */
export function saveShowSettings(value: boolean): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(value));
  } catch (error) {
    console.warn(`Failed to save ${SETTINGS_KEY} to localStorage:`, error);
  }
}

/**
 * Toggles the visibility of the settings UI
 */
export function toggleShowSettings(event: MouseEvent | KeyboardEvent): void {
  event.preventDefault();
  store.showSettings = !store.showSettings;
  saveShowSettings(store.showSettings);
}

/**
 * Resets all user settings to default values:
 * - {@link store.options} are reset to `defaultOptions`
 * - {@link store.performerLinks} are reset to `defaultLinks`
 * - {@link store.resizeWidth} is reset to `DEFAULT_WIDTH`
 * - All resolved URLs are cleared
 *
 * Ignores `confirm` dialog in dev
 */
export function restoreDefaultSettings(): void {
  if (
    !import.meta.env.DEV &&
    !confirm("Are you sure you want to restore all settings to default?")
  )
    return;

  restoreOptions();
  restorePerformerLinks();
  restoreResize();
  restoreRelated();
  clearCache();
}

const SYNC_TRIGGER_KEY = "sync-trigger";

/**
 * Manually syncs settings and notifies other tabs
 */
export function syncSettings(): void {
  localStorage.setItem(SYNC_TRIGGER_KEY, Date.now().toString());
}

/**
 * Listens for storage events and syncs settings between tabs when triggered
 */
export function onstorage(event: StorageEvent): void {
  if (event.key !== SYNC_TRIGGER_KEY) return;

  const optionsValue = localStorage.getItem(OPTIONS_KEY);
  if (optionsValue) {
    const saved = JSON.parse(optionsValue);
    Object.values(store.options)
      .flat()
      .forEach((setting) => {
        if (setting.key in saved) {
          setting.value = saved[setting.key];
        }
      });
    saveOptions();
  }

  const resizeValue = localStorage.getItem(RESIZE_KEY);
  if (resizeValue) store.resizeWidth = parseInt(resizeValue);

  const linksValue = localStorage.getItem(LINKS_KEY);
  if (linksValue) {
    store.performerLinks.length = 0;
    store.performerLinks.push(...loadPerformerLinks());
  }

  store.showSettings = false;
}

/**
 * Exports all user settings to a text file
 *
 * `data-<current-date>.txt`
 */
export function exportSettings(): void {
  const performerLinks = store.performerLinks.map(stripId);
  const options = Object.values(store.options).flat();
  const optionsJson = Object.fromEntries(
    options.map((opt) => [opt.key, opt.value])
  );

  const fileContent = `// Paste this into browser console

localStorage.setItem("${OPTIONS_KEY}", JSON.stringify(${JSON.stringify(
    optionsJson,
    null,
    2
  )}));

localStorage.setItem("${LINKS_KEY}", JSON.stringify(${JSON.stringify(
    performerLinks,
    null,
    2
  )}));

localStorage.setItem("${RESIZE_KEY}", "${store.resizeWidth || "100"}");

location.reload();
`;

  const blob = new Blob([fileContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement("a"), {
    href: url,
    download: `data-${new Date().toISOString().split("T")[0]}.txt`,
  });

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
