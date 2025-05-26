# Technical Context

## Technology Stack
- **Framework**: Next.js 15.3.2 with App Router
- **Runtime**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Development**: Turbopack for fast dev server

## Project Structure
```
portfolio/
├── src/app/
│   ├── components/ui/
│   ├── page.tsx (main portfolio page)
│   ├── layout.tsx
│   └── globals.css
├── public/ (static assets)
└── package.json
```

## Development Environment
- **Node.js**: Latest LTS version
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **TypeScript**: Strict mode enabled

## Design System Requirements
### Color Palette
- **Primary Background**: Navy blue (exact shade to be determined)
- **Text Color**: Light golden serif (#f5cda1 or similar)
- **Accent Colors**: Complementary to navy/gold theme

### Typography
- **Primary Font**: Serif typeface for elegance
- **Chinese Support**: Noto Serif TC or similar for Chinese characters (阮 非 玄)
- **Hierarchy**: Clear distinction between headings, body text, and accent text

### Responsive Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## Performance Considerations
- **Image Optimization**: Next.js Image component for portraits and company logos
- **Font Loading**: Optimized web font loading strategy
- **Bundle Size**: Minimal dependencies, tree-shaking enabled
- **SEO**: Proper meta tags and structured data for legal professional

## Deployment
- **Platform**: Vercel (optimal for Next.js)
- **Domain**: To be configured
- **Analytics**: Optional Google Analytics integration

## Dependencies
### Production
- react: ^19.0.0
- react-dom: ^19.0.0
- next: 15.3.2

### Development
- typescript: ^5
- @types/node: ^20
- @types/react: ^19
- @types/react-dom: ^19
- tailwindcss: ^4
- eslint: ^9 