# System Patterns

## Architecture Overview
Single-page application (SPA) with server-side rendering (SSR) via Next.js App Router.

## Component Structure
```
Components/
├── Hero/
│   ├── HeroSection.tsx (name, title, portrait)
│   └── ChineseCharacters.tsx (阮 非 玄 display)
├── Company/
│   ├── CompanyInfo.tsx (Oriental International Law Firm)
│   └── ContactInfo.tsx (phone, email, offices)
├── Qualifications/
│   ├── EducationTimeline.tsx
│   └── CertificationCard.tsx
├── Interests/
│   ├── InterestsList.tsx
│   └── ActivitiesSection.tsx
├── Blog/
│   ├── BlogPreview.tsx
│   └── PostCard.tsx
└── Footer/
    ├── SocialLinks.tsx
    └── BackToTop.tsx
```

## Design Patterns

### 1. Container/Presentation Pattern
- **Containers**: Handle data and state logic
- **Presentations**: Pure UI components with props
- Clean separation between business logic and UI

### 2. Composition Pattern
- Small, reusable components
- Compose larger sections from smaller building blocks
- Easy to maintain and test

### 3. Responsive Design Pattern
- **Mobile-first approach**: Start with mobile layout, enhance for larger screens
- **Breakpoint strategy**: Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- **Flexible grid**: CSS Grid and Flexbox for layout

## Layout Strategy

### Section Layout
```
[Hero Section - Full viewport height]
[Company Info - Horizontal layout with logo]
[Qualifications - Timeline/Card grid]
[Interests - Two-column layout]
[Blog Preview - Card grid]
[Footer - Centered content]
```

### Color System Implementation
```css
:root {
  --navy-primary: #1e3a8a;
  --navy-dark: #1e40af;
  --gold-text: #f5cda1;
  --gold-accent: #fbbf24;
  --neutral-light: #f8fafc;
  --neutral-dark: #334155;
}
```

### Typography Scale
- **h1**: 3xl - 6xl (responsive)
- **h2**: 2xl - 4xl (responsive)
- **h3**: xl - 2xl (responsive)
- **body**: base - lg
- **small**: sm - base

## State Management
- **No external state library needed** (simple portfolio)
- **React hooks** for local component state
- **URL state** for navigation (smooth scroll to sections)

## Performance Patterns

### Image Optimization
```tsx
import Image from 'next/image'

// Portrait photo
<Image
  src="/portrait.jpg"
  alt="Nguyen Phi Huyen"
  width={400}
  height={500}
  priority
  className="rounded-lg"
/>
```

### Font Loading Strategy
```tsx
import { Noto_Serif_TC } from 'next/font/google'

const notoSerifTC = Noto_Serif_TC({
  subsets: ['chinese-traditional'],
  weight: ['400', '500', '700'],
  display: 'swap'
})
```

## Accessibility Patterns
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **ARIA labels**: For interactive elements
- **Keyboard navigation**: Focus management, tab order
- **Color contrast**: Ensure text readability on navy background
- **Screen reader support**: Alt text, descriptive labels

## SEO Patterns
```tsx
// metadata in layout.tsx
export const metadata: Metadata = {
  title: 'Nguyen Phi Huyen - Senior Associate | Oriental International Law Firm',
  description: 'Professional portfolio of Nguyen Phi Huyen, Senior Associate at Oriental International Law Firm specializing in international law.',
  keywords: ['legal', 'lawyer', 'oriental international law firm', 'vietnam'],
}
``` 