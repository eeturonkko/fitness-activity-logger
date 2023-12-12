import { serial, text, pgTable, date, integer } from "drizzle-orm/pg-core";

export const workouts = pgTable("workouts", {
  workoutId: serial("workoutId").primaryKey(),
  workoutType: text("workoutType").notNull(),
  workoutDate: date("workoutDate").notNull(),
  duration: text("duration").notNull(),
  caloriesBurned: integer("caloriesBurned").notNull(),
});

export type Workout = typeof workouts.$inferSelect;
