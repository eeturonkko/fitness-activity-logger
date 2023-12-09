import { db } from "@/db";

export async function getAllWorkouts() {
  return await db.query.workouts.findMany();
}
