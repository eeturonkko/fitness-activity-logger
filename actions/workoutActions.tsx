"use server";
import { workouts } from "@/db/schema";
import { db } from "@/db";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createNewWorkoutAction(formData: FormData) {
  //* Schema for form data validation
  const workoutSchema = z.object({
    workoutType: z.string(),
    workoutDate: z.string(),
    duration: z.string(),
    caloriesBurned: z.string(),
  });
  //* Parse form data
  const parsedWorkoutData = workoutSchema.parse({
    workoutType: formData.get("workout-type"),
    workoutDate: formData.get("date"),
    duration: formData.get("duration"),
    caloriesBurned: formData.get("calories"),
  });

  //* Insert parsed data to database
  await db.insert(workouts).values(parsedWorkoutData);
  revalidatePath("/workouts");
}

export async function deleteWorkoutAction(workoutId: number) {
  await db.delete(workouts).where(eq(workouts.workoutId, workoutId));
  revalidatePath("/workouts");
}
