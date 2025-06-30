Great, I’ll now generate a `claude.md` file that:

* Clearly instructs Claude Code to generate a professional static website using HTML, CSS, and JS.
* Describes each page and file it needs to create.
* Uses placeholder images (described inline or as SVG).
* Avoids giving the actual code, so you can test Claude’s generation skills based on your instructions.

I’ll let you know as soon as it’s ready.


# Epistemia AI Consultancy Website – Build Instructions

## Project Overview

Epistemia is a premium AI consultancy requiring a clean, professional, and responsive website. The site will showcase thought leadership content (articles) and detail Epistemia’s services and philosophy. All development will use **vanilla HTML, CSS, and JavaScript** with no frameworks or build tools. The design will reflect an **elite AI consulting** brand: a sleek dark aesthetic with a charcoal and deep navy background, metallic silver highlights, and an owl-themed logo symbolizing wisdom. Typography will combine serif and sans-serif (Lora for headings, Inter for body) for a modern, trustworthy feel. Every page must be fully responsive and optimized for fast loading on GitHub Pages, with semantic, accessible markup and well-commented code for maintainability.

## Project Structure

Create the following file and folder structure for the project:

* **epistemia.ai/** (root project directory)

  * **index.html** – Home page (hero banner + featured articles grid)
  * **articles.html** – Articles listing page with category filters
  * **article.html** – Single article template page (lorem ipsum content)
  * **services.html** – Services page (3 key services with icons)
  * **about.html** – About page (mission, vision, founding story)
  * **contact.html** – Contact page (contact form with JS validation)
  * **css/**

    * **styles.css** – Main stylesheet for site-wide styles
  * **js/**

    * **main.js** – Main JavaScript file for interactive features
  * **images/** (all images as placeholder SVG files, to be generated)

    * **logo-metallic.svg** – *Epistemia logo*: owl emblem with a metallic silver design
    * **logo-simple.svg** – Simplified owl logo (e.g. flat icon version, used for favicon or small logo)
    * **header-bg.svg** – Decorative hero background (dark theme, abstract circuit or network motif)
    * **thumb-enterprise-1.svg**, **thumb-enterprise-2.svg** – Article thumbnails for "Enterprise AI" category (placeholder graphics)
    * **thumb-epistemology-1.svg**, **thumb-epistemology-2.svg** – Thumbnails for "AI Epistemology" articles
    * **thumb-federated-1.svg**, **thumb-federated-2.svg** – Thumbnails for "Federated Learning" articles
    * **thumb-society-1.svg**, **thumb-society-2.svg** – Thumbnails for "AI in Society" articles
    * **icon-consulting.svg** – Icon for **Strategic AI Consulting** service (e.g. briefcase or strategy symbol)
    * **icon-training.svg** – Icon for **AI Leadership Training** service (e.g. presentation or graduation cap symbol)
    * **icon-guidance.svg** – Icon for **Model Epistemology Guidance** service (e.g. owl or book symbol indicating knowledge guidance)

**Note:** All images are placeholders (e.g. simple SVG illustrations or shapes with text) to be created by Claude. Use SVG for crisp scaling. The color scheme (charcoal, navy, silver) should be reflected in these graphics (e.g. silver strokes on dark backgrounds for the logo). Ensure filenames match exactly, so the site can reference them.

## HTML Pages

Each HTML file should be a complete, semantic HTML5 page. Include the basic document structure: `<!DOCTYPE html>`, `<html lang="en">`, proper `<head>` with meta tags (UTF-8 charset, viewport for responsive design), links to the Google Fonts and the site’s CSS, and a `<script src="js/main.js" defer></script>` before the closing body tag. All pages should share a **consistent header and footer**:

* **Header:** A `<header>` section with the Epistemia logo (as an `<img src="images/logo-metallic.svg" alt="Epistemia Logo">`) on the left and a navigation menu on the right. The nav menu should list links to the main pages: Home, Articles, Services, About, Contact. Use a semantic `<nav>` element containing an unordered list of links. For mobile, include a “hamburger” menu icon (e.g. an SVG of three bars or a simple `<div class="menu-toggle">☰</div>`) that toggles the nav menu. The header should be styled to stick or stay visible on top and use the navy background with silver or white text for contrast.
* **Footer:** A simple `<footer>` with a small copyright notice or tagline (e.g. “© 2025 Epistemia AI Consultancy. All rights reserved.”) and possibly contact info or social media placeholders. Keep the footer minimal and in the same color scheme (perhaps charcoal background, silver text).

Include **HTML comments** in each page to label major sections (e.g. `<!-- Hero Section -->`, `<!-- Services Section -->`, `<!-- Contact Form -->`) to aid future maintenance.

Below are the specific content requirements and structure for each page:

### index.html – Home Page

This is the landing page that makes a strong first impression. It should contain:

* **Hero Section:** A full-width, eye-catching banner at the top of the page. Use the **header-bg.svg** as a background image or within a positioned element to provide a dark, tech-inspired backdrop. Overlay the company logo (using **logo-metallic.svg**) prominently. Include a tagline text that encapsulates Epistemia’s value proposition. For example, a tagline could be *“Empowering Intelligent Solutions through Epistemic AI”* (this is a placeholder – the actual tagline can be adjusted). The tagline should be in a large heading font (Lora) with a metallic silver color for an elegant contrast on the dark background. Center the hero content vertically and horizontally. The hero section should occupy the first viewport, with perhaps a subtle scroll indicator if desired.
* **Featured Articles Grid:** Below the hero, showcase a grid of **8 featured article tiles**. This section could have a heading like “Insights & Articles” or simply be the grid without a heading. Each **article tile** should be a clickable card linking to the corresponding **article.html** (for now they can all link to the same template page or distinct pages if content differed). Use a `<section>` with a CSS Grid or Flexbox layout to create a responsive grid:

  * On **desktop:** arrange tiles in a grid (e.g. 4 columns by 2 rows) for an elegant gallery look.
  * On **tablet:** perhaps 2 or 3 columns, and on **mobile:** stack in 1 column for readability.
  * Each tile includes a representative **thumbnail image** (one of the **thumb-\*.svg** files in **images/**), a short article title (use placeholder titles like “The Future of Enterprise AI” etc.), and possibly a category label or short excerpt. Keep the titles brief and use heading tags (e.g. `<h3>` or `<h4>` within the tile).
  * Style the tiles with a **hover effect**: for example, a slight lift or shadow and a smooth fade-in of an overlay or underline to signal interactivity. Use CSS transitions on hover for a polished feel (e.g. transition the transform or box-shadow over 0.3s). The hover animations should be **elegant and subtle** – aligning with a premium aesthetic (no jarring effects, just a smooth enhancement).
* Ensure that the overall home page design immediately conveys **professionalism**. The combination of the hero owl logo, the dark tech background, and the curated article thumbnails should establish Epistemia as a thought leader. Use semantic containers (e.g. a `<main>` wrapping the article grid) for clarity. The home page content should be concise enough that users can scroll and quickly see what Epistemia offers (articles and services via menu) without being overwhelmed.

### articles.html – Articles Listing Page

This page will list all articles (or blog posts) and allow users to filter them by category. Key elements to include:

* **Page Header:** A page title like `<h1>Articles</h1>` at the top (below the global header nav) to clearly indicate the content. Possibly include a brief intro sentence such as “Explore our latest insights and research across various AI topics.”
* **Category Filter Menu:** A horizontal set of filter buttons or tabs to filter the articles by topic. The categories (as provided) are: **Enterprise AI**, **AI Epistemology**, **Federated Learning**, **AI in Society**. Also include an **“All”** category to reset filters and show all articles. Implement this as a list of buttons or clickable elements (e.g. `<button class="filter-btn" data-category="enterprise">Enterprise AI</button>` and similarly for others). Use a container with an ID (e.g. `id="filter-menu"`) wrapping these buttons. Style the active/selected category button with a distinct highlight (e.g. underlined or different background) to indicate which filter is applied.
* **Articles List/Grid:** Below the filter, display all articles. This can be similar in style to the index page’s article tiles, but here include **all** articles grouped. Use a consistent card design: a thumbnail image, title, and possibly a one-line description or date (optional). Each article item should have a container element (for example, a `<div class="article-item enterprise">` if it’s in the Enterprise AI category, or multiple category classes if needed). The category name can be embedded as a CSS class (like “enterprise”, “epistemology”, etc.) and/or as a `data-category` attribute on each item. This will allow the JS to filter items by category easily.
* **Filtering Behavior:** By default, on page load, show all articles (or load with “All” active). When a user clicks a category button:

  * The JS should **filter** the article list to show only items of that category. This can be done by adding/removing a CSS class like `.show` or using inline styles, but using a class is cleaner: for instance, W3Schools’ example suggests toggling a “show” class on matching elements. We can give all article items a base class like `.article-item` and an additional class for their category. The filter function should:

    * If “All” is selected, remove any filtering classes to show everything.
    * If a specific category is selected, hide all articles not of that category (e.g. by removing or not adding the “show” class, or by setting `display: none` on non-matching items). Only matching category items get the class that makes them visible.
  * Use a smooth transition for hiding/showing if possible (e.g. CSS `opacity` transition with a fade-out/fade-in effect for a nicer UX).
  * Update the active state of the filter buttons (e.g. add an `.active` class to the clicked button and remove it from others) so users know which filter is in effect.
* Use a responsive layout for the article list as well. A grid with cards will work; ensure it reflows on smaller screens (likely a single column list on mobile).
* This page may become long if many articles, so consider adding some spacing or a simple pagination if needed (though not required for this static build – can just list all for now). Ensure images have alt text and the layout is accessible (e.g. if using buttons for filters, add appropriate ARIA labels or roles if needed).

### article.html – Single Article Page

This will be a template for a single blog article or insight piece. For now, use placeholder content (lorem ipsum text) and a generic title. Structure the page semantically to allow easy updates for actual articles:

* **Article Header:** Use an `<article>` element (semantic HTML5) or a `<main>` containing the article content. At the top, include a title in a large heading, e.g. `<h1>` for the article title. Use a meaningful placeholder like “How Federated Learning is Reshaping Data Privacy” (or any sample relevant title). Below the title, you might include meta-information such as author name and date (optional, can be placeholder like “By Epistemia Team – Jan 1, 2025”), styled subtly (small font, perhaps italic or a lighter color).
* **Hero/Image (Optional):** You could repurpose the **header-bg.svg** or an article-specific hero image here. If each article had a banner or featured image, it would be placed here. Since we have thumbnails but not dedicated large images, you can skip or use the thumbnail again in larger form. Alternatively, use a full-width banner with the **header-bg.svg** with the title overlaid (similar to the index hero style but smaller height). This is not strictly required, but it could add visual appeal. For now, a simple approach: show the article’s category thumbnail at the top or alongside the title.
* **Article Content:** Several paragraphs of placeholder text (lorem ipsum). Use realistic structure: e.g. an introduction paragraph, a subheading (`<h2>` or `<h3>`) and subsequent paragraphs. Include at least one example of each basic text element to demonstrate styling:

  * Headings (h2, h3),
  * Paragraphs of text,
  * Perhaps an unordered list or a blockquote as an example of formatted content.
    The content can be purely dummy text but formatted as if it were a real article. Ensure proper line-height and readability (Inter font for body makes it easy on eyes).
* **Sidebar/Author bio (Optional):** If desired, you can include a sidebar or bottom section for “About the Author” or “Related Articles”. However, since not explicitly requested, you can omit to keep it simple.
* Make sure this page uses the same header and footer as others. The article page should focus on text readability:

  * Use adequate margins and max-width for the text container (e.g. limit line length to around 65-75 characters per line for optimal reading).
  * Possibly implement a **“scroll to top”** button if the article is long (not required, but a nice touch).
* Add a comment at the top of the HTML source indicating this is a template for articles (for developers’ reference, e.g. `<!-- Single Article Template -->`).

### services.html – Services Page

This page describes Epistemia’s consulting services. It should be engaging and clearly outline the three core services, each with a brief description and an icon:

* **Intro Section:** Start with a title `<h1>Our Services</h1>` and a short introductory paragraph highlighting Epistemia’s consulting expertise. For example: “We provide strategic guidance and education to help organizations harness AI effectively. Our offerings span technical strategy, leadership empowerment, and deep insight into AI’s foundations.”
* **Services List:** Use a three-column layout (on desktop) to present the **three key services** side by side. Each service can be in a `<section>` or `<div>` with a consistent class (e.g. `.service`). The three services to include are:

  1. **Strategic AI Consulting** – *Use icon-consulting.svg.* A service focused on high-level AI strategy for enterprises. The description can mention formulating AI roadmaps, identifying impactful use-cases, and ensuring AI initiatives align with business goals. (Placeholder text about 2-3 sentences).
  2. **AI Leadership Training** – *Use icon-training.svg.* This covers training programs or workshops for executives and teams to become AI literate and lead AI-driven projects. Description might include building understanding of AI technologies, ethical considerations, and fostering a data-driven culture.
  3. **Model Epistemology Guidance** – *Use icon-guidance.svg.* This is a more specialized offering unique to Epistemia: advising on the *epistemology* of AI models (i.e. understanding what a model “knows” and how it reasons). The description can say Epistemia helps clients interpret and trust AI model outputs, implement best practices for model transparency, and ensure robust validation of AI systems. (A couple of sentences with placeholder jargon to simulate depth).
* **Layout and Styling:** Each service block should contain:

  * The icon (an \`<img src="images/icon-...svg" alt="... icon">) at top or beside the text.
  * A service name in a subheading `<h2>` or `<h3>`.
  * A brief descriptive paragraph.
    Consider wrapping icon and text in a container that allows for a neat layout (maybe icon to the left and text to the right on large screens, and stacked on small screens).
    Use consistent styling: perhaps the icons in a metallic silver tone on a circular charcoal background for visual consistency. The service titles could be in the brand’s deep navy or silver and use the Lora font to stand out.
* **Responsive behavior:** On wide screens, the three columns can sit in one row (using CSS grid or flex with equal widths). On smaller screens, they should stack vertically for readability (one service section after the other). Use media queries to adjust from a 3-column layout to 1-column layout gracefully.
* Optionally, include subtle hover or focus effects on each service box (e.g. a slight background tint or an enlarge effect on the icon) to indicate interactivity, though these might not be clickable links. If not clickable, the hover effect can simply provide a nice visual feedback.
* This page should convey professionalism and expertise. Use content spacing, and consider adding horizontal rules or separators between services on mobile to delineate them clearly.

### about.html – About Page

The About page provides background on Epistemia’s mission, vision, and founding story. Structure this page to tell a compelling story about the company:

* **Main Heading:** `<h1>About Epistemia</h1>` at the top. This makes it clear the purpose of the page.
* **Mission and Vision:** You can split this into two sections or combine into one flow. For example:

  * **Mission:** Use a subheading `<h2>Our Mission</h2>` followed by a few sentences (placeholder) about what Epistemia strives to achieve. For instance: “Our mission is to empower organizations with **knowledge-centric AI solutions**. Epistemia believes that only through a deep understanding (epistemology) of AI systems can enterprises truly harness their transformative power. We aim to bridge the gap between cutting-edge AI technology and pragmatic business strategy.” (This is sample text to set the tone.)
  * **Vision:** Another subheading `<h2>Our Vision</h2>` with a statement about the future Epistemia envisions. E.g.: “We envision a future where AI initiatives are guided not just by data and algorithms, but by wisdom and responsibility. Epistemia’s vision is an AI-empowered world where organizations make decisions with confidence in the integrity and insight of their AI systems, improving society and industry responsibly.” (Again placeholder content to be refined.)
* **Founding Story / Team:** This section can be introduced with a subheading like `<h2>Our Story</h2>` or “How Epistemia Began”. Provide a narrative (a short paragraph or two) about the company’s founding. For example: “Epistemia was founded in 2024 by a team of AI researchers and enterprise strategists who recognized a knowledge gap in how companies implemented AI. Frustrated with seeing AI projects fail due to misunderstanding of AI’s limitations and strengths, they set out to create a consultancy that emphasizes epistemic rigor – hence the name Epistemia. Since then, we have grown into a premier advisory firm guiding Fortune 500 companies and startups alike in crafting AI strategies rooted in understanding, transparency, and trust.” (This is fictional placeholder text to illustrate tone.)
* If the company has key values or principles, those could be listed as well (perhaps as a list with icons or simply bold keywords followed by descriptions).
* **Design:** Use imagery if possible to enliven the page:

  * You could reuse the **logo-metallic.svg** or **logo-simple.svg** as a small graphic next to the story or in the header.
  * If there were team photos or other graphics, those would go here; since we have none provided, we will keep it text-focused.
    Use the same typography styles: headings in Lora, body in Inter. Perhaps use quotes or italics for any motto.
* **Layout:** This page is mostly text, so ensure it has adequate padding and a comfortable max-width for readability. Break text into short paragraphs (as done above) for easier reading, and maybe use one of the brand colors for subheading text to add visual interest.
* The about page should instill trust and convey the ethos of Epistemia. It might be less visually dynamic than other pages, but the content should be well-structured and not feel like a wall of text (hence the use of subheadings, lists, etc., to create visual breathing room).

### contact.html – Contact Page

The contact page provides a way for prospective clients or partners to reach out. It will include a contact form with client-side validation via JavaScript. Key components:

* **Contact Intro:** A heading `<h1>Contact Us</h1>` and a brief encouraging text, e.g. “Have questions or want to discuss how Epistemia can assist with your AI strategy? We’d love to hear from you. Please fill out the form below and we’ll get in touch.” This sets context for the form.
* **Contact Form:** Use a semantic `<form>` element with appropriate fields:

  * **Name field:** `<input type="text" name="name" placeholder="Your Name" required>` (and corresponding `<label>`). Include `required` attributes so HTML5 can do basic required-field validation, but we will also validate via JS for older browsers or custom behavior.
  * **Email field:** `<input type="email" name="email" placeholder="Your Email" required>` (email type provides some built-in validation for correct email format). Still, we’ll double-validate with JS.
  * **Message field:** `<textarea name="message" placeholder="Your Message" required></textarea>` for the message. Set a reasonable rows/cols or use CSS to size it.
  * **Submit button:** `<button type="submit">Send Message</button>` or an `<input type="submit" value="Send">`. The button triggers the form submission.
* The form should be styled simply and clearly:

  * Use flex or grid to align labels and inputs if you include labels. Alternatively, placeholders can serve as hints and visually, each field can be one per line stacked on mobile.
  * Use the color palette (for example, input borders or focus states in silver or navy) and ensure text is legible (dark text on light backgrounds or vice versa depending on design; maybe use a white or very light gray input background on the dark page for contrast).
  * The submit button can have a hover state (like a slight brightness increase or inversion) to indicate it’s active.
* **JavaScript Validation:** Implement **client-side validation** so that the form does not submit if fields are empty or invalid:

  * On form submission (listen for the `submit` event), run a validation function. Check that Name, Email, and Message are not empty strings. If any are empty, prevent submission and display an error message (this could be done via an `alert()` or by showing a message on the page). For example, if name is empty: `alert("Name must be filled out"); return false;` in the handler. You can also highlight the empty field by adding a CSS class like `.error` to it.
  * For Email, ensure it contains an "@" and a dot, or use a regex for basic validation. The HTML5 `type="email"` will catch some, but to be thorough, the JS can double-check pattern or at least that `emailField.value.indexOf('@') > -1` etc. If invalid, you might do `alert("Please enter a valid email address.");`.
  * If all fields are filled (and email looks okay), you can either allow the form to submit to a dummy action or simply prevent default submission (since there’s no server processing in this static context) and show a success message. For example, on successful validation, you might display a JavaScript `alert("Thank you! Your message has been sent.")` or inject a thank-you note into the page. (Because we have no back-end, a full submission isn’t possible; giving feedback to user on success is user-friendly.)
  * All validation should happen in **js/main.js**; no external libraries. Keep it simple: a few if-statements to check field values. This improves user experience by catching errors client-side and is a common practice for basic form handling.
* Optionally, incorporate additional contact info on the page (address, email, phone, etc.) if available. Since not provided, you might add a placeholder line like “Or email us at **[info@epistemia.ai](mailto:info@epistemia.ai)**” below the form, just to simulate a real contact page.
* **Accessibility:** Ensure each input has an associated `<label for="...">` for accessibility, or use ARIA attributes if not using visible labels. This helps screen readers identify the fields. Also, the validation error messages should be accessible (e.g. using `alert` is one way, or injecting text that screen readers can pick up).

All pages (including Contact) should include the consistent header and footer so that the site has a unified navigation experience. The Contact page is likely the last in nav order and should be styled consistently (e.g. if the nav uses a highlight for the current page, apply it to Contact when on this page).

## CSS – `css/styles.css`

Create a single CSS file that defines the overall look and feel of the site. Key aspects to implement:

* **Color Palette:** Use the **charcoal, deep navy, and metallic silver** palette consistently:

  * *Charcoal* – a dark gray (almost black) for backgrounds or heavy text. For example, use charcoal (#2c2c2c or similar) for page background or header/footer background.
  * *Deep Navy* – a dark blue (near-black blue) for accent backgrounds or header/nav. For instance, the header bar could be deep navy (#0b1e2e as a sample) with silver text. Navy can also be used for buttons or links.
  * *Metallic Silver* – a bright gray/silver (#C0C0C0 or lighter for text) for text and highlights. Use silver for headings text on dark backgrounds, border strokes, or icons (like the owl logo and other SVGs). You can also incorporate a gradient or subtle shine effect for a “metallic” feel on the logo or icons if desired (but a flat color is acceptable given simplicity).
    Ensure sufficient contrast between text and background for readability. For example, white or light silver text on charcoal/navy backgrounds for headers, and maybe dark charcoal text on a lighter gray for body sections where background is lighter.
* **Typography:** Include Google Fonts for **Lora** (serif) and **Inter** (sans-serif). In the CSS or in the HTML head, import these fonts. For example, add in HTML: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lora:wght@700&display=swap" rel="stylesheet">` (adjust weights as needed). Then define in CSS:

  * `h1, h2, h3, .hero-tagline { font-family: 'Lora', serif; }` to use Lora for headings and any hero text or branding text.
  * `body, p, li, input, textarea, button { font-family: 'Inter', sans-serif; }` for body and UI elements.
    Use relative font sizes (rems or percents) to ensure scalability. Maybe base font-size \~16px (100%) for body. Headings can be larger (e.g. h1 \~ 2em, h2 \~ 1.5em, etc.) and the hero tagline particularly large.
* **Layout and Responsive Design:** Utilize **CSS Flexbox and Grid** for layout where appropriate. These modern layout modules automatically help responsiveness by adjusting item widths. In particular:

  * Use a CSS Grid or flex container for the **article tiles** grid and for the **services** section to achieve the multi-column arrangements. For example, `.article-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }` which will auto-fit columns nicely and wrap as needed.
  * Use Flexbox for the header layout (logo on left, nav links on right, and possibly for centering hero content vertically). Also use flex or grid for the contact form layout if aligning labels and inputs.
  * Implement **media queries** for different breakpoints. A mobile-first approach is recommended: start with styles for narrow screens (one-column layouts, stacked nav, etc.), then use `@media (min-width: Xpx)` to add multi-column layouts and larger spacing for tablets and desktops. Common breakpoints might be \~600px for small devices, \~900-1024px for tablets, etc. For example, you might hide the `.menu-toggle` by default and display the full nav menu; then at max-width 768px, show the hamburger and hide the full menu.
  * Ensure the site is usable on small screens: e.g., make the nav menu become a vertical dropdown when toggled on mobile (you can set it to `display: none` until toggled, or use `max-height: 0` trick and expand it).
* **Navigation Styles:** Style the nav bar with a horizontal list of links for desktop (li elements maybe displayed inline or with flex). Hide this list on mobile and show the hamburger icon. For the mobile menu (when opened), you can have the links appear as a vertical list (maybe absolutely positioned dropdown under the header, or a sidebar). Add a CSS class like `.nav-open` to the nav when the menu is toggled open to control its visibility. For smooth experience, consider adding a transition for the mobile menu (e.g. slide down).
* **Buttons and Links:** All buttons (like filter buttons, submit button, etc.) and links should have a consistent style. Possibly use silver or navy background with a slight hover change:

  * Example: `.btn { background: #36454F; color: #fff; padding: 0.5em 1em; border-radius: 4px; transition: background 0.3s ease; } .btn:hover { background: #4b5d68; }`. Ensure filter buttons have a distinct “active” style (e.g. `.btn.active { background: #556b78; }`).
  * Links in text (if any) could be silver or blue and underlined subtly. Remove default underlines and add a custom hover underline or color change for a cleaner look.
* **Article Tiles and Images:** Define classes for the article tiles (cards). For example:

  * `.article-item { background: #1e1e1e; color: #ddd; border-radius: 8px; overflow: hidden; text-align: left; transition: transform 0.3s, box-shadow 0.3s; }`
  * `.article-item img { width: 100%; display: block; }` (thumbnails full width of card)
  * `.article-item:hover { transform: translateY(-4px); box-shadow: 0 4px 20px rgba(0,0,0,0.2); }` – a gentle raise on hover to indicate clickability.
  * Inside each card, perhaps have a div for text content with some padding. The title can be styled with no margin or a small margin.
* **Services Section:** For `.service` class or similar container, perhaps give each a background or border. They might sit on a slightly different background section (maybe a subtle dark blue background behind all services to distinguish from the rest of page). The icons can be given a fixed size (like width: 50px) and maybe a margin-bottom. Align them center or left as needed. Possibly use `.service` as a flex container to align icon and text horizontally (icon on left, text on right) for desktop, and use a media query to stack vertically on mobile.
* **Forms:** Style the contact form inputs and textarea:

  * Use `display: block; width: 100%; max-width: 500px;` for inputs to make them easy to tap on mobile and not too narrow. Add padding inside inputs (e.g. 0.5em).
  * For a dark-themed site, you might style inputs with a dark background and light text OR use a light background with dark text to stand out – ensure consistency with the rest of the design. Placeholder text should be visible (you can style `::placeholder` in CSS to adjust its color for contrast).
  * Add a subtle border (1px solid silver or gray) and maybe a slight focus effect (e.g. on `input:focus, textarea:focus { outline: none; border-color: #aaa; box-shadow: 0 0 5px rgba(192,192,192,0.5); }`).
  * The submit button style should match the site’s button styles as described above. You can make it wider or centered. Possibly add `cursor: pointer;` to interactive elements.
* **Animations and Transitions:** Implement **subtle animations** for visual polish:

  * Use CSS transitions for hovers and state changes (as already noted for buttons, links, cards). These should be short (200-300ms range) for snappy feel.
  * Set up classes for the scroll reveal effect. For example, `.reveal` (or `.hidden`) class on elements that will be animated on scroll. Initially, give them `opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease-out, transform 0.6s ease-out;`. Then a `.reveal.active` (or a `.show`) class would set `opacity: 1; transform: none;`. This way, when JS adds the class on scroll, the element smoothly fades in and slides up into place. You can use this class on article cards, service items, or any content sections to have them animate as the user scrolls down.
  * If using IntersectionObserver as intended (see JS section), you might add the `.hidden` class to elements initially in HTML, then toggle to a `.show` class via JS.
* **Utility classes:** It can help to have some reusable utilities, e.g., `.text-center { text-align: center; }`, `.mt-lg { margin-top: 2rem; }` etc., but keep it minimal and semantic. Encourage writing clear class names for each section instead of heavily using utility classes, to keep the HTML readable.
* **Print styles:** Not strictly required, but you may add `@media print` rules to ensure if someone prints an article, it looks decent (optional).
* Comment the CSS generously. For example, start sections with comments: `/* Header styles */`, `/* Responsive: mobile menu */`, `/* Article grid */`, `/* Footer */`, etc. This helps future developers quickly find relevant style sections.

Overall, the CSS should enforce a **cohesive look** across all pages. The dark theme with silver accent should make the site look modern and high-end, appropriate for an AI consultancy. Test the CSS in multiple viewport sizes to ensure the layout doesn’t break and text remains legible.

## JavaScript – `js/main.js`

The JavaScript file will add interactive behavior to the site. Use plain JavaScript (no external libraries) and keep the code well-structured, perhaps grouping functionality into sections with comments (e.g. `// Mobile menu toggle`, `// Filter functionality`, etc.). The main features to implement are:

