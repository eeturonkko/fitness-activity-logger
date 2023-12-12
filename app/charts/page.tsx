import CaloriesBurnedBarChart from "@/components/charts/calories-burned-bar-chart";
import { getWorkoutTypeAndCaloriesBurned } from "@/data-access/workouts";

async function ChartsPage() {
  const workouts = await getWorkoutTypeAndCaloriesBurned();

  return (
    <div className=" pt-6 h-screen bg-gray-100">
      <section className="flex flex-col items-center justify-start w-1/2">
        <h1 className="font-bold text-sm">
          Calories burned on average between different workouts
        </h1>
        <CaloriesBurnedBarChart data={workouts} />
      </section>
    </div>
  );
}

export default ChartsPage;
