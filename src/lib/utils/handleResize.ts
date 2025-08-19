import { store } from "../utils/store.svelte";

const DEFAULT_WIDTH = 100;
export const RESIZE_KEY = "images-resize-width";

/**
 * Loads {@link RESIZE_KEY} from localStorage or defaults to {@link DEFAULT_WIDTH}
 */
export function loadResize(): number {
  try {
    const stored = localStorage.getItem(RESIZE_KEY);
    if (stored) return parseInt(stored);
  } catch (error) {
    console.warn(`Failed to load ${RESIZE_KEY} from localStorage:`, error);
  }
  return DEFAULT_WIDTH;
}

/**
 * Saves resize width to localStorage
 */
export function saveResize(value: number): void {
  try {
    localStorage.setItem(RESIZE_KEY, value.toString());
  } catch (error) {
    console.warn(`Failed to save ${RESIZE_KEY} to localStorage:`, error);
  }
}

/**
 * Resets localStorage {@link store.resizeWidth} to {@link DEFAULT_WIDTH}
 */
export function restoreResize(): void {
  localStorage.setItem(RESIZE_KEY, DEFAULT_WIDTH.toString());
  store.resizeWidth = DEFAULT_WIDTH;
}