1. **Mobile Navigation Toggle:** Control the showing/hiding of the nav menu on small screens.

   * Select the hamburger menu toggle element (e.g. `document.querySelector('.menu-toggle')`) and the nav menu (perhaps the `<ul>` of links or a nav container).
   * Add a click event listener to the toggle. When triggered, it should add or remove a CSS class (for example, `.open` or `.nav-open`) on the nav menu (or on a parent element) that switches its visibility.
   * The CSS (as described) will handle whether the menu is displayed based on that class. For instance, `.nav-links { display: none; } .nav-links.open { display: block; }` or a transform transition for a sliding panel.
   * Also consider toggling an "active" state on the hamburger icon itself (like an X icon when open, if desired), though a simple approach is fine.
   * Ensure that if the menu is open and the user clicks the toggle again or selects a menu item, the menu closes.
   * This feature improves usability on mobile devices by giving a clear way to navigate. Test it by resizing the browser or using dev tools to simulate a phone.

2. **Article Category Filtering (on `articles.html`):** Implement the logic to filter the article list by category when a filter button is clicked.

   * Grab references to the filter buttons (e.g. `document.querySelectorAll('.filter-btn')`) and the article items container or items (e.g. all elements with class `.article-item`).
   * For each filter button, add a click event listener that reads the category to filter by. You can store the category in a `data-category` attribute on the button or derive it from button text.
   * When clicked:

     * If the category is "All", remove any filtering: show all article items (possibly by adding a class like 'show' to all, or by ensuring their container’s style is not `display:none`).
     * If it’s a specific category, loop through all article items and hide those that do not belong. This can be done by adding/removing a class. For example, you might add a class `.filtered-out` to non-matching items (with CSS `display: none` on `.filtered-out`), or directly set each item’s style `element.style.display = 'none'` for non-matches and `'block'` for matches. A class approach is often cleaner, e.g., toggling a `.show` class as W3Schools does:

       * Remove the “show” (visible) class from all items, then add it only to those whose category matches the selected one (if category filter is in the element’s class list or data attribute).
       * Alternatively, use `element.classList.toggle('hidden', condition)` to add a hidden class when not matching.
     * Update the filter buttons’ active state: remove `.active` from all buttons, then add to the clicked one. This gives visual feedback of selection.
   * The categories for each article should be known. If an article item has a class like `class="article-item enterprise"` for an Enterprise AI article, you can simply check `item.classList.contains(selectedCategory)` to decide if it should be shown. Another way is each item has `data-category="enterprise"` and you compare strings.
   * Aim for efficient DOM updates: hiding and showing elements by changing class is typically fine for a moderate number of items.
   * After filtering, consider adding a slight animation for the transition (CSS can handle a fade of items). Or simply have it instantaneous to keep it simple.
   * By implementing this, users can quickly drill down to the content category they care about without a page reload.

