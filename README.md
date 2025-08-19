
# Pornolab Ultra

<!-- markdownlint-disable MD033 -->

<p align="center">
  <img width="400" src="https://github.com/clangmoyai/plab-ultra/raw/main/src/assets/logo800.png" alt="logo" />
</p>

<p align="center">
  <i>"Userscript for <a href="https://pornolab.net">PornoLab.Net</a>"</i>
</p>

## Features

- Minimalistic and modern interface with theme support.
- Upgrades thumbnails to high resolution screenshots with caching.
- Title search terms for user-creatable links other sites.
- Fast keyboard navigation (snap-scroll, download, etc.).
- Russian-to-English translations and much more...

*Note: This userscript is only active on topic/post pages. It has no effect elsewhere on the site.*

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) or any other userscript manager.
2. Download and install the script from the [Releases](https://github.com/clangmoyai/plab-ultra/releases) page.
3. When prompted by Tampermonkey, click "Always allow all domains".

## Screenshot

![screenshot](https://github.com/clangmoyai/plab-ultra/raw/main/src/assets/screenshot.jpg)

## FAQ

**Why does this userscript look obfuscated?**  
It's built using [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) and [Svelte](https://svelte.dev/). You can read the source code and build it yourself ([see below](#development)).

**I've selected "Upgrade images", why doesn't it work sometimes?**  
Some file hosts are not implemented yet. Enable **Settings → Debug images** to troubleshoot and open an [issue](https://github.com/clangmoyai/plab-ultra/issues).

**Can I back up my settings?**  
Yes, **Settings → Export** downloads a text file. Paste its contents into your browser console to restore.

## Development

The dev server doesn't work with Firefox, but Chrome does... ([open issue?](https://github.com/lisonge/vite-plugin-monkey)). On first install open dev server e.g. <http://127.0.0.1:5173> and install userscript. You don't need to redo this unless you make changes to `vite.config.ts`

```bash
# macOS prerequisites
brew install node pnpm

# install
cd ~/Developer/
git clone https://github.com/clangmoyai/plab-ultra/
cd plab-ultra
pnpm i

# server
pnpm dev

# check and lint
pnpx sv check && \
  pnpm lint && \
  pnpm knip

# update dependencies
pnpm up -L

# build -> /dist
pnpm build
```
