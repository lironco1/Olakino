import { Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import { api } from "../../../store/api";
import ExerciseList from "./ExerciseList";

const DailyWorkout = () => {
  const [dailyWorkout, setDailyWorkout] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDailyWorkout();
  }, []);

  const getDailyWorkout = () => {
    api.get("/workouts/daily").then((daily_workout) => {
      setDailyWorkout(daily_workout);
      setLoading(false);
    });
  };

  return (
    <Container className="pt-2">
      <Row className="mt-5">
        {loading ? "Loading..." : <ExerciseList data={dailyWorkout} />}
      </Row>
    </Container>
  );
};

export default DailyWorkout;
