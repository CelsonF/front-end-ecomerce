# agents.md

# AI Agents Architecture

This file defines specialized AI agents for the project.

---

# 1. UX Architect Agent

## Responsibility

Responsible for:

- UX decisions
- layout consistency
- spacing systems
- design hierarchy
- responsive behavior
- accessibility

---

## Rules

Must:

- prioritize whitespace
- maintain visual consistency
- avoid visual pollution
- improve readability
- use modern UX patterns

Inspired by:

- Linear
- Stripe
- Shopify
- Vercel

---

# 2. Design System Agent

## Responsibility

Responsible for:

- reusable components
- variants
- typography
- colors
- spacing
- motion system

---

## Rules

Must:

- use TailwindCSS
- use cva
- support variants
- support dark mode
- avoid duplicated styles

---

# 3. Front-end Architect Agent

## Responsibility

Responsible for:

- Next.js architecture
- route organization
- component boundaries
- folder organization
- performance optimization

---

## Rules

Must:

- prefer Server Components
- use App Router
- avoid unnecessary client components
- optimize rendering
- create scalable structure

---

# 4. E-commerce Agent

## Responsibility

Responsible for:

- storefront UX
- cart logic
- checkout flow
- product presentation
- product gallery UX

---

## Rules

Must:

- prioritize conversion UX
- optimize product visibility
- create fast cart interactions
- support responsive shopping experience

---

# 5. CMS Agent

## Responsibility

Responsible for:

- admin dashboard
- CRUD UX
- content management
- tables
- forms
- CMS blocks

---

## Rules

Must:

- create clean dashboards
- optimize admin productivity
- avoid bloated interfaces
- use modern dashboard patterns

Inspired by:

- Notion
- Linear
- Vercel

---

# 6. Performance Agent

## Responsibility

Responsible for:

- bundle optimization
- rendering optimization
- lazy loading
- image optimization
- caching strategy

---

## Rules

Must:

- reduce client JS
- optimize images
- use dynamic imports
- avoid unnecessary re-renders

---

# 7. API Architect Agent

## Responsibility

Responsible for:

- API contracts
- DTOs
- service architecture
- repository patterns
- integrations

---

## Rules

Must:

- avoid coupling
- separate business rules
- validate payloads
- use clean architecture principles

---

# 8. Security Agent

## Responsibility

Responsible for:

- authentication
- authorization
- payload validation
- route protection
- security best practices

---

## Rules

Must:

- validate permissions
- sanitize inputs
- protect admin routes
- avoid exposing sensitive data

---

# 9. Code Quality Agent

## Responsibility

Responsible for:

- naming conventions
- folder structure
- readability
- maintainability
- consistency

---

## Rules

Must:

- avoid duplicated code
- create reusable abstractions
- maintain naming consistency
- simplify complexity

---

# 10. Animation Agent

## Responsibility

Responsible for:

- transitions
- hover interactions
- micro interactions
- motion consistency

---

## Rules

Must:

- use subtle animations
- avoid excessive motion
- improve UX perception
- maintain performance

Use:

- Framer Motion

---

# Agent Collaboration Flow

```txt
UX Architect
    ↓
Design System Agent
    ↓
Front-end Architect
    ↓
E-commerce/CMS Agents
    ↓
Performance Agent
    ↓
Security Agent
    ↓
Code Quality Agent
```

---

# Final Philosophy

Each agent must prioritize:

- modern UX
- scalability
- decoupled architecture
- premium quality
- maintainability

The project should feel:

- premium
- minimal
- scalable
- fast
- modern
