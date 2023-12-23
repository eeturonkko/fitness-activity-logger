import AddNewWorkoutForm from "@/components/ui/add-new-workout-form";
import WorkoutsList from "@/components/ui/workouts-list";

async function WorkoutsPage() {
  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-4 bg-gray-100">
      <AddNewWorkoutForm />
      <WorkoutsList />
    </div>
  );
}

export default WorkoutsPage;
