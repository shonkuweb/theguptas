# The Gupta's — Luxury Landscape, Design & Development

A pixel-perfect, responsive web implementation of **The Gupta's** luxury landscape architecture and development brand hero interface.

---

## 🌟 Assets Uploaded to Cloudflare R2

Both assets were uploaded directly to your Cloudflare R2 bucket (`chf-media`) using AWS SigV4 S3 API and are served via your public R2 domain:

- **Hero Background Image (Clean Raw Photograph)**:  
  [`https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/the-guptas-hero-bg.jpg`](https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/the-guptas-hero-bg.jpg)
- **Brand Crest Logo (Transparent PNG)**:  
  [`https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/the-guptas-logo.png`](https://pub-ce8688bc6c654bcfb99716f7c9373bcd.r2.dev/the-guptas-logo.png)

---

## 🎨 Design & Typography Specifications

- **Category / Subtitle**:  
  `LANDSCAPE • DESIGN • DEVELOPMENT`  
  - Font: `Montserrat` (500, uppercase, `letter-spacing: 0.22em`)  
  - Color: Champagne Gold (`#dfc187`) with drop-shadow.

- **Main Heading**:  
  ```
  Nature,
  thoughtfully
  transformed.
  ```  
  - Font: `Cormorant Garamond` & `Playfair Display` (High contrast luxury editorial serif)  
  - Treatment: Metallic warm gold vertical gradient (`#fff2d8` → `#dfc187` → `#b2833a`) with text clipping and shadow.

- **Description Tagline**:  
  `Creating better outdoor environments, naturally.`  
  - Font: `Cormorant Garamond` (400, `color: #f4ede3`, `line-height: 1.35`)

- **Call to Action Button**:  
  `EXPLORE OUR WORK →`  
  - Border: Fine 1px gold border (`rgba(223, 193, 135, 0.65)`)  
  - Background: Glassmorphic dark tint with `backdrop-filter: blur(8px)`  
  - Interactive: Hover gold shimmer animation and arrow slide.

- **Scroll Indicator**:  
  - Golden vertical stem with pulse animation and gold anchor dot at bottom center.

- **Header**:  
  - Left: "THE GUPTA'S" golden crest emblem.  
  - Right: 3-bar gold hamburger menu opening a luxury full-screen slide-over navigation drawer.

---

## 🚀 How to Run Locally

A local preview server is already active on port `3000`:
- Open in your browser: **[http://localhost:3000](http://localhost:3000)**

You can also switch between:
1. **Mobile Mockup Mode**: Renders the exact 9:16 smartphone aspect ratio frame from your design.
2. **Full Screen Mode**: Expands seamlessly to full desktop viewport with responsive typography.
