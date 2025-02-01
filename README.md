# Dropdown Component

## 🔗 Links
- [Storybook Documentation](https://amaralkaff.github.io/dropdown-component)
- [GitHub Repository](https://github.com/amaralkaff/dropdown-component)

## 🚀 Quick Start

### Prerequisites
- Bun (latest version)
- React ^18.0.0
- Tailwind CSS ^4.0.2

### Installation

```bash
# Clone repository
git clone https://github.com/amaralkaff/dropdown-component.git
cd dropdown-component

# Install dependencies
bun install

# Run Storybook
bun run storybook
```

### Development

```bash
# Start development server
bun run dev

# Build library
bun run build-lib

# Build Storybook
bun run build-storybook

# Deploy Storybook
bun run deploy-storybook
```

## 📦 Using as Dependency

Add to your project:
```bash
# Using bun
bun add @abu-ammar-makyo/dropdown-component

# Using npm
npm install @abu-ammar-makyo/dropdown-component

# Using yarn
yarn add @abu-ammar-makyo/dropdown-component
```

Add to your Tailwind config:
```js
// tailwind.config.js
module.exports = {
  content: [
    // ... other paths
    "./node_modules/@abu-ammar-makyo/dropdown-component/**/*.{js,jsx,ts,tsx}"
  ]
}
```

## 📖 Basic Usage

```tsx
import Dropdown from '@abu-ammar-makyo/dropdown-component';

function App() {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <Dropdown 
      options={options} 
      placeholder="Select option" 
      onChange={(selected) => console.log('Selected:', selected)} 
    />
  );
}
```

## 🛠️ Features

- ✨ Searchable dropdown
- 🌐 Portal support
- ✅ Single/Multiple selection
- 🎨 Custom rendering
- 🔍 Search filtering
- 🎛️ Toggleable features
- 📱 Responsive design

## 📚 Dependencies

### Core Dependencies
- `react`: ^18.0.0
- `react-dom`: ^18.0.0
- `tailwindcss`: ^4.0.2
- `@tailwindcss/vite`: ^4.0.2

### Dev Dependencies
- `@storybook/react`: ^8.5.2
- `@storybook/addon-essentials`: ^8.5.2
- `@storybook/addon-interactions`: ^8.5.2
- `typescript`: ~5.6.2
- `vite`: ^6.0.5
- `eslint`: ^9.17.0

### Peer Dependencies
```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

## 🛠️ Scripts

```bash
# Development
bun run dev         # Start development server
bun run storybook   # Run Storybook dev server

# Building
bun run build       # Build the project
bun run build-lib   # Build the library
bun run build-storybook  # Build Storybook

# Deployment
bun run deploy-storybook  # Deploy Storybook to GitHub Pages

# Linting
bun run lint        # Run ESLint
```

