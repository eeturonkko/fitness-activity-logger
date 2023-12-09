import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function WorkoutCard() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Running</CardTitle>
          <div className="flex items-center justify-between">
            <Badge className="text-sm">30 minutes</Badge>
            <span className="text-sm text-gray-500">2023-12-08</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">Great job on your workout!</p>
        </CardContent>
      </Card>
    </>
  );
}

export default WorkoutCard;
