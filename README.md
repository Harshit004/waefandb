# Prêt À Boire - Landing Page

A premium, responsive landing page for the **Prêt À Boire** café concept by WAE F&B. Built with modern web technologies, focusing on high-end typography, dynamic responsive layouts using viewport units, and immersive media integration.

## Tech Stack

*   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Turbopack)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Language**: TypeScript
*   **Fonts**: 
    *   **Monschone** (Local custom font for primary headings)
    *   **Manrope** (Google font for body copy and subheadings)

## Key Features

*   **True Responsive Design**: Fully responsive architecture built heavily on viewport units (`vw`) ensuring perfect scaling across all laptop and desktop resolutions without media query breakpoints.
*   **Custom Typography Stack**: Distinctive editorial aesthetic combining the serif elegance of Monschone with the clean sans-serif readability of Manrope.
*   **Programmatic Carousel**: A custom horizontal snap-scroll carousel (Section 5) featuring:
    *   Dynamically calculated scroll centering.
    *   Interactive numeric progression tracking (e.g., `2 ——— 5`).
    *   SVG-based chevron navigation controls.
*   **Immersive Media Overlays**: Video backgrounds with CSS-grid/absolute positioned staggered bento-style cards (Section 3).
*   **Premium UI Details**: Subtly crafted elements like gradient-masked scroll indicators, precision-spaced grids, and a clean minimalist footer.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `src/app/page.tsx`: Contains the main landing page structure, divided into semantic `<section>` blocks (Hero, Belief, Who We Are, Details, Carousel, Contact, Footer).
*   `src/app/globals.css`: Contains the Tailwind directives and custom `@font-face` declarations for Monschone.
*   `src/app/fonts/`: Directory containing the local `.ttf` and `.otf` font files.
*   `public/`: Contains local media assets (e.g., the background video).

## Asset Management

Images are served via Cloudflare Image Delivery (`imagedelivery.net`) which is whitelisted in `next.config.ts`. Videos are served locally from the `public` directory.

## License

Copyright © WAE F&B (P) Ltd. 2026
