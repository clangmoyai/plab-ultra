/**
 * Handles
 * - imgbase.ru
 * - picclick.ru
 * - adult-images.ru
 * - payforpic.ru
 * - xxxpicture.de
 * - imgbum.de
 * - adultimages.de
 * - picforall.eu
 * - pornoimages.de
 */
export async function imgbase(href: string, src?: string): Promise<string> {
  if (!src) return href;

  return src.replace("-thumb.", ".");
}
