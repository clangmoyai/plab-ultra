import { data } from "./data.svelte";

const KEY = "userscript-disabled";

/**
 * Whether the userscript is disabled
 * @returns boolean
 */
export function userscriptDisabled(): boolean {
  const stored = sessionStorage.getItem(KEY);
  return stored === null ? false : stored === "true";
}

/**
 * Sets whether the userscript is enabled/disabled
 */
export function setUserscript(value: boolean): void {
  sessionStorage.setItem(KEY, JSON.stringify(value));
  location.reload();
}

/**
 * Appends a button to the document to
 * enable the the disabled userscript
 */
export function appendUserscriptEnableButton(): void {
  console.warn("userscript disabled");

  const button = document.createElement("button");

  Object.assign(button, {
    textContent: "Enable Pornolab Ultra",
    onclick: () => setUserscript(false),
  });

  Object.assign(button.style, {
    position: "fixed",
    top: "0.75rem",
    right: "0.75rem",
    zIndex: "9999",
  });

  const element = document.querySelector("#pl-speedbar-a");
  element?.parentElement?.appendChild(button);
}

/**
 * Inject CSP meta tag into document head
 * to block unnecessary network requests
 *
 * Doesn't inject in dev because of HMR
 */
export function prependContentSecurityPolicy(): boolean {
  if (import.meta.env.DEV) return true;
  const meta = document.createElement("meta");
  meta.httpEquiv = "Content-Security-Policy";
  // only allow images and urls below
  meta.content = `
    default-src 'self';
    img-src 'self' http: https: data: blob:;
    style-src 'unsafe-inline';
    font-src 'self'
      https://static.pornolab.net/templates/default/webfonts/fa-solid-900.woff2;
    script-src 'unsafe-inline'
      https://static.pornolab.net/js/main.js
      https://static.pornolab.net/js/jquery.pack.js;
  `;
  document.head.prepend(meta);
  return document.head.contains(meta);
}

/**
 * Checks if forum is temporarily disabled
 * and then translates the disabled page
 * @returns boolean
 */
export function forumDisabled(app: HTMLDivElement): boolean {
  const p = document.querySelector("body > div > p") as HTMLParagraphElement;
  const disabledText = "Форум временно отключен";
  if (!p?.textContent?.includes(disabledText)) return false;

  const translations = {
    [disabledText]: "Forum is temporarily disabled",
    "Последние новости вы можете узнать в":
      "You can find out the latest news on",
    твиттере: "Twitter",
  };

  app.remove();

  let html = p.innerHTML;
  for (const [russian, english] of Object.entries(translations)) {
    html = html.replace(russian, english);
  }
  p.innerHTML = html;

  return true;
}

/**
 * Mock data for testing
 */
export function mockDataTest(): void {
  data.title = {
    original: "whatever",
    parsed: "Jane Doe, John Doe - Screaming Pleasures",
    searchTerms: ["Jane Doe", "John Doe", "Screaming Pleasures"],
    tags: [
      "Onlyfans.com",
      "2025",
      "Hardcore",
      "Petite",
      "Straight",
      "1080p",
      "SiteRip",
    ],
  };

  data.images = [
    {
      id: crypto.randomUUID(),
      href: "https://fastpic.org/view/123/2024/0329/_d57131dccc342637b744ef689826bbed.jpg.html",
      src: "https://i123.fastpic.org/thumb/2024/0329/ed/_d57131dccc342637b744ef689826bbed.jpeg",
    },
  ];
}
