# Contributing to [ToolStack](https://tool-stack-kappa.vercel.app/)

First off, thanks for taking the time to contribute! 🎉

This document provides guidelines and instructions for contributing to our project.
Whether it's a bug report, feature request, or pull request, we appreciate your help!

## 📋 Table of Contents

- [Code of Conduct](#️-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [First Time Contribution](#-first-contribution)
- [Working on an Issue](#-working-on-an-issue)
- [Issue Labels](#-issue-labels)
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Creating a New Tool](#️-creating-a-new-tool)
- [Adding Resources](#-adding-resources)
- [Pull Request Process](#-pull-request-process)
- [Style Guide](#-style-guide)

---

## ⚖️ Code of Conduct

This project adheres to the [Contributor Covenant](./CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.

---

## 🛂 How Can I Contribute?

### 1. Report Bugs🐛 

**Before submitting a bug report:**
- Check the issue tracker (might already be reported)
- Try with the latest version
- Collect information:
  - Your OS and browser
  - Steps to reproduce the bug
  - What you expected vs. what actually happened
  - Screenshots or videos if applicable
  - Console errors if any

**How to submit:**
1. Open a new issue on GitHub
2. Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.md)
3. Fill in all requested information
4. Wait for response from maintainers

### 2. Suggest Enhancements✨

**Before suggesting a feature:**
- Check if it already exists or is planned
- Explain why this feature would be useful
- Give specific examples of how it would work
- Consider if it fits the project scope

**How to submit:**
1. Open a new issue
2. Use the [Feature Request template](.github/ISSUE_TEMPLATE/feature_request.md)
3. Clearly describe the feature and its benefits
4. Include mockups or examples if applicable

### 3. Improve Documentation📚

Help improve our docs by:
- Fixing typos and grammar
- Clarifying confusing sections
- Adding examples and tutorials
- Creating guides for common tasks
- Translating to other languages

### 4. Write Code💻

We're always looking for help with:
- New tools and utilities
- Bug fixes
- Performance improvements
- Test coverage
- Type safety improvements

---

## 🌱 First Contribution?

If you're new to open source, don't worry!

We have plenty of beginner-friendly issues available.

### Getting Started

1. Look for issues labeled **good first issue**
2. Comment on the issue to get assigned
3. Fork the repository
4. Create a new branch
5. Make your changes
6. Open a Pull Request

We'll gladly help if you get stuck.

---

## 📌 Working on an Issue

Before starting development:

- Check if someone is already assigned.
- Leave a comment saying you'd like to work on it.
- Wait for assignment.
- Create a feature branch.
- Submit a PR linked to the issue.

Please avoid working on issues already assigned to someone else unless discussed.

---

## 🏷 Issue Labels

- good first issue — Great for first-time contributors.
- help wanted — Looking for community help.
- enhancement — New feature or improvement.
- bug — Something isn't working.
- documentation — Documentation improvements.

---

## 🧑‍💻 Development Setup

### 1. Prerequisites

- Node.js 18+ (check with `node --version`)
- npm (comes with Node.js)
- Git
- Code editor (VS Code recommended)

### 2. Clone & Setup

```bash
# 1. Fork the repository (click Fork on GitHub)
# 2. Clone your fork
git clone https://github.com/lazytech614/tool-stack
cd tool-stack

# 3. Add upstream remote
git remote add upstream https://github.com/lazytech614/tool-stack

# 4. Install dependencies
npm install

# 5. Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Common Commands

```bash
npm run dev        # Start dev server
npm run build      # Build for production
npm run lint       # Check code style
npm run format     # Format code
npm run test       # Run tests
npm run test:watch # Run tests in watch mode
```

---


## 📂 Project Structure

```text
tool-stack/
├── .github/                     # GitHub workflows, issue templates & configs
│
├── app/                         # Next.js App Router
│   ├── api/                     # API routes
│   ├── tools/                   # Developer utility tools
│   ├── learn/                   # Learning resources
│   │   ├── cheatsheets/
│   │   ├── docs/
│   │   ├── glossary/
│   │   └── snippets/
│   ├── resources/               # Curated developer resources
│   │   ├── ai-tools/
│   │   ├── boilerplates/
│   │   ├── browser-extensions/
│   │   ├── cli-tools/
│   │   ├── colors/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── illustrations/
│   │   ├── mcp-servers/
│   │   ├── prompts/
│   │   ├── starter-kits/
│   │   ├── templates/
│   │   └── vscode-extensions/
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── tools/                   # Tool-specific components
│   ├── learn/                   # Learn section components
│   ├── resources/               # Resource cards & filters
│   ├── shared/                  # Shared reusable components
│   └── ui/                      # shadcn/ui components
│
├── constants/
│   ├── configs/                 # Utility metadata and project configs
│   ├── learnings/               # Cheatsheets, docs & snippets
│   ├── resources/               # Resource datasets
│   └── navigation.ts            # Navigation configuration
│
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions & helpers
├── providers/                   # Context providers
├── public/                      # Images, icons & static assets
├── styles/                      # Global styles
├── types/                       # Shared TypeScript types
│
├── middleware.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

--- 

## 🛠️ Creating a New Tool

- Create page
- Create component
- Create utility functions
- Register metadata
- Add navigation
- Add SEO metadata
- Test
- Submit PR

---

## 📦 Adding Resources

Many pages inside ToolStack are powered by TypeScript data files.

You can contribute by adding:

- Templates
- Boilerplates
- Starter Kits
- Browser Extensions
- VS Code Extensions
- CLI Tools
- AI Tools

In most cases you only need to update the corresponding file inside:

constants/resources/

No backend changes are required.

---

## 🪝 Pull Request Process

### 1. Before You Start

1. Create an issue first (discuss major changes) or you can work on a issue that is open
2. Get approval from maintainers
3. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### 2. Making Changes

1. Keep commits atomic and well-described:
   ```bash
   git commit -m "Add new tool: Your Tool Name"
   ```

2. Follow the style guide (see below)

3. Add tests for new functionality

4. Update documentation

5. Keep your branch updated:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

### 3. Submitting the PR

1. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create a Pull Request on GitHub

3. Fill out the PR template with:
   - Clear title: `Add feature: Description` or `Fix: Description`
   - Link to related issue: `Fixes #123`
   - Description of changes
   - Testing done
   - Screenshots (if UI changes)

4. Wait for reviews and respond to feedback

### 4. Merge Criteria

Your PR will be merged when:
- ✅ All tests pass
- ✅ No merge conflicts
- ✅ Code follows style guide

---

## 📖 Style Guide

### 1. TypeScript

```typescript
// Use explicit types
const value: string = "hello"

// Avoid `any`
const data: MyType = getData() // ✅
const data: any = getData()    // ❌

// Use proper naming
const getUserName() ✅
const getUN()        ❌

// Add JSDoc for complex functions
/**
 * Converts text to uppercase
 * @param text - The input text
 * @returns The uppercase text
 */
function toUpperCase(text: string): string {
  return text.toUpperCase()
}
```

### 2. React Components

```typescript
// File per component (one per file)
// export function ComponentName() { }

// Use hooks properly
const [state, setState] = useState("")
const memoized = useMemo(() => expensive(), [deps])
const { data } = useData()

// Proper naming
function MyComponent() ✅
function myComponent() ❌

// Props interface
interface MyComponentProps {
  title: string
  count?: number // Optional
  onClick: () => void
}

export function MyComponent({ title, count, onClick }: MyComponentProps) {
  return <div onClick={onClick}>{title}</div>
}
```

### 3. Styling with Tailwind

```typescript
// Use consistent spacing
className="flex gap-4 p-4 rounded-xl"

// Keep classes organized
className={cn(
  // Layout
  "flex items-center justify-between",
  // Spacing
  "gap-4 p-4",
  // Styling
  "rounded-xl border border-zinc-200 bg-zinc-50",
  // Responsive
  "md:grid-cols-2",
  // Conditional
  condition && "bg-red-50"
)}

// Avoid inline styles
<div className="...">✅</div>
<div style={{...}}>❌</div>
```

### 4. Theme Color Preference (Strictly follow this)

Check `constans/configs/theme-color-prefernces.ts`

### 5. Comments

```typescript
// Good: Explains WHY, not WHAT
// Cache results because computing is expensive
const cached = useMemo(() => compute(), [deps])

// Bad: Obvious from code
// Set state to empty string
setState("")

// Use JSDoc for public APIs
/**
 * Converts markdown to HTML
 * @param markdown - Input markdown string
 * @returns Rendered HTML string
 */
```
---

**Happy contributing! We're excited to have you on the team! 🚀**