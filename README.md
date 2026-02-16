# Responsive HTML5 Portfolio – Two‑Challenge Repository

This repository contains two challenges by Ruperth Nyagesoa. Each challenge demonstrates front‑end skills, from semantic HTML to responsive CSS.

---

## Challenge 1: Semantic HTML & Accessibility

**Objective:** Build a portfolio using only semantic HTML5, focusing on accessibility and SEO. No CSS or JavaScript—just structure and meaning.

**Files:**
- `index.html` – Semantic elements, ARIA landmarks, heading hierarchy, accessible form, skip link, meta tags, and Schema.org data
- `CONCEPT1.md` – Guide to semantic HTML and accessibility
- `semantic-choices.md` – Rationale for semantic markup choices

---

## Challenge 2: CSS Styling & Responsive Design

**Objective:** Style the HTML from Challenge 1 with modern CSS. Create a fully responsive, black‑and‑white theme (no images), maintaining accessibility and performance.

**Files:**
- `styles.css` – Custom properties, resets, mobile‑first design, Flexbox/Grid, transitions, utility classes
- `index.html` – Now linked to the CSS file
- `CONCEPT2.md` – Notes on CSS techniques and concepts
- `favicon.png` – Site favicon

**Design Notes:**
- Black‑and‑white palette highlights typography and layout
- Images removed for code clarity; CSS includes image container styles for future use
- Google Fonts (`Inter`, `Poppins`) loaded in HTML

---

## Repository Structure

```
responsive-html5-portfolio/
├── index.html         # Semantic HTML, linked to styles.css
├── styles.css         # Responsive CSS
├── favicon.png        # Favicon
├── CONCEPT1.md        # Semantic HTML guide
├── CONCEPT2.md        # CSS concepts
├── semantic-choices.md# Semantic markup rationale
├── README.md          # This file
└── LICENSE            # MIT license
```

---

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/ruperthjr/responsive-html5-portfolio.git
    cd responsive-html5-portfolio
    ```
2. Open `index.html` in your browser to view the styled portfolio:
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

---

## Validation & Testing

- **HTML:** W3C Validator – no errors
- **CSS:** W3C CSS Validator – no errors
- **Accessibility:** Lighthouse (Chrome DevTools) – score ≥95
- **Responsiveness:** Test at various viewport widths

---

## Key Learning Resources

- `CONCEPT1.md` – Semantic HTML, ARIA, accessibility, SEO
- `CONCEPT2.md` – CSS and advanced techniques
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