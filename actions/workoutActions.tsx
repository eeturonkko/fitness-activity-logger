"use server";
import { z } from "zod";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { workouts } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createNewWorkoutAction(formData: FormData) {
  //* Schema for form data validation
  const workoutSchema = z.object({
    workoutType: z.string(),
    workoutDate: z.string(),
    duration: z.string(),
    caloriesBurned: z.number(),
  });
  //* Parse form data
  const parsedWorkoutData = workoutSchema.parse({
    workoutType: formData.get("workout-type"),
    workoutDate: formData.get("date"),
    duration: formData.get("duration"),
    caloriesBurned: Number(formData.get("calories")),
  });

  //* Insert parsed data to database
  await db.insert(workouts).values(parsedWorkoutData);

  //* Revalidate the workouts page
  revalidatePath("/workouts");
}

export async function deleteWorkoutAction(workoutId: number) {
  //* Delete workout from database
  await db.delete(workouts).where(eq(workouts.workoutId, workoutId));

  //* Revalidate the workouts page
  revalidatePath("/workouts");
}
