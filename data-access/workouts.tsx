import { db } from "@/db";
import { sql } from "drizzle-orm";
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
      averageCaloriesBurned: sql`ROUND(AVG(${workouts.caloriesBurned}), 0)`
        .mapWith(Number)
        .as("averageCaloriesBurned"),
    })
    .from(workouts)
    .groupBy(sql`${workouts.workoutType}`);
}

export async function getWorkoutsForLastMonth() {
  //TODO: Implement this function
}
