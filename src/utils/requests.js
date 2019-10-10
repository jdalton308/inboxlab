
const ITUNES_BASE = "https://itunes.apple.com/";



export function fetchSearch(query) {
  return fetch(ITUNES_BASE + `search?term=${encodeURI(query)}`); // todo: URL encode
}