import type { Context } from '@deepseek-ai/cordis'
import { installSkinAssets } from '../../shared/skin-assets.ts'
import files from '../assets/runtime/manifest.json'

export function apply(ctx: Context): void {
  installSkinAssets(ctx, 'astra-codex', new URL('../assets/runtime/', import.meta.url), files)
}
