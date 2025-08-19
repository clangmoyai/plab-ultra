import { quadInOut } from "svelte/easing";
import { getFaviconUrl, type PerformerLink } from "../settings/handleLinks";
import type { Options } from "../settings/handleOptions";
import type { DownloadState } from "./handleDownload";

/**
 * types
 */
export interface ImgData {
  status?: "loading" | "cached" | "resolved" | "error";
  resolved?: string;
  error?: string;
}

interface Store {
  readyStateComplete: boolean;
  showSettings: boolean;
  options: Options;
  performerLinks: PerformerLink[];
  resizeWidth: number;
  dropdown: {
    item: string;
    classList?: string[];
    clientX: number;
    clientY: number;
    currentTarget?: EventTarget;
  } | null;
  openDropdown(event: MouseEvent, item: string, classList?: string[]): void;
  closeDropdown(): void;
  upgradeImgData: Record<string, ImgData>;
  downloadState: DownloadState;
  ultraImages: HTMLDivElement | null;
  ultraPost: HTMLDivElement | null;
  imgRefs: HTMLImageElement[];
  showFileList: boolean;
  fileListData: string | null;
  toggleFileList(): void;
  documentHidden: boolean;
  transition: {
    duration: number;
    easing: typeof quadInOut;
  };
  favIcons: Record<string, string>;
}

/**
 * global state store
 */
export const store = $state<Store>({
  readyStateComplete: false,
  showSettings: false,
  options: {
    Title: [],
    Images: [],
    Download: [],
    Shortcuts: [],
    Developer: [],
  },
  performerLinks: [],
  resizeWidth: 100,
  dropdown: null,
  openDropdown(event, item, classList?) {
    if (this.dropdown) {
      this.closeDropdown();
    } else {
      this.dropdown = {
        item,
        classList,
        clientX: event.clientX,
        clientY: event.clientY,
        currentTarget: event.currentTarget as HTMLElement,
      };
    }
  },
  closeDropdown() {
    if (this.dropdown) {
      const currentTarget = this.dropdown.currentTarget;
      const classList = this.dropdown.classList;
      if (currentTarget && classList)
        (currentTarget as HTMLElement).classList.remove(...classList);

      this.dropdown = null;
    }
  },
  upgradeImgData: {},
  downloadState: "idle",
  ultraImages: null,
  ultraPost: null,
  imgRefs: [],
  showFileList: false,
  fileListData: null,
  toggleFileList() {
    this.showFileList = !this.showFileList;
  },
  documentHidden: false,
  get transition() {
    return {
      duration:
        this.readyStateComplete !== false && !this.documentHidden ? 180 : 0,
      easing: quadInOut,
    };
  },
  get favIcons() {
    return Object.fromEntries(
      this.performerLinks
        .filter((link: PerformerLink) => link.url)
        .map((link: PerformerLink) => [link.url, getFaviconUrl(link.url)])
    );
  },
});