3. **Scroll-Triggered Reveal Animations:** Create a smooth reveal effect as sections or elements scroll into view, to add a dynamic touch to the site.

   * Identify which elements should have the reveal behavior. Possibly:

     * Article tiles on the home page (they can fade in with a delay or stagger).
     * Service items on the services page.
     * Maybe the mission/vision sections on the about page or the form on contact.
   * Add a CSS class (like `.hidden` as suggested in CSS) to those elements initially, which positions them slightly offset and invisible.
   * In `main.js`, use the **Intersection Observer API** or a simple scroll event to detect when these elements enter the viewport:

     * Using IntersectionObserver (modern and efficient): create a new observer with a callback that adds the reveal class. For example, `let observer = new IntersectionObserver(callback, options);` then target elements by `observer.observe(element)`. In the callback, for each `entry` that is `entry.isIntersecting === true`, add the class `.show` (or remove `.hidden`) to `entry.target`. This will trigger the CSS transition we set up, making the element fade/slide in.
     * If IntersectionObserver is too advanced to implement from scratch here, you could use a simpler approach: on window `scroll` event, loop through reveal elements and check their bounding client rect (if `getBoundingClientRect().top` is less than viewport height, reveal it). However, IntersectionObserver is cleaner and more performant, and well-supported in modern browsers.
   * Ensure to unobserve or stop after reveal if using IntersectionObserver, so the animation doesn’t re-trigger.
   * This feature will make the site feel interactive and modern as the user scrolls. Keep the animations subtle and only trigger once for each element to avoid distraction. The duration (as set in CSS, e.g. \~0.5s to 1s) should be enough to be noticeable but quick enough to not frustrate users.

