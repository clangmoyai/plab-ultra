/**
 * Handles piccash.net
 */
export async function piccash(href: string, src?: string): Promise<string> {
  let imgSrc;

  if (src && src.includes("img_thumb")) {
    imgSrc = src;
  } else {
    imgSrc = href;
  }

  return (
    imgSrc
      .replace("http://", "https://")
      // .replace("/allpics/", "/allimage/")
      .replace("/img_thumb/", "/img_full/")
      .replace("-thumb.", ".")
  );
}
