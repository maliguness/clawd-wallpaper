# clawd-wallpaper

A mod for the Claude Code desktop app: a dim 16-bit pixel-art room as the chat backdrop, with Clawd coding at a retro desk. The monitor is the room's main light, and a faint ambient glow keeps the floor boards and walls visible everywhere, so the picture covers the whole window without bare black patches.

The theme is dark-only and pure black (`#000000`). Panels (the bar above the prompt, the top bar) are translucent, so the room continues behind them. Along the bottom there is a rug with a sleeping cat, a few boxes, sneakers and a potted plant.

## Install

In a terminal session:

```
/plugin install clawd-wallpaper --marketplace maliguness/clawd-wallpaper
```

From a shell:

```bash
claude plugin install clawd-wallpaper --marketplace maliguness/clawd-wallpaper
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `maliguness/clawd-wallpaper`, then Add plugin.

Choose the user scope to have it in every session. It needs a Claude Code version that draws a mod's backdrop behind the chat. Run `/reload-plugins` or start a new session after installing.

## Notes

- The room is drawn as vector pixels inside one SVG (about 58,000 characters, well under the 131,072 limit), scaled with `preserveAspectRatio="xMaxYMax slice"` so it always fills the window and stays anchored to the bottom-right.
- Colors come from `make-colors.js`, the helper that ships with Claude Code's mod-authoring skill, and use only dark values.
- Panels use `glass: { blur: 0, opacity: 0.4 }`. Raise the opacity in `hooks/register.tsx` if text over the picture is hard to read, or set `glass: false` for solid panels.
- Only one backdrop mod can be active at a time. Another one (for example `theme-examples`) replaces or clears this theme; reload plugins to bring it back.

## Disclaimer

Clawd is the Claude Code terminal mascot. This is unofficial fan art, not affiliated with or endorsed by Anthropic.

## License

MIT, see `LICENSE`.
