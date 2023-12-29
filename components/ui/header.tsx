import Link from "next/link";
import DumbbellIcon from "./dumbbell-icon";

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-around">
        <Link href="/">
          <div className="flex items-center gap-4">
            <DumbbellIcon className="w-8 h-8" />
            <span className="sr-only">Fitness Activity Logger</span>
            <span className="text-lg font-semibold">Fitness Logger</span>
          </div>
        </Link>
        <div className="hidden sm:flex items-center space-x-4">
          <Link className="text-gray-500 hover:text-gray-900 " href="/workouts">
            Workouts
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 " href="/charts">
            Charts
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 " href="/goals">
            Goals
          </Link>
          <Link
            className="text-gray-500 hover:text-gray-900 "
            href="/exercises"
          >
            Exercises
          </Link>
        </div>
      </div>
    </header>
  );
}
