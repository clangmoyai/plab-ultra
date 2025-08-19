import { on } from "svelte/events";
import { generic } from "../domains/generic";
import { imagebam } from "../domains/imagebam";
import { imagenimage } from "../domains/imagenimage";
import { imagetwist } from "../domains/imagetwist";
import { imgbase } from "../domains/imgbase";
import { imgbox } from "../domains/imgbox";
import { imgbum } from "../domains/imgbum";
import { imgdrive } from "../domains/imgdrive";
import { imgfrost } from "../domains/imgfrost";
import { piccash } from "../domains/piccash";
import { picforall } from "../domains/picforall";
import { picshick } from "../domains/picshick";
import { turboimagehost } from "../domains/turboimagehost";
import { vipr } from "../domains/vipr";
import { store, type ImgData } from "./store.svelte";
import { getCache, setCache } from "./handleCache";
import { getSettings } from "../settings/handleSettings";

/**
 * Keys ending with `.` match any top-level
 * domains (fastpic.org, fastpic.ru)
 */
const HANDLERS: Record<
  string,
  (href: string, src?: string) => Promise<string>
> = {
  "fastpic.": (href) => generic(href, "#imglink > img.image.img-fluid"),
  "imgsto.com": (href) => generic(href, ".main-content-image > img"),
  "imagebam.com": (href) => imagebam(href, "img.main-image"),
  "imageban.ru": (href) => generic(href, "#img_main"),
  "imagenimage.com": (href, src) => imagenimage(href, src),
  "imagetwist.com": (href, src) => imagetwist(href, src),
  "picturelol.com": (href, src) => imagetwist(href, src),
  "imagevenue.com": (href) => generic(href, "#main-image"),
  "imgbase.ru": (href, src) => imgbase(href, src),
  "picclick.ru": (href, src) => imgbase(href, src),
  "adult-images.ru": (href, src) => imgbase(href, src),
  "payforpic.ru": (href, src) => imgbase(href, src),
  "imgbox.com": (href) => imgbox(href),
  "imgbum.ru": (href) => imgbum(href),
  "imgdrive.net": (href, src) => imgdrive(href, src),
  "imgadult.com": (href, src) => imgdrive(href, src),
  "imgwallet.com": (href, src) => imgdrive(href, src),
  "imgfrost.net": (href, src) => imgfrost(href, src),
  "imgblaze.net": (href, src) => imgfrost(href, src),
  "piccash.net": (href, src) => piccash(href, src),
  "picforall.ru": (href) => picforall(href),
  "imgclick.ru": (href) => picforall(href),
  "freescreens.ru": (href) => picforall(href),
  "picshick.com": (href, src) => picshick(href, src),
  "turboimagehost.com": (href) => turboimagehost(href),
  "vipr.im": (href, src) => vipr(href, src),
};

/**
 * Updates {@link store.upgradeImgData}
 */
function updateStatus(imageId: string, data: Partial<ImgData>): void {
  store.upgradeImgData[imageId] = {
    ...store.upgradeImgData[imageId],
    ...data,
  };
}

/**
 * Upgrades image src using {@link getCache} or {@link HANDLERS}
 */
async function upgradeImg(img: HTMLImageElement): Promise<void> {
  if (!img) return;

  if (!img.id) return console.error("Image is missing id");

  const anchor = img.closest("a");
  if (!anchor || !anchor.getAttribute("href")) {
    return updateStatus(img.id, {
      status: "error",
      error: `Image anchor with id ${img.id} is missing href`,
    });
  }

  updateStatus(img.id, { status: "loading" });

  // cache hit
  if (getSettings("cacheImages")) {
    const cached = getCache(anchor.href);

    if (cached) {
      if (img.complete && img.naturalHeight !== 0) {
        updateStatus(img.id, { status: "cached", resolved: cached });
      } else {
        on(
          img,
          "load",
          () => {
            updateStatus(img.id, { status: "cached", resolved: cached });
          },
          { once: true }
        );

        on(
          img,
          "error",
          () => {
            updateStatus(img.id, {
              status: "error",
              error: `Failed to load cached image: ${cached}`,
            });
          },
          { once: true }
        );
      }

      img.src = cached;
      return;
    }
  }

  // cache miss
  const entry = Object.entries(HANDLERS).find(([domain]) =>
    anchor.href.includes(domain)
  );

  if (!entry)
    return updateStatus(img.id, {
      status: "error",
      error: `No handler for ${new URL(anchor.href).hostname}`,
    });

  const [, handler] = entry;

  try {
    const src = await handler(anchor.href, img.src);

    if (src.startsWith("blob:")) {
      on(
        img,
        "load",
        () => {
          URL.revokeObjectURL(src);
          updateStatus(img.id, { status: "resolved", resolved: src });
        },
        { once: true }
      );

      on(
        img,
        "error",
        () => {
          URL.revokeObjectURL(src);
          updateStatus(img.id, {
            status: "error",
            error: `Failed to load blob`,
          });
        },
        { once: true }
      );
    }
    // only cache non-blob
    else {
      on(
        img,
        "load",
        () => {
          setCache(anchor.href, src);
          updateStatus(img.id, { status: "resolved", resolved: src });
        },
        { once: true }
      );

      on(
        img,
        "error",
        () => {
          updateStatus(img.id, {
            status: "error",
            error: `Failed to load image from: ${src}`,
          });
        },
        { once: true }
      );
    }

    updateStatus(img.id, {
      resolved: src,
    });

    img.src = src;
  } catch (error) {
    return updateStatus(img.id, {
      error: String(error),
      status: "error",
    });
  }
}

/**
 * Handles intersection events for images and
 * triggers their upgrade when they are in view
 */
function onIntersect(
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
): void {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      upgradeImg(entry.target as HTMLImageElement);
    }
  });
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 */
const observed = new WeakSet<HTMLImageElement>();

export const observer = new IntersectionObserver(onIntersect, {
  // start upgrading images when they come within 10 viewports below the visible area
  rootMargin: `${getSettings("limitConcurrent") ? "200%" : "1000%"} 0%`,
});

/**
 * Observes a list of {@link imgRefs} and upgrades their sources
 *
 * The first image is upgraded immediately, while the rest are upgraded lazily using
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API IntersectionObserver}
 */
export async function observeImg(imgRefs: HTMLImageElement[]): Promise<void> {
  const unobserved = imgRefs.filter((img) => {
    return !observed.has(img) && img instanceof HTMLImageElement;
  });

  if (!unobserved.length) return;

  unobserved.forEach((img) => {
    observed.add(img);
  });

  if (unobserved[0]) await upgradeImg(unobserved[0]);

  unobserved.slice(1).forEach((img) => {
    observer.observe(img);
  });
}
