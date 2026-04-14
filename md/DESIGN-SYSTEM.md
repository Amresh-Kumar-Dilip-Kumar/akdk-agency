# AKDK Digital — Design System

> Last updated: March 2026  
> Design language: **Editorial / Minimal**  
> Inspired by: Vercel, Linear, stripe.com documentation

---

## Core Principles

- **Maximum contrast** — black ink on white paper.
- **Single accent** — `red-600` is the only brand colour. No gradients, no cyan, no purple.
- **No decoration for decoration's sake** — no glow blobs, no backdrop-blur glass cards, no confetti effects.
- **Flat geometry** — sharp corners preferred (`rounded` or `rounded-none`). Never `rounded-3xl`.
- **Typography does the heavy lifting** — size, weight, tracking carry hierarchy.

---

## Colour Tokens

| Token | Value | Usage |
|---|---|---|
| Background | `#FAFAF9` | Page/section default |
| Surface | `#FFFFFF` | Cards, panels |
| Ink | `gray-950` | Primary text, headings |
| Muted | `gray-500` | Body copy, labels |
| Accent | `red-600` | CTA, overlines, hover states, icon accents |
| Inverted | `gray-950` | Dark sections (About, CTA blocks) |
| CTA section | `red-600` | Full-bleed CTA strips |
| Border | `gray-200` | Card/section borders |
| Border dark | `gray-800` | Borders on dark `gray-950` sections |

---

## Typography

| Role | Class |
|---|---|
| Page title (hero) | `text-[clamp(3rem,9vw,7rem)] font-black leading-[0.95] tracking-tight` |
| Section heading | `text-4xl md:text-5xl font-black leading-tight` |
| Overline | `text-xs font-bold uppercase tracking-[0.2em] text-red-600` |
| Body | `text-base text-gray-500 leading-relaxed` |
| Small label | `text-xs text-gray-400 uppercase tracking-wider` |

---

## Buttons

```tsx
// Primary (default)
<button className="px-7 py-3.5 bg-gray-950 text-white text-sm font-semibold hover:bg-red-600 transition-colors flex items-center gap-2">
  Label <ArrowRight className="w-4 h-4" />
</button>

// Secondary / outline
<button className="px-7 py-3.5 border border-gray-300 text-gray-700 text-sm font-semibold hover:border-gray-950 transition-colors">
  Label
</button>

// On dark background (ghost)
<button className="px-7 py-3.5 border border-gray-700 text-white text-sm font-semibold hover:border-red-600 hover:text-red-500 transition-colors">
  Label
</button>

// On red CTA section
<button className="px-7 py-3.5 bg-white text-red-600 text-sm font-bold hover:bg-gray-100 transition-colors">
  Label
</button>
```

---

## Cards

```tsx
// Default card (flat, bordered)
<div className="bg-white border border-gray-200 p-6 hover:border-gray-400 transition-colors">
  ...
</div>

// On dark background
<div className="bg-gray-900 border border-gray-800 p-6">
  ...
</div>
```

No `shadow-xl`, no `backdrop-blur`, no gradient backgrounds, no `rounded-3xl`.

---

## Section Patterns

### Section header block
```tsx
<div className="mb-14">
  <p className="text-red-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Overline</p>
  <h2 className="text-4xl md:text-5xl font-black text-gray-950 leading-tight">Heading</h2>
</div>
```

### Tile grid (flush borders, no gutter)
```tsx
<div className="grid md:grid-cols-3 gap-px bg-gray-200">
  <div className="bg-white p-6">...</div>
  <div className="bg-white p-6">...</div>
  <div className="bg-white p-6">...</div>
</div>
```

### Inverted (dark) section
```tsx
<section className="bg-gray-950 text-white">
```

### CTA section
```tsx
<section className="bg-red-600 text-white">
```

---

## Page Header (shared component — `page-header2.tsx`)

- `bg-gray-950 text-white`
- Red top-bar `h-1 bg-red-600`
- Hero image at `opacity-15` with **single** dark overlay `bg-gray-950/80`
- No multiple gradient layers, no blue/purple accents
- Overline in `text-red-500`, headline in `text-white font-black`

---

## Navbar

- `bg-white border-b border-gray-200` (scrolled: add `shadow-sm`)
- Nav links: `text-gray-700 hover:text-red-600 font-medium` + `border-b-2 border-transparent hover:border-red-600` underline on hover
- CTA button: `bg-red-600 text-white hover:bg-red-700` (flat, no gradient, no rounded-xl)
- Mobile menu: `bg-white border-t border-gray-200`, same link style

---

## Icons

- Monochrome `text-gray-400` for decorative use
- `text-red-600` for accent/functional icons
- No gradient icon boxes (no `bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl`)
- Simple `text-red-600` inline icon or plain `bg-red-600 text-white p-2` box if needed

---

## What to Avoid

| ❌ Don't | ✅ Do instead |
|---|---|
| `bg-gradient-to-br from-gray-900 via-red-900 to-gray-900` | `bg-gray-950` or `bg-red-600` |
| `from-red-400 to-pink-400 bg-clip-text text-transparent` | `text-red-600` |
| `rounded-3xl` cards | `bg-white border border-gray-200` with `rounded` or none |
| `backdrop-blur-sm bg-white/5 border border-white/10` | Solid `bg-gray-900 border border-gray-800` |
| Multiple glow blobs `w-32 h-32 bg-red-100/30 rounded-full blur-2xl` | Remove entirely |
| `rounded-full` pill badges | Flat `text-[10px] uppercase tracking-wider bg-red-600 text-white px-2 py-0.5` tag |
| `hover:scale-105` on full cards | `hover:border-gray-400` or `hover:bg-gray-50` |

---

## Files Changed (March 2026)

- `src/components/new-landing-blocks/LandingPageV2.tsx` — full rewrite (home page)
- `src/components/landing/page-header2.tsx` — rewrite to editorial dark header
- `src/components/Navbar.tsx` — flatten CTA + nav link hover
- `src/components/landing/Footer.tsx` — cleanup gradient/glow elements
- `src/app/(landing)/about-us/page.tsx` — rewrite
- `src/app/(landing)/service/page.tsx` — rewrite
- `src/app/(landing)/project/page.tsx` — rewrite
- `src/app/(landing)/contact-us/page.tsx` — rewrite
- `src/app/(landing)/career/page.tsx` — rewrite
- `src/app/(landing)/layout.tsx` — bg update to `#FAFAF9`
