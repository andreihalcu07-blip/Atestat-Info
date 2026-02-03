# 📋 ARQUITECTURA PROIECTULUI - Console Notebook

## STRUCTURA FOLDERELOR

```
Atestat Info/
├── src/
│   ├── html/
│   │   ├── pages/
│   │   │   ├── index.html           # Pagina de start
│   │   │   ├── physics.html         # Fizica consolelor
│   │   │   ├── computer-science.html # Informatica
│   │   │   ├── evolution.html       # Evoluția consolelor
│   │   │   └── comparison.html      # Comparație PS5 vs Xbox vs Switch
│   │   ├── components/
│   │   │   ├── navbar.html          # [OPȚIONAL] Componență navbar reutilizabilă
│   │   │   ├── footer.html          # [OPȚIONAL] Componență footer
│   │   │   └── card.html            # [OPȚIONAL] Template card
│   │   └── layouts/
│   │       └── base.html            # [OPȚIONAL] Template HTML de bază
│   │
│   ├── css/
│   │   ├── main.css                 # Entry point CSS - importă toate modulele
│   │   ├── base/
│   │   │   ├── variables.css        # CSS variables, culori, spacing
│   │   │   ├── reset.css            # Normalizare browser, scrollbar
│   │   │   └── typography.css       # Headings, paragraphs, links
│   │   ├── layout/
│   │   │   ├── container.css        # Container, grid
│   │   │   ├── navbar.css           # Navbar styles
│   │   │   ├── footer.css           # Footer styles
│   │   │   ├── hero.css             # Hero section
│   │   │   └── grid.css             # Grid system, spacing utilities
│   │   ├── components/
│   │   │   ├── buttons.css          # Buton styles (primary, secondary, outline)
│   │   │   ├── cards.css            # Card component
│   │   │   ├── forms.css            # Input, select, textarea, calculator
│   │   │   └── sections.css         # Section intro, comparison, formula
│   │   ├── pages/
│   │   │   ├── home.css             # [OPȚIONAL] Home-specific styles
│   │   │   ├── physics.css          # [OPȚIONAL] Physics page styles
│   │   │   └── evolution.css        # [OPȚIONAL] Evolution page styles
│   │   └── utilities/
│   │       ├── animations.css       # Keyframes și animation classes
│   │       ├── responsive.css       # Media queries, breakpoints
│   │       └── helpers.css          # Text, display, opacity utilities
│   │
│   ├── js/
│   │   ├── main.js                  # Entry point JavaScript - App class
│   │   ├── utils/
│   │   │   ├── math.js              # Funcții matematice pentru calculatoare
│   │   │   ├── dom.js               # DOM utilities (select, addClass, etc)
│   │   │   └── validation.js        # [OPȚIONAL] Validare input
│   │   ├── modules/
│   │   │   ├── navigation.js        # Navigation, smooth scroll
│   │   │   ├── animations.js        # Intersection observer, scroll animations
│   │   │   ├── calculator.js        # Toți calculatoarele (wavelength, FLOPS, etc)
│   │   │   ├── tabs.js              # Tab switching logic
│   │   │   └── interactive-demos.js # [OPȚIONAL] Interactive demonstrations
│   │   └── pages/
│   │       ├── physics.js           # [OPȚIONAL] Physics page logic
│   │       ├── comparison.js        # [OPȚIONAL] Comparison page logic
│   │       └── evolution.js         # [OPȚIONAL] Evolution page logic
│   │
│   └── assets/
│       ├── images/
│       │   ├── consoles/            # PS5, Xbox, Switch images
│       │   ├── hardware/            # CPU, GPU, cooling system images
│       │   ├── graphics/            # Ray tracing, rendering images
│       │   └── misc/                # Alte imagini
│       ├── fonts/                   # [OPȚIONAL] Custom fonts
│       ├── icons/                   # [OPȚIONAL] SVG icons
│       └── videos/                  # [OPȚIONAL] Video content
│
├── docs/
│   ├── ARCHITECTURE.md              # Această documentație
│   ├── NAMING-CONVENTIONS.md        # [OPȚIONAL] Convenții de naming
│   ├── CONTRIBUTING.md              # [OPȚIONAL] Ghid contribuție
│   └── SETUP.md                     # [OPȚIONAL] Setup instrucțiuni
│
├── index.html                       # [REDIRECT] Pointer la src/html/pages/index.html
├── .gitignore                       # Git ignore rules
└── README.md                        # [OPȚIONAL] Project readme
```

