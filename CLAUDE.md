# CLAUDE.md - E-commerce CMS Frontend

## 🎯 Project Vision

Premium, scalable e-commerce CMS built with Next.js 15, TypeScript, and modern tooling.

**Stack:**
- Frontend: Next.js 15, React 19, TypeScript
- Styling: TailwindCSS 4, CVA, shadcn/ui
- State: Zustand (client), TanStack Query (server)
- Forms: React Hook Form + Zod
- Icons: Lucide React, Phosphor Icons
- Animation: Framer Motion
- Backend: NestJS, PostgreSQL, Prisma, Redis, Supabase

**Principles:**
1. UX > everything else
2. Reusable components > giant components
3. Scalable architecture > quick hacks
4. Premium feel: Stripe, Linear, Vercel, Shopify, Apple

---

## 📁 Folder Structure

**Current (App Router - no src/):**

```
app/
├── (routes)/           # Route groups for organization
│   ├── (storefront)/   # Public store pages
│   ├── (dashboard)/    # Admin dashboard (protected)
│   └── (auth)/         # Auth flows
├── components/
│   ├── ui/             # Design system (button, card, input, etc)
│   ├── layout/         # Header, footer, sidebar
│   ├── sections/       # Page sections (hero, slider, etc)
│   └── ecommerce/      # Domain-specific
│       ├── product/
│       ├── cart/
│       ├── checkout/
│       └── catalog/
├── hooks/              # Custom hooks
├── stores/             # Zustand stores
├── services/           # API clients, adapters
├── utils/              # Helpers, formatters
├── types/              # Global types, interfaces
├── config/             # Constants, configuration
├── styles/             # Global styles, themes
├── providers.tsx       # Client providers
├── layout.tsx          # Root layout
└── page.tsx            # Home page

```

**Key Rules:**
- Use kebab-case for files: `product-card.tsx`, NOT `ProductCard.tsx`
- Organize by domain/feature, NOT by type
- Keep components folder flat when possible
- Use route groups `(name)` to organize without affecting URLs

---

## 🧩 Component Architecture

### Single Responsibility Principle

```tsx
// ✅ CORRECT: Decomposed, reusable
<ProductCard>
  <ProductImage src={image} />
  <ProductHeader title={title} />
  <ProductPrice price={price} />
  <ProductActions onAdd={onAdd} />
</ProductCard>

// ❌ WRONG: Giant component with everything
<MassiveProductCardWithImageHeaderPriceAndActions />
```

### Component Checklist

Every component must have:
- [ ] Single responsibility
- [ ] Reusable props interface
- [ ] Variants (via CVA)
- [ ] Accessibility (aria labels, semantic HTML)
- [ ] TypeScript types
- [ ] No hardcoded logic/data

### Variants Pattern (CVA)

```tsx
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-colors",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-white hover:bg-zinc-800",
        outline: "border border-zinc-300 hover:bg-zinc-100",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  }
);

export function Button({ variant, size, className, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
```

---

## 🎨 Design System Rules

### Consistency Requirements

All UI must align on:
- **Spacing:** Use Tailwind scale (4px base: p-1, p-2, p-3, p-4, p-6, p-8)
- **Radius:** Consistent border-radius (sm, md, lg, full)
- **Shadows:** Minimal shadows, not overused
- **Motion:** Use Framer Motion for meaningful animations, NOT gratuitous
- **Typography:** 2-3 font sizes max per component
- **Colors:** Use tokens (shl-vibrant, shl-lime, shl-dark, etc)

### Color Tokens

Define in `tailwind.config.ts`:
```js
colors: {
  "shl-dark": "#000000",
  "shl-vibrant": "#00FF00",
  "shl-lime": "#ADFF2F",
}
```

### Never Do This

- ❌ Overuse gradients (max 1 gradient per page)
- ❌ Overuse shadows (use elevation system)
- ❌ Inline styles (use Tailwind classes)
- ❌ Magic numbers (use config constants)
- ❌ Visual pollution (use whitespace)

---

## 🔧 State Management

### Zustand (Client State)

```tsx
import { create } from "zustand";

interface NavigationStore {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
}));
```

**Use for:**
- UI state (modals, drawers, tabs)
- User preferences
- Theme, language
- Temporary filters

**Never use for:**
- API data (use TanStack Query)
- Business logic
- Large nested state

### TanStack Query (Server State)

```tsx
import { useQuery } from "@tanstack/react-query";

export function useProducts(category?: string) {
  return useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const res = await fetch(`/api/products?category=${category}`);
      return res.json();
    },
  });
}
```

**Use for:**
- API data fetching
- Caching
- Background refetches
- Server state sync

---

## 📋 Data & Mocking

### Data Patterns

```tsx
// ✅ Extract to data layer
const slides = [
  { id: 1, title: "Slide 1", image: "..." },
  { id: 2, title: "Slide 2", image: "..." },
];

export function HeroSlider() {
  return <Slider items={slides} />;
}

// ❌ Don't hardcode in component
export function HeroSlider() {
  return (
    <div>
      <img src="..." />
      <h1>Slide 1</h1>
    </div>
  );
}
```

