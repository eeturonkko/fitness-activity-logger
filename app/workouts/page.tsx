import AddNewWorkoutForm from "@/components/ui/add-new-workout-form";
import WorkoutsList from "@/components/ui/workouts-list";
import { PaginationControls } from "@/components/ui/pagination-controls";
import { getAllWorkouts, getWorkoutCount } from "@/data-access/workouts";

async function WorkoutsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = parseInt(searchParams.page as string) || 1;
  const workoutsPerPage = 4;

  const totalWorkouts = await getWorkoutCount();
  const totalPages = Math.ceil(Number(totalWorkouts) / Number(workoutsPerPage));

  const workouts = await getAllWorkouts(currentPage, workoutsPerPage);

  return (
    <div className="flex flex-col items-center mx-auto p-6 space-y-4 bg-gray-100">
      <AddNewWorkoutForm />
      <WorkoutsList workouts={workouts} />
      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}

export default WorkoutsPage;
