import AddNewWorkoutForm from "@/components/ui/add-new-workout-form";
import WorkoutCard from "@/components/cards/workout-card";
import { getAllWorkouts } from "@/data-access/workouts";

async function WorkoutsPage() {
  const workouts = await getAllWorkouts();
  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-4">
      <AddNewWorkoutForm />
      <div className="w-full max-w-3xl space-y-4">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.workoutId} {...workout} />
        ))}
      </div>
    </div>
  );
}

export default WorkoutsPage;
