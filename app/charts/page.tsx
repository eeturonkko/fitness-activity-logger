import CaloriesBurnedBarChart from "@/components/charts/calories-burned-bar-chart";
import { getWorkoutTypeAndCaloriesBurned } from "@/data-access/workouts";

async function ChartsPage() {
  const workouts = await getWorkoutTypeAndCaloriesBurned();
  console.log(workouts);

  return (
    <div className="container h-screen">
      <div className="flex justify-center border border-red-500">
        <CaloriesBurnedBarChart data={workouts} />
      </div>
    </div>
  );
}

export default ChartsPage;
