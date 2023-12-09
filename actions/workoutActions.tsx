"use server";
import { workouts } from "@/db/schema";
import { db } from "@/db";
import { useRef } from "react";

export async function createNewWorkoutAction(formData: FormData) {
  // TODO: Validate form data

  //* Insert form data values to object "workout"
  const workout = {
    workoutType: formData.get("workout-type") as string,
    workoutDate: formData.get("date") as string,
    duration: formData.get("duration") as string,
    caloriesBurned: formData.get("calories") as string,
  };

  //* Insert object "workout" to database
  await db.insert(workouts).values(workout);
}
