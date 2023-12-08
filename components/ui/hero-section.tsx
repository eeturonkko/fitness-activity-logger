import Image from "next/image";
import HeroPicture from "@/assets/hero-fitness-photo.jpg";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section>
      <main className=" bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
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
              className="rounded-xl shadow-lg drop-shadow-2xl"
              src={HeroPicture}
              placeholder="blur"
              //objectFit="cover"
              width="550"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
