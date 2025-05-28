# System Patterns

## Architecture Overview
Single-page application (SPA) with server-side rendering (SSR) via Next.js App Router.

## Component Structure
```
Components/
├── ui/
│   ├── Navigation.tsx (floating dots navigation)
│   ├── BackToTopButton.tsx (scroll to top)
│   └── Modal.tsx (reusable modal base component)
├── modals/
│   ├── ModalManager.tsx (central modal routing)
│   ├── EducationModal.tsx (education detail viewer)
│   ├── InterestModal.tsx (interest detail viewer)
│   ├── DiaryModal.tsx (diary entry viewer)
│   └── BlogModal.tsx (blog post viewer)
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
├── admin/
│   ├── LoginForm.tsx (authentication)
│   ├── Dashboard.tsx (admin overview)
│   └── [DataManagers].tsx (CRUD interfaces)
└── Footer/
    └── SocialLinks.tsx
```

## Design Patterns

### 1. Modal Management Pattern
- **React Context**: Global modal state management with ModalProvider
- **Specialized Components**: Dedicated modal components for each content type
- **Central Routing**: ModalManager component routes to appropriate modal
- **Custom Hook**: useModal hook provides clean API for modal operations
- **Type Safety**: TypeScript union types for modal types and data

### 2. Container/Presentation Pattern
- **Containers**: Handle data and state logic
- **Presentations**: Pure UI components with props
- **Modal Integration**: Content components trigger modals with onClick handlers
- Clean separation between business logic and UI

### 3. Admin System Pattern
- **Authentication Context**: AuthProvider for global auth state
- **Protected Routes**: AuthWrapper component guards admin pages
- **Data Management**: localStorage-based persistence with JSON export/import
- **CRUD Operations**: Standardized create, read, update, delete interfaces

### 4. Composition Pattern
- Small, reusable components
- Compose larger sections from smaller building blocks
- Modal components compose base Modal with specialized content
- Easy to maintain and test

### 5. Responsive Design Pattern
- **Mobile-first approach**: Start with mobile layout, enhance for larger screens
- **Breakpoint strategy**: Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- **Modal Responsiveness**: Adaptive sizing with sm/md/lg/xl variants
- **Flexible grid**: CSS Grid and Flexbox for layout

## Layout Strategy

### Section Layout
```
[Hero Section - Full viewport height with scroll indicator]
[Company Info - Full viewport height with centered card]
[Qualifications - Full viewport height with timeline]
[Interests - Min viewport height with two-column layout]
[Blog Preview - Full viewport height with card grid]
[Footer - Standard height with centered content]
[Navigation - Floating dots (desktop only)]
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
- **React Context**: Global state for modals and authentication
- **Custom Hooks**: useModal, useAuth for encapsulated state logic
- **localStorage**: Persistent data storage for admin content
- **React hooks** for local component state
- **URL state** for navigation (smooth scroll to sections)

### Modal State Flow
```
ModalProvider (Context)
├── useModal hook
├── ModalManager (routing)
└── Individual Modal Components

State: { isOpen, modalType, modalData }
Actions: { openModal, closeModal }
```

### Authentication State Flow
```
AuthProvider (Context)
├── useAuth hook
├── AuthWrapper (protection)
└── Admin Components

State: { isAuthenticated, user }
Actions: { login, logout, checkAuth }
```

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