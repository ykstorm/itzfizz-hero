# itzfizz-hero

**Live site → https://itzfizz-hero-nu.vercel.app**

---

I built this as part of my internship assignment for Itzfizz Digital. The task was to make a scroll-driven hero section — basically a landing page where animations respond to how much you've scrolled, not just play once on load.

Spent more time on this than I expected honestly. Getting the timing right so nothing feels rushed or too slow took a lot of back and forth. The headline stagger went through like 5 versions before it felt natural.

---

## What's on the page

**Hero section (top)**
- Headline letters animate in one by one when the page loads
- Orange underline grows in underneath after the letters finish
- Four stats come in as you scroll down to them
- Badge, tagline, two buttons

**Scroll section (below)**
- Heading has a parallax effect — moves up slightly slower than you scroll, gives it some depth
- Orange card slides in from the left as you scroll down to it
- Project list items appear one at a time
- Small floating card with a gentle loop animation

---

## Stack

| Thing | What it does here |
|---|---|
| Next.js 14 | project structure, handles the build and deploy |
| React 18 | breaking the page into components |
| Tailwind CSS | layout and spacing |
| GSAP + ScrollTrigger | scroll-linked animations in the second section |
| Framer Motion | headline stagger, entrance animations, floating card |

---

## Running locally
```bash
git clone https://github.com/ykstorm/itzfizz-hero.git
cd itzfizz-hero
npm install
npm run dev
```

Open `http://localhost:3000`

---

## How the scroll animation actually works

The main thing I wanted to figure out was how to tie an animation directly to scroll position rather than just triggering it once. GSAP's ScrollTrigger handles this with a property called `scrub`.

`scrub: true` means scroll forward → animation goes forward, scroll back → animation reverses. Completely linked to where you are on the page.

`scrub: 1` adds a small lag which makes fast scrolling feel smoother instead of snappy.

For the parallax on the heading, the element just moves upward at a slower speed than the page. That small difference in speed is what makes it feel like it has depth.

---

## Why transform and not top/left

All the animations move things using `transform: translateY()` instead of changing `top` or `left` directly.

`transform` runs on the GPU so the browser doesn't have to redo its layout calculations on every frame. Animating `top` or `left` does cause that recalculation — you can feel it as choppiness, especially on scroll.

---

## Folder structure
```
app/
  layout.js             root HTML wrapper
  page.js               puts the two sections together

components/
  HeroSection.js        hero layout — badge, headline, buttons, stats
  AnimatedHeadline.js   letter-by-letter headline animation
  Stats.js              four stat cards
  ScrollSection.js      second section, all the GSAP scroll stuff

styles/
  globals.css           dark background, base resets, thin scrollbar
```

---

## Something that tripped me up

GSAP was silently failing on the headline — letters were in the DOM but completely invisible. The animation just never ran. Turns out it was a Next.js timing issue where GSAP was trying to grab the elements before hydration finished.

Switched the headline to Framer Motion which handles this automatically and it worked straight away. Kept GSAP only for the scroll section where ScrollTrigger is actually needed.