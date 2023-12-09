"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full rounded-xl" type="submit">
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

export default SubmitButton;