### Mock Data Structure

```
app/
├── mocks/
│   ├── products.ts
│   ├── categories.ts
│   └── users.ts
```

---

## ⚡ Performance Rules

### Always Optimize

- **Images:** Use Next.js `<Image>`, not `<img>`
- **Fonts:** Google fonts configured in layout.tsx
- **Rendering:** Use Server Components when possible
- **Bundle:** Use dynamic imports for heavy components

```tsx
import dynamic from "next/dynamic";

const HeavyChart = dynamic(() => import("./chart"), {
  loading: () => <Skeleton />,
  ssr: false,
});
```

### Loading States

Every async operation needs skeleton or loading state:

```tsx
export function ProductCard({ isLoading }) {
  if (isLoading) return <ProductCardSkeleton />;
  return <ProductCardContent />;
}
```

---

## 🔐 Security Rules

### Never Expose

- ❌ API keys, secrets in client code
- ❌ Direct database access
- ❌ Admin logic on frontend
- ❌ User tokens in localStorage (use httpOnly cookies)

### Always Validate

- Input validation (Zod)
- Permission checks (server-side)
- CSRF tokens for mutations
- Sanitize user input

---

## ♿ Accessibility Rules

### Requirements

- [ ] Semantic HTML (`<button>`, `<nav>`, `<main>`)
- [ ] ARIA labels: `aria-label`, `aria-describedby`
- [ ] Keyboard navigation: Tab, Enter, Escape
- [ ] Focus states: visible focus rings
- [ ] Color contrast: WCAG AA minimum

```tsx
// ✅ Accessible
<button 
  aria-label="Close menu"
  onClick={handleClose}
  className="focus:ring-2 focus:ring-offset-2"
>
  ✕
</button>

// ❌ Not accessible
<div onClick={handleClose} className="cursor-pointer">
  ✕
</div>
```

---

## 📱 Responsive Design

### Mobile-First Approach

```tsx
// ✅ Start with mobile, add desktop with md:, lg:, xl:
<div className="px-4 py-6 md:px-6 md:py-8 lg:px-8">
  <h1 className="text-2xl md:text-3xl lg:text-4xl" />
</div>

// ❌ Desktop-first
<div className="px-8 py-8 sm:px-6 sm:py-6 xs:px-4 xs:py-4">
```

### Breakpoints (Tailwind defaults)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## 🚀 Development Phases

### Phase 1: UX Foundation ✅ (In Progress)
- [ ] Design system components (button, card, input, etc)
- [ ] Layout components (header, footer, sidebar)
- [ ] Page sections (hero, slider, featured)
- [ ] Folder structure reorganization
- [ ] Root providers (QueryClient, Zustand)

### Phase 2: Storefront UI
- [ ] Product pages
- [ ] Product catalog
- [ ] Cart drawer
- [ ] Checkout flow
- [ ] Search & filters

### Phase 3: Admin Dashboard
- [ ] Dashboard layout
- [ ] Product CRUD
- [ ] Order management
- [ ] Analytics
- [ ] CMS experience

### Phase 4: Authentication
- [ ] Auth flows (login, register, forgot password)
- [ ] Protected routes
- [ ] Session management
- [ ] User profiles

### Phase 5: API Integration
- [ ] Backend integration
- [ ] Database models
- [ ] Real data instead of mocks
- [ ] Payment processing

---

## 📝 Coding Guidelines

### Import Organization

```tsx
// 1. React & Next.js
import { useState } from "react";
import { useRouter } from "next/navigation";

// 2. Third-party
import { useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";

// 3. Local components & utils
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/formatters";
import { useProductStore } from "@/stores/product-store";
```

### File Exports

```tsx
// ✅ Named exports for components
export function ProductCard({ ... }) { }
export function ProductImage({ ... }) { }

// ✅ Default export only for pages/layouts
export default function Page() { }

// ❌ Mix of default and named
export default function ProductCard() { }
export function ProductImage() { }
```

### Comments

Only add comments for WHY, not WHAT:

```tsx
// ✅ Why comments
// Delay query until user focus to avoid unnecessary API calls during page load
const [enabled, setEnabled] = useState(false);

// ❌ What comments
// Set enabled to true
setEnabled(true);
```

---

## ✅ Final Checklist Before Commit

- [ ] Follows folder structure rules
- [ ] Component is reusable (no hardcoded data)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Accessibility check (keyboard nav, aria labels)
- [ ] TypeScript types complete (no `any`)
- [ ] No console.log or debugger statements
- [ ] Styled with Tailwind + CVA (no inline styles)
- [ ] Performance optimized (images, dynamic imports)
- [ ] Security rules followed (no secrets exposed)

---

## 🎯 Final Priority Order

Always prioritize in this order:

1. **UX** - Does it feel premium? Is it usable?
2. **Reusability** - Can this be used elsewhere?
3. **Scalability** - Will this break with 10K items?
4. **Maintainability** - Can others understand this?
5. **Performance** - Is it fast and efficient?

**Never sacrifice architecture quality for short-term speed.**
