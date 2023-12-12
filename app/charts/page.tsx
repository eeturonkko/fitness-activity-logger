import CaloriesBurnedBarChart from "@/components/charts/calories-burned-bar-chart";
import { getWorkoutTypeAndCaloriesBurned } from "@/data-access/workouts";
import { unstable_noStore } from "next/cache";

const dynamic = "force-dynamic";

async function ChartsPage() {
  const workouts = await getWorkoutTypeAndCaloriesBurned();

  return (
    <div className="container h-screen">
      <section className="flex flex-col mt-4 items-center justify-start w-1/2 ">
        <h1 className="font-bold text-sm">
          Calories burned on average between different workouts
        </h1>
        <CaloriesBurnedBarChart data={workouts} />
      </section>
    </div>
  );
}

export default ChartsPage;