4. **Form Validation (Contact Page):** Add client-side validation for the contact form fields:

   * Use `document.querySelector('form')` (or the form’s id if given) to get the form element. Attach an event listener for the `"submit"` event (e.g. `form.addEventListener('submit', function(e){ ... })`).
   * Inside the handler, do `e.preventDefault()` initially to stop the form from submitting (we will submit manually after validation or just show a message).
   * Fetch the values of the name, email, and message fields. For example, `let nameVal = document.querySelector('input[name=name]').value.trim();` (use appropriate selectors or `form.elements`).
   * Check each value:

     * If nameVal is empty (`""` after trim), use `alert("Please enter your name.")` or create a `<span class="error-msg">Name is required.</span>` near the field (you could insert this into the DOM). The simplest is an alert for this context. After alert, focus the name field (`document.querySelector('input[name=name]').focus()`) and return (stop function).
     * If emailVal is empty or doesn’t match a basic pattern: one simple check is `emailVal.includes('@') && emailVal.includes('.')`. For a bit more rigor, use a regex like `/^\S+@\S+\.\S+$/` to test the email. If it fails, alert "Please enter a valid email address."
     * If messageVal is empty, alert a similar message for message.
   * If any validation fails, do not proceed with submission (just return after showing error). The form remains on screen for correction.
   * If all are filled (and email looks valid), you can either:

     * For now, just show a success alert: e.g. `alert("Thank you, your message has been sent!");` and optionally clear the form fields (`form.reset()`).
     * Or you could simulate a form submission by actually calling `form.submit()` after validations (but since `action` might not be set to a real endpoint, better to just indicate success).
   * This is purely front-end check; since no server is involved, it’s about user feedback. This client-side validation improves UX by preventing empty submissions and guiding the user. It’s a common practice to ensure required fields are filled and properly formatted on the client side before any server processing.
   * Additionally, you could incorporate the HTML5 Constraint Validation API (like using the `required` attribute and checking `form.reportValidity()`), but a manual approach as above is straightforward and ensures older browsers or custom needs are handled.
   * Keep the JS code for this commented and clear, e.g. `// Validate contact form fields`.
   * (Optional) If you want to show inline errors instead of alerts: you could create small `<span class="error">This field is required</span>` elements next to inputs and show/hide them. Given the scope, alerts are simpler and effective.

