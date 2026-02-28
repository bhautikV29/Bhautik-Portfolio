# Bhautik Vekariya – Personal Portfolio

A modern, high-end personal portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**. Content is driven from your resume and is fully editable via a single data file.

## Features

- **Modern UI**: Glassmorphism, gradients, smooth animations, dark mode by default with toggle
- **Responsive**: Mobile-first, works on all screen sizes
- **Sections**: Hero, About, Skills, Projects, Video Resume, Experience, Education, Contact, Footer
- **Dynamic content**: Edit `src/data/portfolioData.js` to update name, skills, projects, experience, education, and contact
- **SEO-friendly**: Semantic HTML, meta description, theme-color
- **Performance**: Vite build, optimized assets

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Icons
- React Scroll

## Project Structure

```
src/
  components/     # Reusable UI (Button, Navbar, SectionTitle)
  sections/       # Page sections (Hero, About, Skills, etc.)
  data/           # portfolioData.js – edit this for your content
  context/        # ThemeContext (dark/light toggle)
  App.jsx
  main.jsx
  index.css
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Install and run

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

1. **Content**  
   Edit `src/data/portfolioData.js`:
   - `personal`: name, title, tagline, email, phone, social links, resume PDF path, video resume URL
   - `about`: summary and highlights
   - `skills`: frontend, backend, tools arrays
   - `projects`: title, client, role, description, tech, image, live/github URLs
   - `experience`: company, role, period, points
   - `education`: institution, degree, field, period
   - `certifications`: name, issuer, year, url

2. **Resume PDF**  
   Place your resume file in `public/resume.pdf` and set `resumePdfUrl: '/resume.pdf'` in `portfolioData.js` (or another path under `public/`).

3. **Video resume**  
   Set `videoResumeUrl` in `portfolioData.js` to a YouTube or Vimeo embed URL (e.g. `https://www.youtube.com/watch?v=...`).

4. **Social links**  
   Update the `url` values in `personal.social` in `portfolioData.js` with your GitHub, LinkedIn, Twitter, etc.

## Contact form

The contact form is wired for UI only. To make it work:

- Use [Formspree](https://formspree.io) and set the form `action` to your Formspree endpoint, or
- Use Netlify Forms / Vercel serverless, or
- Point the form to your own backend API.

## License

MIT. Use and modify as you like.
