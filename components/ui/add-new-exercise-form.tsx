import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function AddNewExerciseForm() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Add Exercise</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="exercise-name">Exercise Name</Label>
          <Input id="exercise-name" placeholder="Squats" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sets">Sets</Label>
          <Input id="sets" placeholder="3" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reps">Reps</Label>
          <Input id="reps" placeholder="12" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight</Label>
          <Input id="weight" placeholder="80" required />
        </div>
      </div>
      <Button className="w-full rounded" type="submit">
        Add Exercise
      </Button>
    </section>
  );
}

export default AddNewExerciseForm;
