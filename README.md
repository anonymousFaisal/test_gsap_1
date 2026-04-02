# Pran Milk Ramadan GSAP Banner Ad

A modern, high-performance HTML5 display ad (300x250) built for the Pran Milk Ramadan campaign leveraging GreenSock Animation Platform (GSAP).

## 🚀 Overview

This repository contains the completely decoupled HTML, CSS, and Javascript for the 300x250 display ad unit. It utilizes a custom GSAP sequencing architecture that focuses entirely on buttery fluid motion, "Z-Index Sandwich" layering, and structurally independent infinite parallel ambient loops.

### Directory Structure
- **`index.html`**: The semantic DOM container and structural setup, linking all internal and external assets.
- **`style.css`**: Completely decoupled styling. Responsible for rendering the "Z-Index Sandwich"—orchestrating the physical layers so foreground content sits gracefully over transparent background windows/cutouts (like the central archway).
- **`script.js`**: GSAP timeline execution.

## 🎞️ Animation Architecture

The GSAP implementation relies on a sequential intro flow followed by parallel repeating tracks:
1. **The Intro Flow (Staggered Entrances):** Heavy use of `.from()` tweens scaling from `0` and sliding back to original positions. `stagger` properties create the sequential bounce behavior.
2. **Infinite Synchronized Lapping:** Instead of locking out a single timeline, the script places a master anchor using `tl.addLabel("endloop")`. It then spins parallel infinitely looping `.to()` tweens dynamically spaced so the swinging elements perfectly cascade into overlapping waves without ever blocking each other.

---

## 🤖 Workflows & Skills

This repository acts as the foundation for the AI-assisted Display Ad build workflow. Included within the repository is an AI-readable workflow/skill file.

### `/build-gsap-ad`
Located at `.agents/workflows/build-gsap-ad.md`. 
This workflow is specifically engineered as a capability skill for to automate future GSAP ad generation correctly.

When executed, it forces the assistant to:
1. Identify and hardcode exact dimensional layout bounds.
2. Scaffold structurally decoupled files (`index.html`, `style.css`, `script.js`).
3. Leverage absolute CSS placements before scripting.
4. Animate dynamically exclusively against CSS anchor points using `gsap.from()`.
5. Architect independent, parallel looping GSAP timeline configurations to support multiple ambient tracks and future user interactivity.
