# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 16 personal website built with React 19, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture with minimal configuration.

## Development Commands

### Running the Development Server
```powershell
npm run dev
```
Opens development server at http://localhost:3000 with hot reloading.

### Building for Production
```powershell
npm run build
```
Creates an optimized production build in `.next/` directory.

### Running Production Build
```powershell
npm run start
```
Starts the production server (requires `npm run build` first).

### Linting
```powershell
npm run lint
```
Runs ESLint with Next.js config (includes Core Web Vitals and TypeScript rules).

### Type Checking
```powershell
npx tsc --noEmit
```
TypeScript type checking without emitting files (strict mode enabled).

## Architecture

### Tech Stack
- **Framework**: Next.js 16.1.0 with App Router
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4 (via PostCSS)
- **Language**: TypeScript 5 (strict mode)
- **Fonts**: Geist Sans and Geist Mono (optimized via `next/font`)

### Project Structure
```
app/                    # App Router directory (file-based routing)
├── layout.tsx          # Root layout with font configuration and metadata
├── page.tsx            # Homepage (route: /)
├── globals.css         # Global styles with Tailwind imports and CSS variables
└── favicon.ico         # Site favicon

public/                 # Static assets (served from root)
└── *.svg               # SVG assets (next.svg, vercel.svg, etc.)

*.config.*              # Configuration files (Next.js, TypeScript, ESLint, PostCSS)
```

### Key Configuration Details

**TypeScript**:
- Path alias `@/*` maps to project root
- Strict mode enabled
- Target: ES2017

**Tailwind CSS**:
- Inline theme configuration in `globals.css` using `@theme` directive
- CSS variables for colors: `--background`, `--foreground`
- Dark mode support via `prefers-color-scheme`
- Font variables: `--font-geist-sans`, `--font-geist-mono`

**ESLint**:
- Uses Next.js config with Core Web Vitals rules
- TypeScript support enabled
- Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

### Routing
This project uses Next.js App Router:
- Routes are defined by folder structure in `app/`
- `layout.tsx` provides the root HTML structure
- `page.tsx` files define route content
- Main entry point: `app/page.tsx` serves `/`

### Styling Approach
- Tailwind utility classes for all styling
- Global CSS variables in `globals.css` for theming
- Dark mode via media query, not class-based
- Inline Tailwind theme configuration using `@theme` directive

### Font Loading
Fonts are loaded via `next/font/google`:
- Geist Sans (variable: `--font-geist-sans`)
- Geist Mono (variable: `--font-geist-mono`)
- Both use Latin subset with CSS variable strategy

## Development Notes

### Adding New Routes
Create new directories in `app/` with a `page.tsx` file:
```
app/
└── about/
    └── page.tsx        # Creates /about route
```

### Tailwind CSS Variables
Color theme variables in `globals.css`:
- `--background`: Page background color
- `--foreground`: Text color
- Both adapt to dark mode automatically

### Image Optimization
Use `next/image` component for all images:
- Automatic optimization and lazy loading
- Static assets go in `public/` directory
- Reference with `/filename.ext` (e.g., `/next.svg`)
