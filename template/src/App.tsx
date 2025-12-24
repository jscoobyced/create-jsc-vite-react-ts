import { ThemeToggle } from './components/ThemeToggle'
import { Footer } from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <ThemeToggle />
      <main className="grow flex items-center justify-center">
        <h1 className="text-4xl text-gray-900 dark:text-white font-family-sans">
          Hello World
        </h1>
      </main>
      <Footer />
    </div>
  );
}

export default App
