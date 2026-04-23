# Bedroom Hub — Image Generation Prompt

This is the master prompt used to generate `bedroom.png` (the AI Kaihatsu Quest landing-page hub) via **Google Gemini 2.5 Flash Image** ("Nano Banana") in Google AI Studio.

Save the resulting image as `public/room/bedroom.png`.

---

## Master prompt

> 16-bit SNES JRPG pixel art, interior background, 4:3 widescreen, vibrant retro colors, sharp clean pixel edges, no anti-aliasing — in the spirit of *Chrono Trigger*, *Secret of Mana*, *Earthbound*, and *Final Fantasy VI* indoor scenes.
>
> **Camera / perspective (CRITICAL):** classic JRPG **3/4 top-down view**, camera elevated and tilted down at roughly 30–35°, looking diagonally into the corner of the room. Two walls are visible — the **back wall** receding upward and the **left side wall** receding to the left — meeting at a vertical seam in the back-left. The **tatami floor takes up the lower 55% of the frame** with clear depth, tiles getting slightly smaller toward the back. Furniture sits ON the floor with proper foreshortening — bookshelf and wardrobe stand against the back wall casting shadows toward the camera, the desk and TV stand sit further forward into the room. Strong sense of depth and volume, like you could walk into the room. NOT a flat side-elevation, NOT a dollhouse cutaway.
>
> **Scene:** the bedroom of a 90s Japanese teenage boy — but the room is inside a deep-space starship. Cozy and dreamy.
>
> **Layout, left to right:**
> - **Left wall:** a tall wooden bookshelf packed with colorful manga volumes, a gast (berserk) figurine on the top shelf, and a softly glowing blue crystal beside it. On the shelf below, a GON figurine with a pole, with colorful books. On the self below A frieren figurine with colorful book on the side. On top of the bookshelf, a classic synthesizer piano (like a Yamaha DX7) is mounted on wall brackets. Next to the shelf, a framed retro Daft Punk synthwave poster (neon pink/purple sunset).
> - **Center back wall:** a large round porthole window taking up most of the upper wall, looking out into deep space — swirling purple-and-blue nebula, distant stars, a Saturn-like ringed planet, and a sleek retro-futurist spaceship cruising past. Soft cosmic light spills into the room.
> - **Center foreground:** a low wooden desk with a beige CRT computer (turned on, github copilot CLI open, with **glowing phosphor-green monospace text** on a dark screen, soft green halo bleeding around the monitor like an old CRT), a yellow gooseneck desk lamp glowing, an open notebook, and sushi with chopsticks. A zabuton under it.
> - **Center-right:** a small TV stand with a chunky CRT television showing a glowing "?" pixel icon on a blue starry screen, and a ps2 console with controllers on top.
> - **Right side:** a tall wooden wardrobe (drawers + cabinet, brass round handles). On top of the wardrobe: glowing blue crystal , a glowing blue crystal, a potion bottle, and a small bonzai plant. Above the wardrobe, a traditional white judogi with a dark black belt is neatly hung on a hanger. keep some space on the right of the wardrobe to add stuff after.
> - **Floor:** woven tatami mats with green-and-tan stitching. A neatly folded futon on the left with a small orange tabby cat sleeping curled up on it. A SNES controller lies on the floor near the desk.
> - **Ceiling:** a string of warm fairy lights with tiny glowing yellow/pink/cyan bulbs draped along the upper edge of the back wall.
>
> keep some space on the right of the bottom of the image to add stuff after.
>
> **Mood:** warm, cozy, nostalgic, dreamy — a sanctuary of code and adventure floating among the stars. Warm interior lighting (yellow lamp + string lights) contrasted with cool blue/purple cosmic glow from the porthole. Slight CRT scanline feel. No text, no UI, no watermarks, no human characters.
>
> **Aspect ratio:** 4:3. **Resolution:** highest available. **Style:** 16-bit pixel art, no painterly blur.
>
> **Reference:** attach the previous `bedroom.png` as a style/composition reference and instruct: *"match the camera angle, perspective, depth, and overall lighting mood of the reference image."*

---

## Notes

- Key style anchor: **"16-bit SNES JRPG, in the spirit of Chrono Trigger / Secret of Mana / Earthbound"** — this is what gives the first generation its clean retro vibe.
- Generate 4+ variants in one batch in AI Studio and pick the cleanest.
- Hotspots in `src/components/room/PixelRoom.astro` are positioned by % coordinates and are tuned to this image — if you regenerate with different proportions or aspect ratio, fine-tune the hotspot percentages there.
