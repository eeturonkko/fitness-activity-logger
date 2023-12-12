import { db } from "@/db";
import { avg, sql } from "drizzle-orm";
import { workouts } from "@/db/schema";

export async function getAllWorkouts() {
  return await db.query.workouts.findMany();
}

export async function getLastFourWorkouts() {
  return await db.query.workouts.findMany({
    orderBy: (workouts, { desc }) => [desc(workouts.workoutDate)],
    limit: 4,
  });
}

export async function getWorkoutTypeAndCaloriesBurned() {
  return await db
    .select({
      workoutType: workouts.workoutType,
      caloriesBurned: avg(workouts.caloriesBurned),
    })
    .from(workouts);
}
