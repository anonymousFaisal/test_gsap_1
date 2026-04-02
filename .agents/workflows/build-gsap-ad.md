---
description: How to build a standard HTML/CSS/GSAP banner ad from raw image assets
---
# Build GSAP Banner Ad Workflow

Follow these steps exactly when the user asks to build a new GSAP banner ad based on image assets:

## 1. File Structure & Boilerplate Initialization
- Identify the target ad dimensions (e.g., 300x250, 728x90) from the user.
- Create 3 separate files for isolation: `index.html`, `style.css`, and `script.js`.
- In `index.html`, link the CSS, link the GSAP CDN (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`), and link the script.
- Ensure the structural `#banner` container has `overflow: hidden`, `position: relative`, and the correct hardcoded width and height to match the ad specifications.
- **Do not** use flexbox centering on the body unless requested; standard ads render at the top-left coordinate.

## 2. Asset Discovery & Placement
- Scan the directory to discover the shape and purpose of all provided images.
- Set all `.asset` images in the CSS to `position: absolute` and `background-size: contain`. 
- Intelligently layer the z-indexes based on naming conventions (e.g., `Bg.png` to `z-index: 0` or `1`, products and text to higher `z-index` like `5-10`).
- Ensure transparent cutouts (like archways) properly overlay elements that sit "inside" them. Use overlapping z-indexes strategically (the "Z-index Sandwich").

## 3. Basic Static Layout
- Use `view_file` or screenshot capabilities to verify the static layout perfectly matches the user's reference image without any animations applied.

## 4. GSAP Animation Timeline
- Initialize a GSAP master timeline: `const tl = gsap.timeline();`
- Set structural prep-work using `gsap.set()` at the top of the file (e.g., `transformOrigin: "top center"` for hanging elements, `center center` for scaling text).
- Use `tl.from()` chains to animate elements into their normal static CSS positions.
- **Do not** manually animate elements to arbitrary pixel coordinates if they are already mapped correctly in CSS. Move from hidden states to original states instead.
- Use relative timeline offsets like `"-=0.6"` and `"<"` to build a seamless introductory sequence rather than waiting for each block to explicitly finish.

## 5. Infinite/Ambient Loops
- For continuous motions (like bouncing products, swinging pendulums, flipping coins), do **not** block the main timeline.
- Drop an absolute anchor point on the timeline: `tl.addLabel("endloop", "+=0");`.
- Append infinite `.to()` blocks configured with `repeat: -1` to this label.
- Add offsets (e.g., `"endloop+=1.0"`) directly onto parallel infinite tracks when they need to overlap harmoniously without halting execution.

## 6. Complex Timelines & Interactivity
- **Multiple Timelines:** If an ad has heavily distinct phases (e.g., an intro sequence, a sustained ambient layout, and an outro triggered by an event), separate them into standalone GSAP timelines (`const introTl = gsap.timeline(); const idleTl = gsap.timeline();`).
- **Interactive Events:** For interactivity (clicks, hovers, swipes), bind vanilla Javascript event listeners to the interactive elements.
- Example: Pausing the ambient loop and triggering a secondary timeline when the user hovers over a component (`element.addEventListener('mouseenter', () => { idleTl.pause(); hoverTl.play(); });`).
- Make sure to define `paused: true` on any timeline that shouldn't fire immediately on page load but waits for user interaction.
