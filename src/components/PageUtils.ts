export function getTitleFromPathname(pathname: string) {
  const title = decodeURIComponent(pathname)
    // exclude prefix /wiki/ and suffix / from pathname
    .replace(/^\/wiki\/|\/$/g, '')
    // replace underscore with space
    .replaceAll('_', ' ');

  return title;
}

export interface PageMetadata {
  title?: string;
  url?: string;
}