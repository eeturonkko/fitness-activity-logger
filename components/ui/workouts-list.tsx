import { Workout } from "@/db/schema";
import WorkoutCard from "../cards/workout-card";

type WorkoutsListProps = {
  workouts: Workout[];
};

function WorkoutsList({ workouts }: WorkoutsListProps) {
  return (
    <div className="w-full max-w-3xl space-y-4 hover:">
      <h1>Your latest workouts</h1>
      {workouts.length === 0 && (
        <p>You haven&apos;t created any workouts yet.</p>
      )}
      {workouts.map((workout) => (
        <WorkoutCard key={workout.workoutId} {...workout} />
      ))}
    </div>
  );
}

export default WorkoutsList;
