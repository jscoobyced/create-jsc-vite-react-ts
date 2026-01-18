# React + TypeScript + Vite Starter

A modern React application scaffolding with TypeScript, Vite, Tailwind CSS, and testing pre-configured.

## What's Included

- **React 19** with TypeScript
- **Vite 7** for blazing-fast development and builds
- **Tailwind CSS 4** for utility-first styling
- **Vitest** for unit testing with React Testing Library
- **ESLint** with TypeScript and React rules
- **Dark mode** implementation example with theme context
- **Arrow function** components by default

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Development

Start the development server with hot module replacement:

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view your app.

### Build

Create a production build:

```bash
yarn build
```

Preview the production build locally:

```bash
yarn preview
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn test` - Run tests in watch mode
- `yarn test:ui` - Run tests with interactive UI
- `yarn test:coverage` - Run tests with coverage report

## Project Structure

```
src/
├── components/       # React components
├── contexts/         # React contexts and providers
├── hooks/           # Custom React hooks
├── test/            # Test setup and utilities
├── App.tsx          # Main application component
└── main.tsx         # Application entry point
```

## Key Features

### Dark Mode

The template includes a complete dark mode implementation using React Context and Tailwind CSS. Toggle between light and dark themes with the button in the top-right corner.

### Testing

All components and hooks include example tests demonstrating best practices with Vitest and React Testing Library. Run `yarn test:coverage` to see your test coverage.

### TypeScript

Strict TypeScript configuration with project references for optimal type checking and IDE performance.

## Next Steps

1. Update `package.json` with your project name and details
2. Customize the theme colors in your Tailwind configuration
3. Replace the example content in `App.tsx` with your application
4. Add your routes, state management, and API integration
5. Update this README with your project-specific information

## Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vitest Documentation](https://vitest.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
