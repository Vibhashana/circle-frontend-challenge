# BookNest

BookNest is a modern web application built with Next.js that provides an intuitive interface for browsing and purchasing books online.

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat-square) ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square) ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square) ![shadcn/ui Badge](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=flat-square) ![Lucide Badge](https://img.shields.io/badge/Lucide-F56565?logo=lucide&logoColor=fff&style=flat-square) ![ESLint Badge](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=fff&style=flat-square) ![Prettier Badge](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=fff&style=flat-square) ![Sentry Badge](https://img.shields.io/badge/Sentry-362D59?logo=sentry&logoColor=fff&style=flat-square) ![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat-square)

## ✨ Features

### ⚙️ Core Features

- 📚 Browse books catalog
- 🔍 Advanced search functionality with debouncing
- 📖 Detailed book pages with comprehensive information
- 🛒 Book purchasing system
- 🌓 Dark/Light mode theme switcher
- 📱 Responsive mobile-first design
- ⚡ Fast page loads with Next.js App Router
- 🔄 Real-time UI updates
- 🎨 Modern UI with Tailwind CSS
- 🎯 Accessible components

### 🛠️ Technical Features

- ⚛️ Server-side rendering (SSR) with Next.js 15
- 🎯 Type-safe development with TypeScript
- 🎨 Styled using Tailwind CSS with CSS variables
- 🧩 Reusable UI components with shadcn/ui
- 🔍 Client-side search with debouncing
- 🖼️ Optimized image loading
- 🚦 API route handling
- 📱 Mobile-responsive layouts

### 👨‍💻 Developer Experience

- 🧪 ESLint for code linting
- ✨ Prettier for code formatting
- 🐶 Husky for git hooks
- 📝 Lint-staged for staged files linting
- 🎯 TypeScript for type checking
- 🔄 Hot reloading in development

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ShadCN UI](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icon system
- [Sentry](https://sentry.io/) - Error tracking

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash:terminal
   npm install
   ```
3. Set up environment variables:
   ```bash
   # for the API server:
   NEXT_PUBLIC_API_URL=
   ```
4. Run the development server:
   ```bash:terminal
   npm run dev
   ```

## 📁 Project Structure

- `/app` - Next.js application routes and pages
- `/components` - Reusable React components
- `/lib` - Utility functions and actions
- `/hooks` - Custom React hooks
- `/public` - Static assets
- `/types` - TypeScript types
- `/utils` - Utility functions

## 🧩 Key Components

- `Book.tsx` - Displays individual book information
- `Books.tsx` - Renders the book collection
- `PurchaseBook.tsx` - Handles book purchasing flow
- `Skeletons.tsx` - Loading state components
- `MobileNav.tsx` - Mobile navigation menu
- `Footer.tsx` - Site footer component

## 🔧 Development

The project uses several development tools and configurations:

- `ESLint` for code linting
- `Prettier` for code formatting
- `Husky` for Git pre-commit hooks
- `TypeScript` for type safety
- `Tailwind CSS` for styling

## 🔍 Monitoring with Sentry

The application uses Sentry for error tracking and performance monitoring:

- **Error Tracking**: Automatic capture of runtime errors and exceptions
- **Performance Monitoring**: Track page load times and API calls
- **Session Replay**: Reproduce issues with session replay feature
- **Release Tracking**: Monitor deployments and releases
- **Environment Separation**: Different environments (development/production) tracking
- **Custom Error Boundaries**: Graceful error handling for better UX