5. **Miscellaneous:** There may be other small JS enhancements:

   * Smooth scrolling for anchor links (if any in the footer or navigation).
   * Scroll-to-top button functionality (if you added one for long pages).
   * But these are optional. The core requirements are the four items above.

Make sure the JS does not throw errors on pages where certain elements don’t exist. For example, the filtering script should ideally only run on `articles.html` (you can check `if(document.getElementById('filter-menu')) { ... }` to guard it). Similarly, form validation code should only target the form on contact page. This way, `main.js` can be included on every page without issues.

Test the interactive parts:

* Click each filter button, ensure articles show/hide appropriately.
* Resize window to mobile, click hamburger, ensure menu appears and links are clickable (and maybe hide menu after clicking a link).
* Scroll down pages like home or services and observe if elements animate in (the effect should be noticeable but not overdone).
* Try submitting the contact form both with empty fields and with valid data to see that validation works (with empty fields, you should get alerts and no page reload; with all fields, ideally an alert "sent" and fields cleared).

Keep the JavaScript code organized and relatively concise. Given we have no external dependencies, the file might be around 50-100 lines of straightforward code. Use comments to explain sections and any tricky parts, which will help future developers or Claude maintain the code easily.

## Images and Assets

All image files are to be generated as simple SVG illustrations that match the site’s theme. Provide clear descriptions/instructions for each so they can be created appropriately:

