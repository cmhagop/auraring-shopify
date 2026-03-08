# AURARING — Shopify OS 2.0 Theme

A premium, dark-minimal Shopify theme built for the AURARING smart ring brand. Designed with a futuristic, high-end aesthetic — deep blacks, platinum accents, soft glow effects, and polished micro-interactions.

## Quick Start

### Connect to Shopify

1. Push this repository to GitHub
2. In Shopify Admin → **Online Store → Themes → Add theme → Connect from GitHub**
3. Select this repository and branch

### Local Development

```bash
# Install Shopify CLI
npm install -g @shopify/cli @shopify/theme

# Start development server
shopify theme dev --store your-store.myshopify.com
```

## Theme Structure

```text
auraring/
├── .gitignore
├── assets/
│   ├── base.css
│   ├── hero-banner.png
│   ├── hero-ring.png
│   ├── lifestyle-bg.png
│   ├── theme.css
│   └── theme.js
├── config/
│   ├── settings_data.json
│   └── settings_schema.json
├── layout/
│   └── theme.liquid
├── locales/
│   └── en.default.json
├── sections/
│   ├── announcement-bar.liquid
│   ├── faq.liquid
│   ├── final-cta.liquid
│   ├── footer-group.json
│   ├── footer.liquid
│   ├── header-group.json
│   ├── header.liquid
│   ├── hero.liquid
│   ├── how-it-works.liquid
│   ├── lifestyle.liquid
│   ├── main-cart-items.liquid
│   ├── main-collection-product-grid.liquid
│   ├── main-product.liquid
│   ├── metrics-dashboard.liquid
│   ├── product-showcase.liquid
│   ├── testimonials.liquid
│   └── value-proposition.liquid
├── snippets/
│   ├── button.liquid
│   └── icon.liquid
└── templates/
    ├── cart.json
    ├── collection.json
    ├── index.json
    └── product.json
```

## Design System

| Token             | Value     |
| ----------------- | --------- |
| Background        | `#0a0a0a` |
| Card BG           | `#111111` |
| Elevated          | `#1a1a1a` |
| Text              | `#f0f0f0` |
| Text Muted        | `#888888` |
| Accent (Platinum) | `#c0c0c8` |
| Heading Font      | Outfit    |
| Body Font         | Inter     |

## Features

- **Shopify OS 2.0** — JSON templates, modular sections, full Theme Editor support
- **Dark luxury aesthetic** — deep blacks, platinum accents, subtle glow effects
- **Responsive** — mobile-first design with elegant desktop layouts
- **Premium UI** — diffused gradient buttons, glass cards, smooth hover states
- **Conversion-focused** — clear CTAs, trust signals, structured homepage flow
- **Accessible** — skip-to-content, ARIA labels, semantic HTML
- **Clean architecture** — reusable snippets, clear naming, minimal dependencies

## License

Proprietary — AURARING brand theme. Not for redistribution.
