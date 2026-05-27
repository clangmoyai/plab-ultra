import { store } from "./store.svelte";

const DEFAULT_COUNT = 1;
export const COLUMN_COUNT_KEY = "grid-size-width";

/**
 * Loads {@link COLUMN_COUNT_KEY} from localStorage or defaults to {@link DEFAULT_COUNT}
 */
export function loadColumnCount(): number {
  try {
    const stored = localStorage.getItem(COLUMN_COUNT_KEY);
    if (stored) return parseInt(stored);
  } catch (error) {
    console.warn(
      `Failed to load ${COLUMN_COUNT_KEY} from localStorage:`,
      error,
    );
  }
  return DEFAULT_COUNT;
}

/**
 * Saves grid size to localStorage
 */
export function saveColumnCount(value: number): void {
  try {
    localStorage.setItem(COLUMN_COUNT_KEY, value.toString());
  } catch (error) {
    console.warn(`Failed to save ${COLUMN_COUNT_KEY} to localStorage:`, error);
  }
}

/**
 * Resets localStorage {@link store.columnCount} to {@link DEFAULT_COUNT}
 */
export function restoreColumnCount(): void {
  localStorage.setItem(COLUMN_COUNT_KEY, DEFAULT_COUNT.toString());
  store.columnCount = DEFAULT_COUNT;
}
