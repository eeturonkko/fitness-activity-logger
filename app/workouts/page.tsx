import AddNewWorkoutForm from "@/components/ui/add-new-workout-form";
import WorkoutsList from "@/components/ui/workouts-list";
import { getLastFourWorkouts } from "@/data-access/workouts";

async function WorkoutsPage() {
  const workouts = await getLastFourWorkouts();

  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-4 bg-gray-100">
      <AddNewWorkoutForm />
      <WorkoutsList workouts={workouts} />
    </div>
  );
}

export default WorkoutsPage;
