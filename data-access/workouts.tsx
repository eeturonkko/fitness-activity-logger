import { db } from "@/db";

export async function getAllWorkouts() {
  return await db.query.workouts.findMany();
}

export async function getLastFourWorkouts() {
  return await db.query.workouts.findMany({
    orderBy: (workouts, { desc }) => [desc(workouts.workoutDate)],
    limit: 4,
  });
}
