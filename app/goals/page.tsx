import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ExerciseCard from "@/components/cards/exercise-card";
import AddNewExerciseForm from "@/components/ui/add-new-exercise-form";

export default function GoalsPage() {
  return (
    <main className="p-4 md:p-6 space-y-4 container">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Fitness Tracker</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Add your exercises and track your progress
        </p>
      </section>
      <AddNewExerciseForm />
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Your Exercises</h2>
        <ExerciseCard
          name="Incline chest press"
          description="incline chest press machine is nice"
          reps={5}
          weight={55}
          sets={3}
        />
      </section>
      {/* <section className="space-y-4">
        <h2 className="text-2xl font-bold">Your Progress</h2>
        <CurvedlineChart className="w-full aspect-[2/1]" />
      </section> */}
    </main>
  );
}
