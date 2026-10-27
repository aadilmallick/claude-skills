# Motion Implementation Generator

Generate production-ready examples.

Frameworks:

- CSS
- Tailwind
- Framer Motion
- GSAP
- Motion One

Always generate:

1. CSS version
2. Tailwind version
3. Framer version

---

# Animation Types

## Fade Up

CSS

```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Tailwind

```html
<div class="animate-[fadeUp_0.8s_cubic-bezier(.16,1,.3,1)_forwards]">
```

Framer

```tsx
<motion.div
 initial={{ opacity:0, y:40 }}
 animate={{ opacity:1, y:0 }}
 transition={{
   duration:0.8,
   ease:[0.16,1,0.3,1]
 }}
/>
```

---

## Floating Counter

CSS

```css
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-4px);
  }

  100% {
    transform: translateY(0px);
  }
}
```

---

## Scrolling Marquee

Tailwind

```html
<div class="overflow-hidden">
  <div class="whitespace-nowrap animate-marquee">
```

```css
@keyframes marquee {
   from {
      transform: translateX(0%);
   }

   to {
      transform: translateX(-50%);
   }
}
```

---

## System Pulse

```css
@keyframes pulseSystem {
   0% {
      opacity:.5;
   }

   50% {
      opacity:1;
   }

   100% {
      opacity:.5;
   }
}
```

---

## Living Dashboard

Components:

- Updating metrics
- Tickers
- Activity feed
- Pulsing indicators
- Status transitions

Generate code for all systems.