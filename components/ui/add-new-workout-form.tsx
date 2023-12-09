import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddNewWorkoutForm() {
  return (
    <>
      <h1 className="text-3xl font-bold">Workouts</h1>
      <form className="w-full max-w-md bg-white shadow rounded-lg p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="workout-type">Workout Type</Label>
          <Input id="workout-type" placeholder="Running" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Duration (in minutes)</Label>
          <Input
            id="duration"
            min="0"
            placeholder="30"
            required
            type="number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" required type="date" />
        </div>
        <Button className="w-full rounded-xl" type="submit">
          Add Workout
        </Button>
      </form>
    </>
  );
}

export default AddNewWorkoutForm;
