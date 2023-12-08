import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 mt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400">
            © 2024 Fitness Activity Logger
          </div>
          <nav className="space-x-4">
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
