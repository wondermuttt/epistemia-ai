# Epistemia AI Consultancy Website – Build Instructions

## Project Overview

Epistemia is a premium AI consultancy requiring a clean, professional, responsive website showcasing thought leadership content and services. Use **vanilla HTML, CSS, and JavaScript** with no frameworks. Design reflects **elite AI consulting** brand: sleek dark aesthetic with charcoal/deep navy background, metallic silver highlights, owl-themed logo symbolizing wisdom. Typography combines Lora (serif headings) and Inter (sans-serif body). Fully responsive, optimized for GitHub Pages, with semantic markup and well-commented code.

## Project Structure

```
epistemia.ai/
├── index.html          # Home page (hero + featured articles grid)
├── articles.html       # Articles listing with category filters
├── article.html        # Single article template (lorem ipsum)
├── services.html       # Services page (3 key services + icons)
├── about.html          # About page (mission, vision, story)
├── contact.html        # Contact page (form + JS validation)
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # Main JavaScript file
└── images/             # All placeholder SVG files
    ├── logo-metallic.svg     # Primary owl logo (metallic silver)
    ├── logo-simple.svg       # Simplified owl logo (favicon)
    ├── header-bg.svg         # Hero background (dark tech theme)
    ├── thumb-enterprise-{1,2}.svg    # "Enterprise AI" thumbnails
    ├── thumb-epistemology-{1,2}.svg  # "AI Epistemology" thumbnails
    ├── thumb-federated-{1,2}.svg     # "Federated Learning" thumbnails
    ├── thumb-society-{1,2}.svg       # "AI in Society" thumbnails
    ├── icon-consulting.svg    # Strategic AI Consulting icon
    ├── icon-training.svg      # AI Leadership Training icon
    └── icon-guidance.svg      # Model Epistemology Guidance icon
```

**Note:** All images are placeholder SVGs using brand colors (charcoal, navy, silver). Ensure exact filenames for proper referencing.

## HTML Pages

All pages use semantic HTML5 structure with consistent header/footer:

- **Header:** Logo left, nav menu right. Mobile hamburger menu (☰) toggles nav. Navy background, silver/white text.
- **Footer:** Copyright notice, minimal styling matching color scheme.
- Include Google Fonts: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lora:wght@700&display=swap" rel="stylesheet">`
- Link to CSS and JS: `<script src="js/main.js" defer></script>`
- Use HTML comments for major sections: `<!-- Hero Section -->`, `<!-- Services Section -->`

### index.html – Home Page

- **Hero Section:** Full-width banner with header-bg.svg background, logo-metallic.svg prominently displayed, tagline "Empowering Intelligent Solutions through Epistemic AI" (large Lora font, silver color), centered content
- **Featured Articles Grid:** 8 article tiles in responsive grid (4x2 desktop, 2-3 columns tablet, 1 column mobile). Each tile: thumbnail image, title, category label. Hover effects: subtle lift/shadow with CSS transitions (0.3s)

### articles.html – Articles Listing

- **Page Header:** `<h1>Articles</h1>` + brief intro
- **Category Filter:** Horizontal buttons for "All", "Enterprise AI", "AI Epistemology", "Federated Learning", "AI in Society". Use `data-category` attributes and `.active` class styling
- **Articles Grid:** Similar to home page tiles but all articles. Each item has category classes for JS filtering
- **Filtering Logic:** Show/hide articles based on category selection, smooth transitions

### article.html – Single Article Template

- **Article Header:** `<article>` element, large `<h1>` title, meta info (author, date)
- **Content:** Lorem ipsum with realistic structure: intro paragraph, subheadings (`<h2>`, `<h3>`), paragraphs, lists, blockquotes
- **Layout:** Max-width for readability (~65-75 characters per line), adequate margins

### services.html – Services Page

- **Intro:** `<h1>Our Services</h1>` + introductory paragraph
- **Services Grid:** Three-column layout (desktop), single column (mobile):
  1. **Strategic AI Consulting** (icon-consulting.svg) - AI strategy, roadmaps, business alignment
  2. **AI Leadership Training** (icon-training.svg) - Executive education, AI literacy, data culture
  3. **Model Epistemology Guidance** (icon-guidance.svg) - Model interpretation, transparency, validation
- Each service: icon, `<h2>` title, descriptive paragraph

### about.html – About Page

