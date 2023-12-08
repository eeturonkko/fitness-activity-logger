import Link from "next/link";
import DumbbellIcon from "./dumbbell-icon";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Your Fitness, Your Way
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Track, analyze, and plan your fitness activities with the Fitness
              Activity Logger. Join us and take control of your fitness journey.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              alt="Fitness illustration"
              className="rounded-lg shadow-lg"
              height="400"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width="400"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
