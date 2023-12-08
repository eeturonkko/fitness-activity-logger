import Link from "next/link";
import DumbbellIcon from "./dumbbell-icon";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 shadow">
      <div className="flex items-center justify-between">
        <Link href="#">
          <DumbbellIcon className="w-8 h-8" />
          <span className="sr-only">Fitness Activity Logger</span>
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Activities
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Goals
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Community
          </Link>
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </header>
  );
}