* **logo-metallic.svg:** The primary logo – an owl motif rendered in a **metallic silver style**. Since Epistemia’s brand centers on wisdom and knowledge, the owl is a fitting symbol. This SVG could be a stylized owl face or silhouette, perhaps incorporating geometric lines or circuit-like patterns to tie in AI. It should have a subtle gradient or reflection to appear “metallic.” The logo will be used on dark backgrounds (hero, header), so ensure it has either a slight outline or glow to not disappear on charcoal. (Keep it relatively simple for generation: maybe shapes for eyes, beak, and abstract feathers. Claude can generate a placeholder but distinctive owl emblem.)
* **logo-simple.svg:** A simplified variant of the owl logo, likely a flat icon version. This can be just the outline of an owl or a minimalistic representation (for example, just the owl’s eyes and outline in silver or white). Use this for the site’s favicon or places where a small logo is needed (like a sticky nav or footer). The style should be flat (no gradients) for clarity at small sizes.
* **header-bg.svg:** A background graphic for hero sections. This should be an **abstract dark-themed graphic** that evokes technology and AI. Possibilities: a network of lines and nodes (circuit board or neural network motif) in subtle gradients of navy and charcoal, with perhaps some silver or blue accents for nodes. It should seamlessly repeat or at least be wide enough to cover large screens. As a placeholder, an SVG with a dark gradient background and a few geometric patterns (like overlapping circles or hexagons, etc.) is sufficient. This adds visual interest behind the hero text/logo without distracting. Ensure file size is optimized (since SVG can scale, we want it efficient).
* **Article Thumbnails:** Eight SVG placeholders for article preview images. Each should conceptually relate to their category:

  * **thumb-enterprise-1.svg** and **thumb-enterprise-2.svg:** Images for "Enterprise AI". These could depict stylized office buildings with circuit lines, or a briefcase with AI brain icon, etc. Something that says “business + AI.” Keep them simple (maybe an icon of a building or chart with some circuitry overlay).
  * **thumb-epistemology-1.svg**, **thumb-epistemology-2.svg:** Images for "AI Epistemology". Epistemology is about knowledge, so perhaps an icon of a brain or owl, or a question mark with circuitry, symbolizing understanding AI. Could use an owl imagery here too or a book combined with AI symbol.
  * **thumb-federated-1.svg**, **thumb-federated-2.svg:** Images for "Federated Learning". Possibly icons showing multiple devices or databases connected by lines (to indicate distributed learning), or a shield with nodes (since federated often ties to privacy). Keep it abstract – maybe a network diagram icon.
  * **thumb-society-1.svg**, **thumb-society-2.svg:** Images for "AI in Society". Perhaps an icon of people or a globe with circuits, representing AI’s impact on society. Or a balance scale icon combined with digital elements indicating ethical balance.
    Each thumbnail should share a consistent style – maybe outline style icons or simple shapes – so the grid looks uniform. Use the brand colors (silver, navy) on a contrasting background (maybe use a lighter charcoal background rectangle so the icon stands out). They should be recognizable but not overly detailed, given they will appear small in the grid.
