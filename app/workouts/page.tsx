import AddNewWorkoutForm from "@/components/ui/add-new-workout-form";
import WorkoutCard from "@/components/cards/workout-card";
import { getLastFourWorkouts } from "@/data-access/workouts";

async function WorkoutsPage() {
  const workouts = await getLastFourWorkouts();

  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-4 bg-gray-100">
      <AddNewWorkoutForm />
      <div className="w-full max-w-3xl space-y-4">
        <h1>Your latest workouts</h1>
        {workouts.length === 0 && (
          <p>You haven&apos;t created any workouts yet.</p>
        )}
        {workouts.map((workout) => (
          <WorkoutCard key={workout.workoutId} {...workout} />
        ))}
      </div>
    </div>
  );
}

export default WorkoutsPage;
