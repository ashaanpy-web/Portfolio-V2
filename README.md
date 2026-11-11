# 🧪 Liquid Glass — Developer Portfolio

A futuristic, high-performance personal portfolio built around a **Liquid Glass (Glassmorphism)** aesthetic. Features translucent frosted glass cards, dynamic light refraction effects, ambient background gradients, and smooth spatial UI interactions.

Designed to showcase modern web engineering, interactive UI component design, and full-stack automation workflows.

---

## 💎 Visual Design & Key Features

- **Liquid Glass Aesthetic:** Translucent UI elements using `backdrop-filter: blur()`, multi-layered border reflections, and soft drop shadows.
- **Dynamic Mesh Gradient Backdrop:** Ambient fluid background that moves smoothly, creating real-time light distortion beneath frosted glass containers.
- **Interactive Glass Cards:** Hover-triggered light refraction, subtle elevation shifts, and responsive tilt effects on featured project showcases.
- **Glassmorphism Navigation:** Floating frosted navigation bar with adaptive blur states on scroll.
- **Responsive Architecture:** Fully optimized across mobile, tablet, and ultra-wide displays without sacrificing backdrop render performance.

---

## 🛠️ Tech Stack

- **Core Framework:** React.js (Vite)
- **Styling Engine:** Tailwind CSS (v3 / v4) + Custom CSS Variables
- **Icons & Visuals:** Lucide React / FontAwesome
- **Deployment:** Netlify

---

## 🎨 Liquid Glass CSS Logic

The signature frosted glass effect is implemented using a layered combination of backdrop filters, semi-transparent backgrounds, and inner highlight borders:

```css
.liquid-glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border-radius: 1rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.liquid-glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 12px 40px 0 rgba(56, 189, 248, 0.2);
  transform: translateY(-4px);
}
