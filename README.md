# clawd-wallpaper

A mod for the Claude Code desktop app: a dim 16-bit pixel-art room as the chat backdrop, with Clawd coding at a retro desk. The monitor is the room's only light. The theme is dark-only and pure black (`#000000`), so the chat area, the bar above the prompt and the top bar all blend into one surface.

The room sits in the bottom-right corner and fades into black toward the left and top, so the text column stays readable at any window size.

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

- The room is drawn as vector pixels inside one SVG (under the 131,072-character limit), pinned to the bottom-right with `preserveAspectRatio="xMaxYMax slice"`.
- Colors come from `make-colors.js`, the helper that ships with Claude Code's mod-authoring skill, and use only dark values.
- Only one backdrop mod can be active at a time. Another one (for example `theme-examples`) replaces or clears this theme; reload plugins to bring it back.

## Disclaimer

Clawd is the Claude Code terminal mascot. This is unofficial fan art, not affiliated with or endorsed by Anthropic.

## License

MIT, see `LICENSE`.
