<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Change Log

## 2026-05-14 - Background Texture
- Implemented a multi-layered "rough paper" texture in `globals.css` using combined SVG filters (fine grain + fiber noise).
- Increased overall texture opacity and added `mix-blend-mode: multiply` for a more realistic, tactile feel.
- Applied as a fixed overlay in `layout.tsx` to ensure visual consistency across all pages and components.

## 2026-05-14 - Style Update: No Emojis & Masculine Tone
- Removed all emojis from the entire website (FlipCard, Footer).
- Refactored all copy to a more direct and masculine tone.
- Updated headers from "Bester Papa der Welt" style to "Wahre Legende" and "Starke Momente".
- Streamlined memory descriptions to be more buddy-like and less sentimental.

## 2026-05-14 - FlipCard: Image Only & No Zoom
- Removed "Du bist es, Papa." text and gradient overlay from the back of the card.
- Removed the zoom/maximize functionality from the hero card to simplify the interaction.
- Cleaned up unused components and state related to the lightbox.
