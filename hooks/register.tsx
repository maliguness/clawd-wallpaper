import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { ROOM_PATHS } from './room-paths.js'

// Clawd's dark pixel room, drawn as vector pixels. It covers the whole backdrop (slice, anchored bottom-right), with a faint ambient floor and wall everywhere so it never fades to bare black; panels are translucent so it shows through them.
const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404 224" preserveAspectRatio="xMaxYMax slice" shape-rendering="crispEdges">
<rect width="404" height="254" fill="#000000"/>
<g opacity="0.92">${ROOM_PATHS}</g>
</svg>`

const { theme, problems } = makeColors({
  label: 'Clawd dark workspace',
  roles: { accent: '#D77757', danger: '#E0705F', success: '#8CC07A', warning: '#E0A85A', pro: '#B08BD6' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#000000',
        'surface-1': '#000000',
        'surface-2': '#0b0b0a',
        'surface-3': '#101010',
        'text-primary': '#F0EEE6',
        'text-secondary': '#C9C6BB',
        'text-muted': '#9E9B91',
      },
    },
  },
  only: 'dark',
})

const LOOK: ThemeSetArgs = { colors: theme, backdrop: { scene: 'clawd-room', glass: { blur: 0, opacity: 0.4 } } }

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }

    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="Clawd coding at a retro desk in a dim pixel-art room" />
  })
}