* **Service Icons:** Three SVG icons for the services:

  * **icon-consulting.svg:** An icon for Strategic AI Consulting. Ideas: a chess knight (strategy), a network graph, or a target/bullseye with an arrow (signifying strategy and goal). Could also be an icon of a lightbulb gear (idea + engineering).
  * **icon-training.svg:** An icon for AI Leadership Training. Perhaps a simple icon of a presentation or a teacher (a figure in front of a board), or a graduation cap combined with a cog (learning AI). Another idea: an upward arrow or bar chart indicating growth, to symbolize training improving capability.
  * **icon-guidance.svg:** An icon for Model Epistemology Guidance. This is niche, so an owl icon fits well here too (knowledge guidance). Alternatively, an icon of a magnifying glass over a network/brain (inspecting AI model), or scales (for balanced judgment). Since we already use owl in logo, maybe reuse a variant: e.g., an owl perched on books or an AI brain with an eye.
    All icons should be visually cohesive (same stroke width, style, and color scheme). Likely use metallic silver on a transparent or dark background for consistency. They should be simple enough to be understood at \~64-128px size.
* Each image file should be saved to the **images/** directory with the given name, so the HTML can reference them. Use `<img>` tags with appropriate `alt` text describing the image (e.g. alt="Epistemia Logo", alt="Icon for AI Consulting", etc.) for accessibility.
* Because the site uses an SVG logo and icons, it will look sharp on all screens (no pixelation). The use of consistent iconography reinforces branding and visual identity.

*There is no need for any external stock photos; the SVGs above serve as illustrative graphics.* The site will thus have a sleek, illustration-driven look, which often loads faster and aligns with a tech aesthetic.

If any SVG cannot be generated with a metallic effect automatically, a simpler flat version is acceptable as a placeholder (the main thing is to have the shape and concept in place; details can be refined later). The goal is to have all image references in place so the site doesn’t have broken links and can be visually evaluated as a complete design.

## Success Criteria

To ensure the final website meets expectations, it should fulfill the following:

* **Clean Structure & Semantics:** The codebase is organized logically with the described file structure. HTML uses semantic elements (header, nav, main, section, article, footer) making the content accessible and easy to understand for future edits. Comments in the files clearly mark different sections for maintainability. There is no unused code or extraneous libraries – just efficient, well-structured HTML/CSS/JS.
* **Responsive Layout:** The site must display elegantly on a variety of devices (from smartphones up to large desktops) without horizontal scrolls or layout breakage. The design employs a mobile-first approach and fluid grids that adapt to screen size. Navigation should be user-friendly on mobile (hamburger menu) and revert to a standard menu on desktop. Images and text should resize or reflow appropriately, maintaining readability and aesthetic integrity on all screens.
* **Elegant Interactivity:** Interactive features (menu toggle, filtering, scroll reveals, form validation) work smoothly and enhance user experience. Hover effects and animations are **subtle and professional**, not distracting – e.g., article cards lifting slightly on hover, buttons fading elegantly. The scroll-triggered animations make content appearance feel dynamic and modern, but are kept to a tasteful minimum to avoid performance issues. All scripts run without console errors; interactions feel snappy thanks to use of CSS transitions and optimized JS logic.
* **Visual Design & Branding:** The visual aesthetic aligns with a **premium AI consulting brand**. The dark charcoal and navy tones convey sophistication and technical depth, while the metallic silver accents add a high-end, futuristic feel. The typography pairing of Lora and Inter presents a blend of elegance and clarity – headings have a distinguished serif look, and body text is clean and easy to read. The owl logo and other imagery consistently reinforce the brand’s identity of wisdom in AI. Overall, the site should look polished and “expensive,” on par with top-tier consulting firm websites.
* **Content Presentation:** Although much content is placeholder, the structure shows clear hierarchy and focus. The home page immediately highlights value (tagline) and invites engagement (article teasers). The articles page allows knowledge exploration with intuitive filtering. The services page clearly communicates Epistemia’s offerings with succinct points and icons. The about page builds trust through mission and story. The contact page provides a straightforward way to reach out, with validation ensuring quality inquiries. This logical content flow and emphasis on key information will serve Epistemia’s goals of showcasing thought leadership and converting visitors to clients.
* **Performance and Compatibility:** Using only static assets (HTML/CSS/JS/SVG), the site should load quickly. CSS and JS are in external files for caching benefits. There are no heavy images or scripts to slow it down. The design should work across modern browsers (Chrome, Firefox, Safari, Edge) and degrade gracefully where needed. For example, if a user’s browser doesn’t support IntersectionObserver, the content still appears (maybe without animation, but still visible). The site’s reliance on standard web technologies ensures broad compatibility.