- **Sections:**
  - `<h1>About Epistemia</h1>`
  - `<h2>Our Mission</h2>` - Knowledge-centric AI solutions, bridging technology and strategy
  - `<h2>Our Vision</h2>` - AI guided by wisdom and responsibility
  - `<h2>Our Story</h2>` - Founded 2024, focus on epistemic rigor, Fortune 500 + startups
- Text-focused layout with comfortable reading width

### contact.html – Contact Page

- **Form Elements:**
  - Name: `<input type="text" name="name" required>`
  - Email: `<input type="email" name="email" required>`
  - Message: `<textarea name="message" required></textarea>`
  - Submit: `<button type="submit">Send Message</button>`
- **Validation:** JS checks for empty fields, valid email format, prevents submission on errors, shows success message
- Optional contact info: "Or email us at info@epistemia.ai"

## CSS – `css/styles.css`

### Color Palette
- **Charcoal:** #2c2c2c (backgrounds, heavy text)
- **Deep Navy:** #0b1e2e (header/nav, accents)
- **Metallic Silver:** #C0C0C0 (text highlights, borders, icons)

### Typography
```css
h1, h2, h3, .hero-tagline { font-family: 'Lora', serif; }
body, p, li, input, textarea, button { font-family: 'Inter', sans-serif; }
```

### Layout & Responsive Design
- **CSS Grid/Flexbox:** Article grids, services layout, header layout
- **Media Queries:** Mobile-first approach, breakpoints ~600px (mobile), ~900px (tablet)
- **Article Grid Example:** `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;`

### Key Components
- **Navigation:** Horizontal desktop, vertical dropdown mobile with `.nav-open` class toggle
- **Buttons:** Consistent styling with hover effects, `.active` state for filters
- **Article Cards:** Dark background, hover lift effect, smooth transitions
- **Forms:** Full-width inputs (max-width: 500px), focus effects, placeholder styling

### Animations
- **Hover Effects:** Transform, box-shadow transitions (200-300ms)
- **Scroll Reveals:** `.hidden` class initially (opacity: 0, translateY: 20px), `.show` class reveals (opacity: 1, transform: none), transition 0.6s ease-out

## JavaScript – `js/main.js`

### Core Features

1. **Mobile Navigation Toggle**
   ```js
   document.querySelector('.menu-toggle').addEventListener('click', function() {
       document.querySelector('.nav-links').classList.toggle('open');
   });
   ```

2. **Article Category Filtering**
   - Get filter buttons and article items
   - On button click: update `.active` state, show/hide articles based on `data-category`
   - "All" shows everything, specific categories filter accordingly

3. **Scroll-Triggered Reveals**
   - Use IntersectionObserver for elements with `.hidden` class
   - Add `.show` class when elements enter viewport
   - Target: article tiles, service items, content sections

4. **Form Validation**
   - Prevent form submission if fields empty or email invalid
   - Use `alert()` for error messages, `form.reset()` on success
   - Basic email validation: check for @ and . characters

### Implementation Notes
- Guard code sections for page-specific elements (check if elements exist)
- Use comments for major sections
- Keep code ~50-100 lines, well-organized
- No external dependencies

## Images & Assets

### SVG Specifications
All images are placeholder SVGs using brand colors:

- **logo-metallic.svg:** Stylized owl with metallic silver effect, suitable for dark backgrounds
- **logo-simple.svg:** Flat owl icon for favicon/small usage
- **header-bg.svg:** Abstract tech background (circuits/nodes) in navy/charcoal gradients
- **Article Thumbnails:** Category-specific icons (8 total):
  - Enterprise: office/business + AI elements
  - Epistemology: brain/owl/knowledge symbols
  - Federated: connected devices/network diagrams
  - Society: people/globe + digital elements
- **Service Icons:** Strategy (chess/target), training (presentation/graduation), guidance (owl/magnifying glass)

All icons consistent style, silver on dark backgrounds, recognizable at small sizes.

## Success Criteria

1. **Clean Structure:** Semantic HTML5, organized file structure, commented code, no unused libraries
2. **Responsive Layout:** Mobile-first design, fluid grids, hamburger navigation, no horizontal scroll
3. **Elegant Interactivity:** Smooth hover effects, working filters, scroll reveals, form validation
4. **Professional Branding:** Dark theme with silver accents, premium aesthetic, consistent typography
5. **Clear Content Flow:** Logical navigation, effective CTAs, thought leadership showcase
6. **Performance:** Fast loading, browser compatibility, graceful degradation

Target: Professional static website reflecting elite AI consultancy brand, fully functional with vanilla web technologies.