---

## ROLUL FIECĂRUI FOLDER

### `src/html/`
- **Destinație**: Stochează toat HTML-ul structurat și semantic
- **Principiu**: HTML = DOAR structură și semantică, ZERO stiluri inline, ZERO JavaScript inline
- **Fișiere**: Pagini principale + componente reutilizabile
- **Beneficii**: Ușor de refactoriza, separation of concerns

### `src/css/`
- **Destinație**: Toat stilurile CSS, organizate pe module
- **Principiu**: CSS modular, refolosibil, DRY (Don't Repeat Yourself)
- **Structură**:
  - `base/` = Reset, typography, CSS variables
  - `layout/` = Navbar, footer, hero, grid
  - `components/` = Cards, buttons, forms, sections
  - `pages/` = Page-specific overrides (dacă sunt necesare)
  - `utilities/` = Animations, responsive, helpers
- **Beneficii**: Ușor de găsit stiluri, neconflict, scaling ușor

### `src/js/`
- **Destinație**: Tot JavaScript-ul, organizat pe funcționalități
- **Principiu**: JS modular, fără globals, funcții pure unde posibil
- **Structură**:
  - `main.js` = App class, orchestration
  - `utils/` = Funcții reutilizabile (math, DOM, validation)
  - `modules/` = Feature-specific (navigation, animations, calculator, tabs)
  - `pages/` = Page-specific logic
- **Beneficii**: DRY, testabil, refolosibil, ușor de înțeles

### `src/assets/`
- **Destinație**: Imagini, fonturi, ikoane, video
- **Organizare**: După tip și pagină
- **Beneficii**: O singură sursă adevărului pentru media

### `docs/`
- **Destinație**: Documentație proiect
- **Conținut**: Arhitectură, convenții, setup, contributing guide
- **Beneficii**: Onboarding rapid, înțelegere proiect

---

## CONVENȚII DE NAMING

### CSS Classes
```css
/* Blocks */
.card { ... }
.navbar { ... }
.section { ... }

/* Modifiers */
.card.physics-card { ... }
.btn.primary { ... }
.section.bg-alt { ... }

/* Utilities */
.text-center { ... }
.mb-lg { ... }
.flex { ... }
```

### JavaScript Functions
```javascript
// camelCase pentru funcții
calculateWavelength()
setupNavigation()
renderMath()

// UPPER_CASE pentru constante
const MAX_RETRIES = 3;

// PascalCase pentru classes
class App { ... }
class MathUtils { ... }
```

### HTML ID și Data Attributes
```html
<div id="hero-section">...</div>
<button class="tab-btn" data-tab="hardware">Hardware</button>
```

---

## PRINCIPII DE DESIGN

### 1. **Separation of Concerns**
- HTML = structură
- CSS = stil
- JS = logică și interacțiuni
- ❌ Fără inline styles, fără `<style>` tags în HTML, fără `onclick` handlers

### 2. **DRY (Don't Repeat Yourself)**
- Refolosire CSS prin clases și utilities
- Refolosire JavaScript prin modules și utils
- Refolosire HTML prin componente

### 3. **Semantic HTML5**
```html
<!-- ✅ BUN -->
<nav class="navbar">...</nav>
<section>...</section>
<footer>...</footer>
<article>...</article>

<!-- ❌ RĂU -->
<div id="nav">...</div>
<div class="wrapper-section">...</div>
```

### 4. **BEM-like Naming (Flexible)**
```css
/* Block.Element--Modifier */
.card { ... }              /* Block */
.card h3 { ... }           /* Element */
.card.physics-card { ... } /* Modifier */
```

### 5. **Mobile-First Responsive**
```css
/* Base styles = mobile */
.card { padding: 1rem; }

/* Tablet */
@media (min-width: 768px) {
    .card { padding: 2rem; }
}
```

---

## FLUXUL DE LUCRU

### Adăugare Pagină Nouă
1. Crează `src/html/pages/new-page.html`
2. (Opțional) Crează `src/css/pages/new-page.css`
3. (Opțional) Crează `src/js/pages/new-page.js`
4. Înțelege că base styles sunt importate din `main.css`
5. Importează page-specific styles în `main.css`
6. Importează page-specific JS în `main.js` sau în HTML `<script>`

### Adăugare Componentă CSS Nouă
1. Crează fișier în `src/css/components/component-name.css`
2. Importează în `src/css/main.css`
3. Utilizează în HTML cu classes

### Adăugare Funcție JavaScript Nouă
1. Adaugă în `utils/` sau `modules/` după funcționalitate
2. Export și import în `main.js`
3. Apelează în modulele relevante

---

## LINK-URI INTERNE (PATH RESOLUTION)

**Din `src/html/pages/page.html` la CSS:**
```html
<!-- ✅ CORECT - Merge în sus 2 niveluri din pages/, apoi în css/ -->
<link rel="stylesheet" href="../../src/css/main.css">
```

**Din `src/html/pages/page.html` la JS:**
```html
<!-- ✅ CORECT - Merge în sus 2 niveluri din pages/, apoi în js/ -->
<script type="module" src="../../src/js/main.js"></script>
```

**Din `src/js/main.js` la alte module:**
```javascript
// ✅ CORECT - Import relativ
import { NavigationModule } from './modules/navigation.js';
```

---

## BEST PRACTICES

### CSS
✅ Folosește CSS variables din `base/variables.css`
✅ Mobile-first responsive design
✅ Grupează stiluri semantice
❌ Nu folosii `!important` (redă fără sens)
❌ Nu crea clase cu multiple responsabilități

### JavaScript
✅ Modularizare în utils + modules
✅ Exportă/importă funcții
✅ Comentarii JSDoc
✅ Evită globals
❌ Nu modifica DOM fără DOMUtils
❌ Nu înglomera JS în HTML

### HTML
✅ Semantic HTML5
✅ Accessibility (alt text, aria-labels)
✅ Meta tags (viewport, description)
❌ Fără inline styles
❌ Fără onclick handlers
❌ Fără inline JavaScript

---

## SCALE-UP ȘI EXTENSII

### Dacă adaugi mai mult conținut:
1. Crenează foldere subpage-uri în `src/html/pages/`
2. Crenează CSS modules în `src/css/components/` și `src/css/pages/`
3. Crenează JS modules în `src/js/modules/` pe funcționalitate
4. Importează totul în `main.css` și `main.js`

### Dacă adaugi framework (ex: Webpack, Vite):
1. Config va gestiona imports automatice
2. Path resolution devine mai inteligent
3. Tree shaking va elimina cod nefolosit

### Dacă transformi în SSR (Node.js):
1. HTML templates → `.hbs`, `.jsx`, `.ejs`
2. Mismo CSS şi JS organization se păstrează
3. Backend rutează către pagini

---

## BUNE PRACTICI DOCUMENTARE

### Comentarii CSS
```css
/**
 * Card Component
 * Reusable card for displaying content
 */
.card { ... }
```

### Comentarii JavaScript
```javascript
/**
 * Calculate wavelength
 * λ = c / f
 * @param {number} frequencyMHz - Frequency in MHz
 * @returns {number} Wavelength in km
 */
export function calculateWavelength(frequencyMHz) { ... }
```

### Comentarii HTML
```html
<!-- Main navigation -->
<nav class="navbar">...</nav>
```

---

## SUMMARY

Acest proiect este structurat pentru:
- **Scalabilitate** - Ușor de adăugat pagini și funcții
- **Mentenabilitate** - Code organization logic, DRY principles
- **Reusability** - Components, utilities, modules refolosibile
- **Accessibility** - Semantic HTML, contrast, focus states
- **Performance** - Optimizat CSS, modular JS
- **Colaborare** - Clar structured, ușor de înțeles pentru alții

👉 **Poți adăuga conținut nou fără să-ți fii teamă să strici ceva.**
