export function getTitleFromPathname(pathname: string) {
  const title = decodeURIComponent(pathname)
    // exclude prefix /wiki/ and suffix / from pathname
    .replace(/^\/wiki\/|\/$/g, '');

  return title;
}