# CLAUDE.md

# E-commerce CMS AI Engineering Rules

## Objective

This project is a modern premium e-commerce CMS platform built with:

- Next.js 15
- TypeScript
- TailwindCSS
- shadcn/ui
- NestJS
- PostgreSQL
- Prisma
- Redis
- Supabase

The goal is to create:

- scalable architecture
- reusable UI system
- modern UX
- decoupled front-end
- premium admin dashboard
- headless e-commerce platform

---

# AI Assistant Main Rules

## 1. Component First Architecture

Always create:

- reusable components
- layouts
- sections
- design system

BEFORE:

- business logic
- integrations
- API implementation

---

## 2. Never Create Giant Components

Prefer composition.

### Correct

```tsx
<Card>
  <CardHeader />
  <CardContent />
</Card>
```

### Wrong

```tsx
<MassiveProductCardWithEverything />
```

---

## 3. Folder Organization Rules

Always organize by domain.

### Correct

```txt
components/
  ecommerce/
    product/
    cart/

  dashboard/
    analytics/
    orders/
```

### Wrong

```txt
components/
  ProductCard.tsx
  ProductCard2.tsx
  ProductCardFinal.tsx
```

---

## 4. Design System Consistency

All UI must follow:

- same spacing
- same radius
- same shadow system
- same motion rules
- same typography

---

## 5. UX Philosophy

The UI must feel:

- premium
- minimal
- modern
- fast
- clean

Inspired by:

- Stripe
- Linear
- Vercel
- Shopify
- Apple

---

## 6. Modern UX Rules

Always:

- use whitespace
- use skeleton loading
- use smooth transitions
- prefer drawers over modals
- use responsive layouts
- prioritize readability

Never:

- overuse gradients
- overuse shadows
- create visual pollution
- create bloated interfaces

---

## 7. Next.js Rules

Always:

- use App Router
- prefer Server Components
- use route groups
- create loading.tsx
- create error.tsx
- create reusable layouts

---

## 8. Component Construction Rules

Every component must:

- have single responsibility
- be reusable
- support variants
- support accessibility
- avoid hardcoded logic

---

## 9. State Management Rules

Use:

- Zustand for UI/client state
- TanStack Query for server state

Never:

- place everything in global state
- mix UI state with API cache

---

## 10. Styling Rules

Use:

- TailwindCSS
- cva
- clsx
- tailwind-merge

Avoid:

- inline styles
- duplicated classes
- hardcoded colors

---

## 11. API Architecture Rules

Front-end must NEVER:

- access database directly
- contain business logic
- contain security rules

Always use:

- services
- repositories
- DTOs
- adapters

---

## 12. Performance Rules

Always optimize:

- images
- rendering
- fonts
- bundle size

Prefer:

- lazy loading
- streaming
- dynamic imports
- partial rendering

---

## 13. Security Rules

Never expose:

- secrets
- admin rules
- tokens
- private keys

Always:

- validate payloads
- validate permissions
- sanitize requests

---

## 14. Accessibility Rules

Always:

- semantic HTML
- keyboard navigation
- focus states
- aria labels

---

## 15. Project Philosophy

This is NOT:

- a simple CRUD

This IS:

- a scalable platform
- a reusable ecosystem
- a premium experience
- a long-term product

---

# Development Priorities

## Phase 1

- UX foundation
- Design system
- Base components

---

## Phase 2

- Storefront UI
- Product pages
- Cart experience

---

## Phase 3

- Admin dashboard
- CMS experience
- CRUD interfaces

---

## Phase 4

- Authentication
- Protected routes
- Sessions

---

## Phase 5

- API integration
- Prisma
- PostgreSQL
- Redis

---

# Base Libraries

## UI

- shadcn/ui
- Radix UI
- Framer Motion
- Lucide Icons

## State

- Zustand
- TanStack Query

## Forms

- React Hook Form
- Zod

## Utilities

- clsx
- tailwind-merge
- class-variance-authority

---

# Folder Structure

```txt
src/

app/
components/
modules/
services/
stores/
hooks/
providers/
utils/
types/
styles/
config/
```

---

# Monorepo Structure

```txt
apps/
  store/
  admin/
  api/

packages/
  ui/
  types/
  utils/
```

---

# Component Naming Rules

## Correct

```txt
product-card.tsx
cart-drawer.tsx
sidebar-menu.tsx
```

## Wrong

```txt
ProductCardNew.tsx
FinalSidebar.tsx
```

---

# Final Rule

Always prioritize:

1. UX
2. Reusability
3. Scalability
4. Maintainability
5. Performance

Never sacrifice architecture quality for short-term speed.
