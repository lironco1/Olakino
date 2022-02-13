import { Col, Row } from "reactstrap";
import Workout from "./Workout/Workout";
import "../Recipes/Recipes.css";
import React, { useEffect, useState } from "react";
import SearchBarInput from "../Inputs/SearchBarInput";
import Pagination from "../Pagination/Pagination";

const Workouts = (props) => {
  const [searchWorkout, setSearchWorkout] = useState("");

  const [allWorkouts, setAllWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize all workouts from API - only once
  useEffect(() => {
    setAllWorkouts(props.workoutsList);
  }, []);

  // When allWorkouts are loaded and after each change of input
  useEffect(() => {
    const isMatching = (val) => {
      if (searchWorkout === "") return true;
      return val.name.toLowerCase().includes(searchWorkout.toLowerCase());
    };

    const filtered_workouts = allWorkouts.filter((val) => {
      return isMatching(val) ? val : null;
    });
    setFilteredWorkouts(filtered_workouts);
  }, [allWorkouts, searchWorkout]);

  const workoutCards = filteredWorkouts.slice(0, 18).map((workout, index) => (
    <Col lg="4" className="my-2" key={index}>
      <Workout index={index} workout={workout} />
    </Col>
  ));

  const saveWorkoutSearchText = (value) => {
    setSearchWorkout(value);
  };

  return (
    <>
      <SearchBarInput onSearch={saveWorkoutSearchText} />
      <Row className="row-border-solid p-5 rounded">{workoutCards}</Row>
      <Pagination
        style={{ marginTop: "1rem" }}
        currentPage={currentPage}
        totalCount={100}
        pageSize={3}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default Workouts;
