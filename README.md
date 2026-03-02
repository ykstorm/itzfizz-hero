# itzfizz-hero

This is a scroll-driven hero section I built for the Itzfizz Digital internship assignment.

The idea was to make something that feels alive — where the animations are tied to your scroll position rather than just playing once and stopping. Took a lot of tweaking to get the timing and easing to feel right.

**Live:** [add your Vercel link here after deploying]

---

## What's on the page

**Hero section**
- The headline letters come in one by one when the page loads (GSAP stagger)
- An orange underline grows in under the headline after the letters settle
- Four stats at the bottom fade in as you scroll down to them

**Scroll section**
- The heading has a parallax effect — it moves up slightly slower than you scroll, which creates depth
- The orange card slides in from the left as you scroll down to it
- The project list items appear one at a time

---

## Stack

- **Next.js 14** — project structure + deployment
- **React 18** — components
- **Tailwind CSS** — layout and spacing
- **GSAP + ScrollTrigger** — the scroll animations
- **Framer Motion** — entrance animations, the floating card

---

## Running locally

```bash
git clone https://github.com/YOUR_USERNAME/itzfizz-hero.git
cd itzfizz-hero
npm install
npm run dev
```

Open `http://localhost:3000`

---

## Deploying (Vercel)

1. Push to GitHub
2. Go to vercel.com → New Project → import the repo
3. Hit deploy — that's it, no config needed for Next.js

---

## Folder structure

```
app/
  layout.js       root layout
  page.js         assembles the sections

components/
  HeroSection.js        hero layout, badge, buttons, scroll hint
  AnimatedHeadline.js   the letter-by-letter headline
  Stats.js              the four stat cards
  ScrollSection.js      scroll-driven section with GSAP

styles/
  globals.css     base styles, dark theme
```

---

## A few things I learned building this

Using `overflow: hidden` on a parent element will clip GSAP animations that start outside the element bounds — found this when the headline was completely invisible on load. Removed the clip and added padding instead.

`scrub: true` in ScrollTrigger directly links the animation to scroll position with no lag. `scrub: 1` or `scrub: 1.5` adds a small delay which makes fast movements feel smoother and more physical.

`transform: translateY()` is always faster than animating `top` because transforms run on the GPU and don't force the browser to recalculate layout.
