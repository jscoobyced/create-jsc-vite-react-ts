#!/usr/bin/env node

import { execSync } from 'child_process'
import fs from 'fs-extra'
import path from 'path'
import { fileURLToPath } from 'url'
import prompts from 'prompts'
import chalk from 'chalk'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const run = async () => {
  console.log(chalk.bold.cyan('\n🚀 Create React + TypeScript + Vite App\n'))

  const args = process.argv.slice(2)
  let projectName = args[0]

  if (!projectName) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'What is your project named?',
      initial: 'my-app',
      validate: (value) => {
        if (!value) return 'Project name is required'
        if (!/^[a-z0-9-_]+$/.test(value)) {
          return 'Project name can only contain lowercase letters, numbers, hyphens, and underscores'
        }
        return true
      },
    })

    if (!response.projectName) {
      console.log(chalk.red('\n✖ Project creation cancelled\n'))
      process.exit(1)
    }

    projectName = response.projectName
  }

  const targetDir = path.resolve(process.cwd(), projectName)

  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`\n✖ Directory ${projectName} already exists\n`))
    process.exit(1)
  }

  console.log(chalk.blue(`\n📁 Creating project in ${targetDir}...\n`))

  const templateDir = path.resolve(__dirname, '../template')
  fs.copySync(templateDir, targetDir, {
    filter: (src) => {
      const basename = path.basename(src)
      return !['node_modules', 'dist', 'coverage', '.claude', 'plan.md', 'CLAUDE.md', 'yarn.lock'].includes(basename)
    },
  })

  const packageJsonPath = path.join(targetDir, 'package.json')
  const packageJson = fs.readJsonSync(packageJsonPath)
  packageJson.name = projectName
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 })

  console.log(chalk.green('✓ Project files created'))

  const packageManager = await detectPackageManager()

  console.log(chalk.blue(`\n📦 Installing dependencies with ${packageManager}...\n`))

  try {
    execSync(`${packageManager} install`, {
      cwd: targetDir,
      stdio: 'inherit',
    })
    console.log(chalk.green('\n✓ Dependencies installed'))
  } catch (error) {
    console.log(chalk.yellow('\n⚠ Failed to install dependencies automatically'))
    console.log(chalk.yellow(`  Please run "${packageManager} install" manually\n`))
  }

  console.log(chalk.bold.green('\n✨ Success! Your project is ready.\n'))
  console.log(chalk.bold('Next steps:\n'))
  console.log(chalk.cyan(`  cd ${projectName}`))
  console.log(chalk.cyan(`  ${packageManager} dev`))
  console.log()
}

const detectPackageManager = async () => {
  const userAgent = process.env.npm_config_user_agent || ''

  if (userAgent.startsWith('yarn')) return 'yarn'
  if (userAgent.startsWith('pnpm')) return 'pnpm'

  const response = await prompts({
    type: 'select',
    name: 'packageManager',
    message: 'Which package manager do you want to use?',
    choices: [
      { title: 'npm', value: 'npm' },
      { title: 'yarn', value: 'yarn' },
      { title: 'pnpm', value: 'pnpm' },
    ],
    initial: 0,
  })

  return response.packageManager || 'npm'
}

run().catch((error) => {
  console.error(chalk.red('\n✖ An error occurred:\n'))
  console.error(error)
  process.exit(1)
})
