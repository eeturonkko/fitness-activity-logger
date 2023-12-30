import { createNewWorkoutAction } from "@/actions/workoutActions";
import { db } from "@/db";
import { workouts } from "@/db/schema";
import { revalidatePath } from "next/cache";

jest.mock("@/db");

describe("createNewWorkoutAction", () => {
  it("should insert data to the database and revalidate the page", async () => {
    // Arrange
    const mockFormData = new FormData();
    mockFormData.append("workout-type", "Running");
    mockFormData.append("date", "2022-01-01");
    mockFormData.append("duration", "30");
    mockFormData.append("calories", "200");

    const mockInsert = jest.fn();
    db.insert = mockInsert;

    const mockRevalidatePath = jest.spyOn({ revalidatePath }, "revalidatePath");
    mockRevalidatePath.mockImplementation(() => {});

    // Act
    await createNewWorkoutAction(mockFormData);

    // Assert
    expect(mockInsert).toHaveBeenCalledWith(expect.anything());
    expect(mockRevalidatePath).toHaveBeenCalledWith("/workouts");
    expect(mockInsert).toHaveBeenCalledTimes(1);
    expect(mockRevalidatePath).toHaveBeenCalledTimes(1);
  });
});
