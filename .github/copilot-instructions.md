# Copilot Instructions - Workfolio Portfolio

## Project Overview
**Workfolio** is a React-based portfolio website showcasing Shannon Escoriaza's multidisciplinary work across web development, graphic design, VR development, and UX/UI design. Built with Create React App, styled with Tailwind CSS, and featuring interactive animations using Lucide React icons.

**Key Tech Stack:**
- React 19.2.3 (functional components, hooks)
- Tailwind CSS 3.4 (utility-first styling)
- Lucide React icons (SVG-based icon system)
- Create React App (CRA) bundler
- No external component library or routing—single-page application (SPA)

## Architecture & Data Flow

### Single Page Application Pattern
The entire app is a single React component (`App.js`) with 4 main sections managed via `activeSection` state:
- `home`: Hero section with call-to-action buttons
- `services`: 4 service cards (Web Dev, Graphic Design, VR Development, UX/UI)
- `portfolio`: Project grid with category filtering
- `contact`: Contact form and social links

**Navigation Flow:** Section buttons in fixed navbar update `activeSection` state → conditional rendering shows/hides sections.

### Data Structure: Projects & Services
Both stored as JS arrays at component top level:
- `services`: Contains icon, title, description, gradient color
- `projects`: Contains title, category, description, image path, external link, tech stack array
- Categories dynamically extracted from projects: `categories = ['All', ...new Set(projects.map(p => p.category))]`

**Pattern:** Data is static and component-scoped. When adding new projects/services, update the array in [App.js](src/App.js) and ensure image paths exist in `public/images/{category}/`.

### Filtering Logic
Portfolio section uses `activeCategory` state + `.filter()` on projects array. "All" category shows unfiltered projects.

## Critical Styling Patterns

### Tailwind + Custom CSS
- Base styling: Tailwind utility classes in `className` attributes
- Advanced animations: Custom `@keyframes` defined in inline `<style>` tag (see `float`, `glow`, `slideIn`)
- **Important:** Custom keyframes must stay in the `<style>` block inside JSX; they're not extractable to separate CSS files

### Key Classes to Know
- Gradient text: `bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent`
- Card hover effects: `group` wrapper + `group-hover:*` modifiers for child element transitions
- Backdrop blur nav: `bg-black/40 backdrop-blur-xl`
- Glassmorphism borders: `border-*-400/20` for semi-transparent borders

### Color Scheme
Primary: Cyan, Purple, Pink (neon on black). Accent: Gray-800/900 for cards.

## Project-Specific Conventions

### Image Organization
Images stored in `public/images/{category}/` directories where category matches project category exactly. Each project references images via relative paths: `/images/aztro/image.png`. **Critical:** Images must exist; broken paths will show broken image indicators.

### Event Handling Patterns
- Scroll tracking: `useEffect` with `window.addEventListener('scroll', handleScroll)` updating `scrollY` state
- Mouse tracking: Similar pattern for `mousemove`, enabling parallax effects
- Cleanup: Always remove listeners in `useEffect` return function
- Button clicks: Use `onClick={() => setActiveSection('section-name')}` for navigation

### Responsive Design
Uses Tailwind responsive prefixes (`md:grid-cols-2`, etc.). Mobile-first approach. Test breakpoints at 768px (tablet) and 1024px (desktop).

## Build & Development Workflow

**Available Scripts:**
- `npm start`: Starts dev server at http://localhost:3000 with hot reload
- `npm run build`: Outputs optimized build to `/build` directory; ready for deployment
- `npm test`: Runs Jest tests in watch mode (test files: `*.test.js`)
- `npm run eject`: One-way operation—don't use unless customizing webpack config

**No Preprocessing:** Tailwind handled by PostCSS (configured in [postcss.config.js](postcss.config.js)). No SCSS or CSS-in-JS beyond inline styles.

## Common Development Tasks

### Adding a New Project
1. Add object to `projects` array in [App.js](src/App.js) with: `title`, `category`, `description`, `image` path, `link` URL, `tech` array
2. Create `public/images/{category}/` folder if new category
3. Add image file to that folder
4. Category is automatically extracted and added to filter buttons

### Styling a Component
- Use Tailwind classes first (utility composability)
- For complex animations, add `@keyframes` to the inline `<style>` block
- Avoid creating external CSS files—maintain single-file component structure
- Test gradient overlays with `opacity-{0-100}` to avoid visual clashes

### Modifying Icons
Icons imported from lucide-react: `import { IconName } from 'lucide-react'`. Available icons list: https://lucide.dev. Sizes controlled via `className="w-X h-X"` (e.g., `w-10 h-10`).

### Parallax/Motion Effects
- Mouse-driven: Use `mousePosition` state with inline transform styles: `transform: translate(${x * 0.02}px, ...)`
- Scroll-driven: Use `scrollY` state, apply via `transform: translateY(${scrollY * 0.5}px)`
- Animation delays: Use inline `style` with `animationDelay: ${index * 0.1}s` for staggered effects

## Testing & Debugging
- Test framework: Jest + React Testing Library
- Test file location: `src/*.test.js`
- Run tests: `npm test` (watch mode)
- Debug in browser: Chrome DevTools, check React tab for component tree
- Performance: Build optimization handled by CRA; focus on reducing re-renders by memoizing expensive operations or external API calls

## External Dependencies & Integrations
- No API integrations (static portfolio)
- Social links hardcoded: GitHub, LinkedIn, email
- Lucide React provides all icons—don't add other icon libraries
- Tailwind provides all utility styling—don't add CSS frameworks
- Image loading is client-side only; consider using `loading="lazy"` on future optimizations

## Deployment Notes
- Output: `build/` folder generated via `npm run build`
- CRA generates optimized, minified bundles with content hashing
- Recommended hosts: Vercel (native CRA support), Netlify, GitHub Pages
- Environment: No `.env` variables needed currently
