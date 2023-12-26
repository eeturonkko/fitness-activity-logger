import AddNewWorkoutForm from "@/components/ui/add-new-workout-form";
import WorkoutsList from "@/components/ui/workouts-list";
import { PaginationControls } from "@/components/ui/pagination-controls";
import { getAllWorkouts } from "@/data-access/workouts";

async function WorkoutsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const itemsPerPage = searchParams["per_page"] ?? "4";
  const workouts = await getAllWorkouts(
    parseInt(page as string),
    parseInt(itemsPerPage as string)
  );

  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-4 bg-gray-100">
      <AddNewWorkoutForm />
      <WorkoutsList workouts={workouts} />
      <PaginationControls />
    </div>
  );
}

export default WorkoutsPage;
