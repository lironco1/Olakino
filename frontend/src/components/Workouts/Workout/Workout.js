import { Container } from "reactstrap";
import "components/Recipes/Recipes.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { api } from "store/api";
import "./workout.css";

const Workout = (props) => {
  const history = useHistory();

  const handleShowExercise = (e) => {
    e.preventDefault();

    api.get("/exercise/" + props.workout.id).then((workout_data) => {
      const location = {
        pathname: "/workout-data",
        state: {
          workoutData: workout_data.data,
          description: props.workout.description,
        },
      };
      history.push(location);
    });
  };
  return (
    <Container className="workout-short-pill">
      <p className="m-0 font-weight-bold">
        <a className="text-black" href="/#" onClick={handleShowExercise}>
          {props.workout.name}
        </a>
      </p>
    </Container>
  );
};

export default Workout;
