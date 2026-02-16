# Responsive HTML5 Portfolio – Ruperth Nyagesoa

A semantic, accessible, and SEO-optimized portfolio website built with modern HTML5 best practices. This project showcases the work and skills of software engineer Ruperth Nyagesoa.

## Project Overview

This portfolio demonstrates advanced semantic HTML5 structure, accessibility, and SEO optimization. It serves as both a functional portfolio and a learning resource for web development fundamentals.

## Features

- Semantic HTML5 markup
- WCAG 2.1 AA accessibility compliance
- ARIA landmark roles
- SEO-optimized with meta tags and structured data
- Mobile-responsive design
- Accessible forms with validation
- Skip navigation for keyboard users
- Logical heading hierarchy

## Projects Featured

- **SAFARI TRADE** – Cross-border informal trade digitization platform (Flutter, FastAPI, Blockchain)
- **Personal Portfolio** – SvelteKit-based portfolio with dark mode (SvelteKit, TypeScript, Tailwind)
- **MeYouSafe** – Social impact platform for reporting sexual harassment (React, FastAPI, PostgreSQL)

## Structure

```
responsive-html5-portfolio/
├── index.html
├── README.md
├── CONCEPT.md
├── validation/
│   ├── w3c-validation.png
│   └── accessibility-report.png
├── images/
│   ├── profile.jpg
│   ├── safari-trade.jpg
│   ├── portfolio.jpg
│   └── meyousafe.jpg
└── favicon.png
```

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/ruperthjr/responsive-html5-portfolio.git
    cd responsive-html5-portfolio
    ```
2. Open `index.html` in your browser:
    ```bash
    # On macOS
    open index.html
    # Or use a local server
    python -m http.server 8000
    ```
    Visit [http://localhost:8000](http://localhost:8000)

## Validation

### W3C HTML Validation

- Use [W3C Validator](https://validator.w3.org/)
- Expected: No errors, document validates as HTML5

### Accessibility Testing

- **WAVE**: [https://wave.webaim.org/](https://wave.webaim.org/)
- **Lighthouse**: Chrome DevTools > Lighthouse tab > Run accessibility audit
- Expected score: 95+

## Semantic Elements Used

- `<header>` – Page and section headers
- `<nav>` – Primary navigation
- `<main>` – Main content
- `<section>` – Thematic sections
- `<article>` – Project cards
- `<aside>` – Experience highlights
- `<footer>` – Page footer
- `<figure>`, `<figcaption>` – Images with captions
- `<time>` – Dates/timestamps
- `<address>` – Contact info

## Accessibility Features

- Skip navigation link
- ARIA landmarks and labels
- Keyboard navigation
- Screen reader optimization
- Semantic forms and error associations
- Focus management
- Alt text for images
- Proper heading hierarchy

## SEO Implementation

- Descriptive title tags
- Meta descriptions
- Open Graph and Twitter Card tags
- Schema.org structured data
- Semantic headings
- Internal linking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Learning Resources

See `CONCEPT.md` for details on:

- Semantic HTML principles
- ARIA implementation
- Accessibility best practices
- Form accessibility
- SEO fundamentals

## Next Steps

- CSS styling (Challenge 2)
- JavaScript interactivity (Challenge 3)
- Backend integration
- Content management system

## License

MIT License – free for learning and projects.

## Author

Ruperth Nyagesoa – Software Engineer  
GitHub: [@ruperthjr](https://github.com/ruperthjr)  
LinkedIn: [ruperth-nyagesoa](https://linkedin.com/in/ruperth-nyagesoa)  
Portfolio: [ruperth.vercel.app](https://ruperth.vercel.app)

## Acknowledgments

- W3C for HTML5 and ARIA specs
- WebAIM for accessibility guidelines
- MDN Web Docs for documentation
