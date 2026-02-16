# Responsive HTML5 Portfolio – Three‑Challenge Repository

This repository showcases three progressive front-end challenges by Ruperth Nyagesoa, each building on core web development skills: semantic HTML, responsive CSS, and accessible JavaScript interactivity.

---

## Challenge 1: Semantic HTML & Accessibility

**Goal:** Create a portfolio using only semantic HTML5, emphasizing accessibility and SEO. No CSS or JavaScript—just meaningful structure.

**Files:**
- `index.html` – Semantic elements, ARIA landmarks, heading hierarchy, accessible form, skip link, meta tags, Schema.org data
- `CONCEPT1.md` – Guide to semantic HTML and accessibility
- `semantic-choices.md` – Rationale for semantic markup choices

---

## Challenge 2: CSS Styling & Responsive Design

**Goal:** Style the HTML from Challenge 1 with modern CSS. Deliver a fully responsive, black-and-white theme (no images), while maintaining accessibility and performance.

**Files:**
- `styles.css` – Custom properties, resets, mobile-first design, Flexbox/Grid, transitions, utility classes
- `index.html` – Now linked to the CSS file
- `CONCEPT2.md` – Notes on CSS techniques and concepts
- `favicon.png` – Site favicon

**Design Notes:**
- Black-and-white palette highlights typography and layout
- Images omitted for clarity; CSS includes image container styles for future use
- Google Fonts (`Inter`, `Poppins`) loaded in HTML

---

## Challenge 3: JavaScript Interactivity

**Goal:** Add dynamic, accessible JavaScript enhancements to the portfolio. Improve user experience without sacrificing performance or accessibility.

**Features:**
- Mobile navigation toggle with keyboard and ARIA support
- Smooth scrolling for anchor links with header offset
- Scroll spy to highlight the active navigation link
- Client-side form validation with real-time feedback
- Scroll-to-top button that appears after scrolling

**Files:**
- `script.js` – All JavaScript code (see below for full listing)
- `index.html` – Now linked to the script
- `CONCEPT3.md` – In-depth explanation of JavaScript concepts used

**JavaScript Highlights:**
- Event delegation and efficient event handling
- Focus management for accessibility
- Debounced scroll events with `requestAnimationFrame`
- Async form submission simulation
- Dynamic creation of UI elements (scroll-to-top button)

---

## Repository Structure

```
responsive-html5-portfolio/
├── index.html           # Semantic HTML, linked to styles.css and script.js
├── styles.css           # Responsive CSS
├── script.js            # Interactive JavaScript
├── favicon.png          # Favicon
├── CONCEPT1.md          # Semantic HTML guide
├── CONCEPT2.md          # CSS concepts
├── CONCEPT3.md          # JavaScript concepts
├── semantic-choices.md  # Semantic markup rationale
├── README.md            # This file
└── LICENSE              # MIT license
```

---

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/ruperthjr/responsive-html5-portfolio.git
    cd responsive-html5-portfolio
    ```
2. Open `index.html` in your browser to view the fully styled and interactive portfolio:
    - On macOS:
      ```bash
      open index.html
      ```
    - Or start a local server:
      ```bash
      python -m http.server 8000
      ```
      Visit [http://localhost:8000](http://localhost:8000)

3. To view the unstyled HTML (Challenge 1), remove the `<link rel="stylesheet" href="styles.css">` line from `<head>`.  
   To disable JavaScript, remove the `<script src="script.js"></script>` line.

---

## Validation & Testing

- **HTML:** W3C Validator – no errors
- **CSS:** W3C CSS Validator – no errors
- **JavaScript:** ESLint – clean, no errors
- **Accessibility:** Lighthouse (Chrome DevTools) – score ≥95
- **Responsiveness:** Test at various viewport widths
- **Browser support:** Modern browsers (Chrome, Firefox, Safari, Edge)

---

## Key Learning Resources

- `CONCEPT1.md` – Semantic HTML, ARIA, accessibility, SEO
- `CONCEPT2.md` – CSS and advanced techniques
- `CONCEPT3.md` – JavaScript interactivity, DOM manipulation, event handling, accessibility in JS
- `semantic-choices.md` – HTML element choices explained

---

## License

MIT License – free for learning and projects.

---

## Author

Ruperth Nyagesoa – Software Engineer  
GitHub: [@ruperthjr](https://github.com/ruperthjr)  
LinkedIn: [ruperth-nyagesoa](https://linkedin.com/in/ruperth-nyagesoa)  
Portfolio: [ruperth.vercel.app](https://ruperth.vercel.app)