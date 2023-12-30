import React from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ExerciseProps = {
  name: string;
  description: string;
  sets: number;
  reps: number;
  weight: number;
};

function ExerciseCard({
  name,
  description,
  sets,
  reps,
  weight,
}: ExerciseProps) {
  return (
    <Card className="rounded">
      <CardHeader className="pb-4">
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>
          {sets} sets of {reps} reps at {weight} kg
        </CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-2">
        <Button variant="outline" className="rounded">
          Edit
        </Button>
        <Button variant="outline" className="rounded">
          Delete
        </Button>
      </CardContent>
    </Card>
  );
}

export default ExerciseCard;
