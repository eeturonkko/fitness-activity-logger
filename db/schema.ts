import { serial, text, pgTable, date, integer } from "drizzle-orm/pg-core";

export const workouts = pgTable("workouts", {
  workoutId: serial("workoutId").primaryKey(),
  workoutType: text("workoutType"),
  workoutDate: date("workoutDate"),
  duration: text("duration"),
  caloriesBurned: integer("caloriesBurned"),
});

export type Workout = typeof workouts.$inferSelect;
