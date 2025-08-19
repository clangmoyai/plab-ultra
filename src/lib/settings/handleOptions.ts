import { store } from "../utils/store.svelte";

export const OPTIONS_KEY = "user-settings";

type OptionsGroup = "Title" | "Images" | "Download" | "Shortcuts" | "Developer";

export type Options = Record<
  OptionsGroup,
  {
    label: string;
    key: string;
    value: boolean;
    description?: string;
  }[]
>;

const defaultOptions = <Options>{
  Title: [
    { label: "Parse title", key: "parseTitle", value: true },
    { label: "Show tags", key: "showTags", value: true },
    {
      label: "Performer links",
      key: "performerLinks",
      value: true,
    },
  ],

  Images: [
    {
      label: "Upgrade images",
      key: "upgradeImages",
      value: true,
    },
    {
      label: "Last image first",
      key: "lastImageFirst",
      value: true,
    },
    {
      label: "Drag to resize",
      key: "dragResize",
      value: true,
    },
  ],

  Download: [
    {
      label: "Floating download button",
      key: "floatingDownload",
      value: false,
    },
    {
      label:
        'Send to <a href="https://github.com/valpackett/transmitter" target="_blank">Transmitter</a>',
      key: "sendToTransmitter",
      value: false,
    },
    {
      label: "Auto-expand file list",
      key: "expandFiles",
      value: false,
    },
  ],

  Shortcuts: [
    {
      label: "Navigate with number keys",
      key: "numKeys",
      value: true,
      description: "[1, 2, 3, 4]",
    },
    {
      label: "Anchor images",
      key: "spaceImageAnchor",
      value: true,
      description: "[Space, Shift + Space]",
    },
    {
      label: "Download torrent",
      key: "dKeyToDownload",
      value: false,
      description: "[d]",
    },
  ],

  Network: [
    {
      label: "Cache resolved urls",
      key: "cacheImages",
      value: true,
    },
    {
      label: "Limit concurrent upgrades",
      key: "limitConcurrent",
      value: true,
    },
    {
      label: "CorsProxy.io",
      key: "proxyCache",
      value: false,
      description: "cache hotlinked",
    },
  ],

  Developer: [
    {
      label: "Toggle settings",
      key: "sKeySettings",
      value: false,
      description: "[s]",
    },
    {
      label: "Debug upgrade",
      key: "debugImgs",
      value: false,
    },
    {
      label: "Incognito",
      key: "incognito",
      value: false,
    },
  ],
};

/**
 * Loads user {@link store.options} from localStorage, merging them with {@link defaultOptions}
 */
export function loadOptions(): Options {
  const options = structuredClone(defaultOptions);
  const stored = localStorage.getItem(OPTIONS_KEY);
  if (stored) {
    try {
      const saved: Record<string, boolean> = JSON.parse(stored);
      Object.values(options)
        .flat()
        .forEach((opt) => {
          const value = saved[opt.key];
          if (value !== undefined) {
            opt.value = value;
          }
        });
    } catch (error) {
      console.warn(`Failed to load ${OPTIONS_KEY} from localStorage:`, error);
    }
  }
  return options;
}

/**
 * Saves current user {@link store.options} to localStorage
 */
export function saveOptions(): void {
  const options = Object.values(store.options).flat();
  const json = Object.fromEntries(options.map((opt) => [opt.key, opt.value]));
  localStorage.setItem(OPTIONS_KEY, JSON.stringify(json));
}

/**
 * Updates value of a user option by key
 */
export function updateOption(key: string, value: boolean): void {
  const option = Object.values(store.options)
    .flat()
    .find((opt) => opt.key === key);

  if (option) option.value = value;
  saveOptions();
}

/**
 * Resets all user {@link store.options} to {@link defaultOptions}
 */
export function restoreOptions(): void {
  Object.entries(defaultOptions).forEach(([groupKey, groupSettings]) => {
    groupSettings.forEach((defaultSetting) => {
      const currentOpt = store.options[groupKey as OptionsGroup]?.find(
        (opt) => opt.key === defaultSetting.key
      );
      if (currentOpt) {
        currentOpt.value = defaultSetting.value;
      }
    });
  });

  localStorage.removeItem(OPTIONS_KEY);
  saveOptions();
}
