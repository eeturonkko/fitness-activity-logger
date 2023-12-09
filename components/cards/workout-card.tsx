import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Workout } from "@/db/schema";

function WorkoutCard({
  workoutType,
  workoutDate,
  duration,
  caloriesBurned,
}: Workout) {
  const formattedDate = new Date(workoutDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{workoutType}</CardTitle>
            <div>X</div>
          </div>
          <div className="flex items-center justify-between">
            <Badge className="text-sm">{duration} minutes</Badge>

            <span className="text-sm text-gray-500">{formattedDate}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">
            You burned {caloriesBurned} calories during your last workout!
          </p>
        </CardContent>
      </Card>
    </>
  );
}

export default WorkoutCard;
