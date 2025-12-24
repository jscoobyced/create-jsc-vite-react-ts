# create-vite-react-ts

A CLI tool to scaffold modern React applications with TypeScript, Vite, Tailwind CSS, and Vitest pre-configured.

## Quick Start

Create a new project using npm, yarn, or pnpm:

```bash
# npm
npm create vite-react-ts my-app

# yarn
yarn create vite-react-ts my-app

# pnpm
pnpm create vite-react-ts my-app
```

Then navigate to your project and start developing:

```bash
cd my-app
yarn dev
```

## What's Included

The generated project includes:

- **React 19** with TypeScript
- **Vite 7** for blazing-fast development and builds
- **Tailwind CSS 4** for utility-first styling
- **Vitest** for unit testing with React Testing Library
- **ESLint** with TypeScript and React rules
- **Dark mode** implementation example with theme context
- **Arrow function** components by default
- **100% test coverage** example with all components tested

## Features

### Pre-configured Testing

- Vitest with jsdom environment
- React Testing Library setup
- Example tests for all components and hooks
- Coverage reporting with `yarn test:coverage`

### Dark Mode Ready

Complete dark mode implementation using React Context and Tailwind CSS, including localStorage persistence.

### TypeScript First

Strict TypeScript configuration with project references for optimal type checking and IDE performance.

### Modern Stack

All dependencies are up-to-date with the latest stable versions of React, Vite, Tailwind CSS, and testing libraries.

## Available Scripts

In the generated project, you can run:

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn test` - Run tests in watch mode
- `yarn test:ui` - Run tests with interactive UI
- `yarn test:coverage` - Run tests with coverage report

## Requirements

- Node.js 18.0.0 or higher

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
