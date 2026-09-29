import type { Context } from '@deepseek-ai/cordis'
import { ASTRA_DARK_ART, ASTRA_LIGHT_ART } from './art.ts'
import css from './astra-codex.module.css'

const cls = (name: keyof typeof css): string => css[name] ?? ''

export function apply(ctx: Context): void {
  const body = document.body
  const originalTitle = document.title
  const originalLightArt = body.style.getPropertyValue('--astra-light-art')
  const originalDarkArt = body.style.getPropertyValue('--astra-dark-art')
  const scene = document.createElement('div')
  scene.className = cls('scene')
  scene.dataset.astraCodexScene = ''
  scene.dataset.skinChrome = 'astra-scene'
  scene.setAttribute('aria-hidden', 'true')
  const glow = document.createElement('div')
  glow.className = cls('ambientGlow')
  const constellation = document.createElement('div')
  constellation.className = cls('constellation')
  scene.append(glow, constellation)

  body.dataset.dshAstraCodex = ''
  body.style.setProperty('--astra-light-art', `url("${ASTRA_LIGHT_ART}")`)
  body.style.setProperty('--astra-dark-art', `url("${ASTRA_DARK_ART}")`)
  document.title = 'ASTRA CODEX · DSH'
  body.append(scene)

  ctx.effect(() => () => {
    scene.remove()
    delete body.dataset.dshAstraCodex
    if (originalLightArt === '') body.style.removeProperty('--astra-light-art')
    else body.style.setProperty('--astra-light-art', originalLightArt)
    if (originalDarkArt === '') body.style.removeProperty('--astra-dark-art')
    else body.style.setProperty('--astra-dark-art', originalDarkArt)
    if (document.title === 'ASTRA CODEX · DSH') document.title = originalTitle
  }, 'ui-skin-astra-codex: scene lifecycle')
}
