"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import SubmitButton from "./submit-button";
import { createNewWorkoutAction } from "@/actions/workoutActions";

function AddNewWorkoutForm() {
  //* Form submission handler
  async function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    await createNewWorkoutAction(formData);
    form.reset();
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Workouts</h1>
      <form
        className="w-full max-w-md bg-white shadow rounded-lg p-6 space-y-4"
        onSubmit={handleOnSubmit}
      >
        <div className="space-y-2">
          <Label htmlFor="workout-type">Workout Type</Label>
          <Input
            id="workout-type"
            name="workout-type"
            placeholder="Push day, Pull day etc..."
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="duration">Duration (in minutes)</Label>
          <Input
            id="duration"
            name="duration"
            min="0"
            placeholder="60"
            required
            type="number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="calories">Calories burned</Label>
          <Input
            id="calories"
            name="calories"
            min="0"
            placeholder="0"
            required
            type="number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" required type="date" />
        </div>
        <SubmitButton />
      </form>
    </>
  );
}

export default AddNewWorkoutForm;
