import {
  handleTitle,
  handleImages,
  handleDate,
  handleTimes,
  handleThankList,
  handleUser,
  handleTheme,
} from "../utils/handleParse";

interface Title {
  original: string;
  parsed: string;
  searchTerms: string[];
  tags: string[];
}

export interface Posts {
  nick: string;
  link: string | null;
  avatar: string | null;
  date: string;
  message: HTMLDivElement;
}

export interface Image {
  id: string;
  href: string;
  src: string;
}

export interface Data {
  title: Title | null;
  posts: Posts[];
  images: Image[];
  user?: {
    name: string;
    link: string;
  };
  messages?: Element;
  theme?: {
    element?: HTMLAnchorElement | null;
    darkmode: boolean;
  };
  torrent: {
    seeders?: string;
    leechers?: string;
    size?: string;
    date: Date | null;
    times?: number;
    link: string;
  };
  thank: {
    element?: Element;
    list: Set<string>;
  };
  pagination?: Element;
  logo: string;
  forumline?: Element;
}

/**
 * Traverses DOM once then parses data
 */
export function handleData(): Data {
  const sel = Object.fromEntries(
    Object.entries({
      title: "a#topic-title",
      images: "#topic_main > tbody:nth-of-type(2) div.sp-wrap var.postImg",
      user: "div.topmenu td a",
      messages: "div.topmenu a.new-pm-link",
      theme: "div.topmenu .fas.fa-sun, div.topmenu .fas.fa-moon",
      seeders: "span.seed > b",
      leechers: "b.leech > b",
      size: "#tor-reged tr:nth-of-type(5) td:last-of-type",
      date: "div.post_head a.small",
      times: "td.borderless.bCenter.pad_8 > b",
      link: "a.dl-stub.dl-link",
      thank: "input#thx-btn",
      list: "div.thx-list",
      pagination: "table#pagination",
      logo: "img.site-logo",
      forumline: "table.forumline.message",
    }).map(([key, value]) => [key, document.querySelectorAll(value)])
  );

  return {
    title: handleTitle(sel?.["title"]?.[0]),
    posts: [],
    images: handleImages(sel["images"]),
    user: handleUser(sel?.["user"]?.[0]),
    messages: sel["messages"]?.[0],
    theme: handleTheme(sel["theme"]?.[0]),
    torrent: {
      seeders: sel?.["seeders"]?.[0]?.textContent,
      leechers: sel?.["leechers"]?.[0]?.textContent?.trim(),
      size: sel?.["size"]?.[0]?.textContent,
      date: handleDate(sel?.["date"]?.[0]?.textContent),
      times: handleTimes(sel?.["times"]?.[2]),
      link: (sel?.["link"]?.[0] as HTMLAnchorElement)?.href,
    },
    thank: {
      element: sel?.["thank"]?.[0],
      list: handleThankList(sel?.["list"]?.[0]),
    },
    pagination: sel?.["pagination"]?.[0],
    logo: (sel?.["logo"]?.[0] as HTMLImageElement)?.src,
    forumline: sel?.["forumline"]?.[0],
  };
}

/**
 * global data store
 */
export const data = $state<Partial<Data>>({});
