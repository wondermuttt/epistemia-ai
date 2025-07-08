# Epistemia AI Consultancy Website – Build Instructions

## Project Overview

Epistemia is a premium AI consultancy specializing in agentic AI systems and intelligent automation. The website features a modern, professional design with video hero sections, interactive elements, and dynamic content loading. Built with **vanilla HTML, CSS, and JavaScript** (no frameworks). Design emphasizes **elite AI consulting** with sophisticated visuals, video backgrounds, and seamless user experience.

## Current Project Structure

```
epistemia.ai/
├── index.html              # Home page with video hero + featured articles
├── articles.html           # Articles listing with category filters
├── article.html            # Single article template
├── services.html           # Services page with 3 services + epistemology
├── about.html              # About page with leadership, mission, interactive differentiators
├── contact.html            # Contact page with form validation
├── robots.txt              # SEO configuration (allows all crawlers)
├── CNAME                   # GitHub Pages custom domain
├── articles.json           # Articles data source
├── css/
│   └── styles.css          # Main stylesheet with advanced animations
├── js/
│   └── main.js             # JavaScript with dynamic content loading
├── images/                 # Production images and assets
│   ├── logo.png            # Main logo
│   ├── Lens.mp4            # Hero video (main)
│   ├── lens_loop.mp4       # Hero video (loop at 1/3 speed)
│   ├── paul-henkelman-ceo.jpg     # Founder portrait
│   ├── mary-flores-president.jpg  # Founder portrait
│   ├── Automation.png      # Service image
│   ├── Compass.png         # Service image
│   ├── Training2.png       # Service image
│   ├── Epistemology.png    # Service image
│   ├── card-*.png          # Article card images
│   ├── icon-*.svg          # Social media and service icons
│   └── [other assets]      # Favicons, backgrounds, etc.
├── workspace/              # Non-deployable files (gitignored)
│   ├── tmpimages/          # Temporary/source images
│   └── *.sh                # Build scripts
└── .gitignore              # Excludes workspace/, .DS_Store, etc.
```

## Key Features & Implementation

### Design System

- **Color Palette:**
  - Primary: #2c3e50 (dark slate)
  - Accent: #4682B4 (steel blue) 
  - Background: #1a1a1a (near black)
  - Text: #C0C0C0 (silver) on dark
  - Highlights: Linear gradients with metallic effects

- **Typography:**
  - Headings: 'Lora', serif
  - Body: 'Inter', sans-serif
  - Responsive sizing with rem units

### Hero Sections

- **Video Heroes:** Lens.mp4 plays once, then seamless transition to lens_loop.mp4 at 0.33x speed
- **Text Overlays:** 
  - Index: "Accelerating Evolution" with "Innovate. Automate. Thrive."
  - About: "Pioneering the Future of Intelligent Enterprise"
- **Gradient Overlays:** Ensures text readability over video

### Navigation

- **Desktop:** Horizontal nav with hover effects
- **Mobile:** Hamburger menu with slide-down animation
- **Active States:** Current page highlighted
- **Social Links:** Footer with LinkedIn, Medium, Threads, X icons

### Content Features

1. **Dynamic Article System**
   - Articles loaded from articles.json
   - Category filtering (Enterprise AI, AI Epistemology, Federated Learning, AI in Society)
   - Hover effects show article summaries
   - Index shows 8 featured articles, articles page shows all

2. **Services Page**
   - Strategic AI Consulting (Compass.png)
   - AI Leadership Training (Training2.png)
   - AI Automation & Agentic Systems (Automation.png)
   - Model Epistemology section (Epistemology.png)

3. **About Page**
   - Leadership section with founder portraits
   - Mission statement with emphasis styling
   - Interactive "What Sets Epistemia Apart" section:
     - Left menu with 4 differentiators
     - Right content area updates on hover
     - Smooth transitions between content
   - Multiple content sections with alternating backgrounds

4. **Contact Form**
   - Real-time validation
   - Error messages for each field
   - Success message on submission
   - Styled with consistent design system

### Animations & Effects

- **Scroll Animations:** Elements fade in on About page only
- **Hover Effects:** 
  - Article cards lift with shadow
  - Service images scale slightly
  - Buttons and links have color transitions
- **Page Transitions:** Smooth scrolling, no jarring movements
- **Video Backgrounds:** Optimized loading with overlay gradients

### JavaScript Functionality

```javascript
// Core modules initialized on DOMContentLoaded:
- initVideoHero()        // Manages video transitions
- loadArticlesData()     // Loads articles from JSON
- initMobileNavigation() // Hamburger menu
- initDynamicArticles()  // Generates article cards
- initArticleFiltering() // Category filters
- initScrollAnimations() // Intersection Observer (About page)
- initFormValidation()   // Contact form
- initDifferentiators()  // Interactive About section
```

### Responsive Design

- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Grid Layouts:** CSS Grid with auto-fit
- **Images:** Responsive sizing, maintains aspect ratios
- **Typography:** Scales appropriately across devices

### Performance Optimizations

- **Lazy Loading:** Videos load on demand
- **CSS Versioning:** Cache busting with ?v=47
- **Minimal Dependencies:** No external libraries
- **Optimized Images:** Compressed PNGs, SVG icons
- **Debounced Scrolling:** Prevents performance issues

## Deployment

- **Platform:** GitHub Pages
- **Domain:** epistemia.ai (via CNAME)
- **Repository:** github.com/wondermuttt/epistemia-ai
- **SEO:** robots.txt allows all crawlers

## Development Workflow

1. **Local Changes:** Edit in main directory
2. **Testing Assets:** Keep in workspace/ directory
3. **Committing:** Use `git add -A` (workspace/ is gitignored)
4. **Deployment:** Push to master branch auto-deploys

## Important Notes

- Articles render immediately on index/services pages (no scroll animation)
- About page has scroll-triggered animations for sections
- Video loop plays at 1/3 speed for subtle movement
- All temporary files should go in workspace/ directory
- Use semantic HTML5 throughout
- Maintain accessibility with proper ARIA labels
- Test across browsers for video compatibility

## Recent Updates

- Implemented video hero sections with seamless looping
- Added founder portraits and leadership section
- Created interactive differentiators with hover states
- Updated article card images for better visual appeal
- Reorganized project structure with workspace directory
- Added comprehensive .gitignore for cleaner commits
- Implemented robots.txt for SEO