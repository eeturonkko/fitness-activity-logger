CREATE TABLE IF NOT EXISTS "workouts" (
	"workoutId" serial PRIMARY KEY NOT NULL,
	"workoutType" text,
	"workoutDate" date,
	"duration" text,
	"caloriesBurned" integer
);
