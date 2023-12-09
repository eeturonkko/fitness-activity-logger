import Link from "next/link";
import DumbbellIcon from "./dumbbell-icon";

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 shadow">
      <div className="flex items-center justify-around">
        <Link href="/">
          <DumbbellIcon className="w-8 h-8" />
          <span className="sr-only">Fitness Activity Logger</span>
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="/workouts"
          >
            Workouts
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Goals
          </Link>
        </div>
      </div>
    </header>
  );
}
