export function skinAssetUrl(file: string): string {
  return new URL(`skin-assets/astra-codex/${file}`, document.baseURI).href
}
