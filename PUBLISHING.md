# Publishing Guide

This guide explains how to publish this create-app package to npm.

## Prerequisites

1. **npm account**: Create one at [npmjs.com](https://www.npmjs.com/signup) if you don't have one
2. **npm CLI**: Make sure you have npm installed (comes with Node.js)
3. **Authentication**: Log in to npm from your terminal

```bash
npm login
```

## Pre-Publishing Checklist

Before publishing, ensure:

1. **Update package.json**:

   - Change the `name` to something unique (check availability on npm)
   - Update `version` following [semver](https://semver.org/)
   - Update `author` with your information
   - Update `repository`, `bugs`, and `homepage` URLs with your GitHub repo

2. **Test locally**:

   ```bash
   # Link the package locally
   npm link

   # Test creating a new project
   cd /tmp
   npm create jsc-vite-react-ts test-app

   # Verify the generated project works
   cd test-app
   yarn install
   yarn dev
   yarn test
   yarn build

   # Clean up
   cd ..
   rm -rf test-app
   ```

3. **Review what will be published**:
   ```bash
   npm pack --dry-run
   ```

## Publishing to npm

### First Time Publishing

1. Make sure you're logged in:

   ```bash
   npm whoami
   ```

2. Publish the package:
   ```bash
   npm publish
   ```

### Updating an Existing Package

1. Update the version in `package.json`:

   ```bash
   npm version patch  # for bug fixes (1.0.0 -> 1.0.1)
   npm version minor  # for new features (1.0.0 -> 1.1.0)
   npm version major  # for breaking changes (1.0.0 -> 2.0.0)
   ```

2. Publish the new version:
   ```bash
   npm publish
   ```

## After Publishing

1. **Test the published package**:

   ```bash
   npm create jsc-vite-react-ts my-test-app
   ```

2. **Create a Git tag** (if not done automatically by `npm version`):

   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

3. **Update documentation**:
   - Add release notes on GitHub
   - Update README if needed

## Package Name Considerations

The package name `create-jsc-vite-react-ts` allows users to run:

```bash
npm create jsc-vite-react-ts my-app
```

If you want a different command, change the package name to `create-<your-name>`.

For example:

- `create-my-app` → `npm create my-app`
- `create-awesome-react` → `npm create awesome-react`

## Scoped Packages

To publish under your npm username scope:

```json
{
  "name": "@yourusername/create-jsc-vite-react-ts"
}
```

Then publish with:

```bash
npm publish --access public
```

Users would run:

```bash
npm create @yourusername/jsc-vite-react-ts my-app
```

## Best Practices

1. **Semantic Versioning**: Follow semver strictly
2. **Changelog**: Maintain a CHANGELOG.md file
3. **Git Tags**: Tag each release in Git
4. **CI/CD**: Consider automating releases with GitHub Actions
5. **Testing**: Always test before publishing

## Unpublishing (Emergency Only)

If you need to unpublish within 72 hours:

```bash
npm unpublish create-jsc-vite-react-ts@1.0.0
```

**Note**: Unpublishing is discouraged. Use `npm deprecate` instead for older versions:

```bash
npm deprecate create-jsc-vite-react-ts@1.0.0 "Please use version 1.0.1 or higher"
```
