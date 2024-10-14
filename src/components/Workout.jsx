import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout(props) {
  const { workout } = props;
  return (
    // Your Sweat. Your Glory. Welcome to the Battlefield!
    <SectionWrapper
      id={"workout"}
      header={" Your Sweat. Your Glory."}
      title={["Welcome to the Battlefield!"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard i={i} exercise={exercise} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
