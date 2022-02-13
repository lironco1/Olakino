import React from "react";
// reactstrap components
import { api } from "../../store/api";
import { useHistory } from "react-router-dom";

import { Card, CardFooter, CardTitle, Col, Container, Row } from "reactstrap";

// core components
import NavigationBar from "components/Navbars/NavigationBar";

function WorkoutTypesMenu() {
  const history = useHistory();

  const replacePage = (workoutsList) => {
    const location = {
      pathname: "/specific-muscle",
      state: { workoutsList: workoutsList.data["exercises"] },
    };

    history.push(location);
  };

  const handleShowWorkouts = (e) => {
    e.preventDefault();

    api.get("/muscle_categories").then((workoutsList) => {
      const idList = workoutsList.data["muscle_categories"];
      let id = "";
      let url = "";
      idList.forEach((workout) => {
        if (workout.name === e.target.innerText) {
          id = workout.id;
          url = "/exercises/" + id;
        }
      });

      api.get(url).then((workoutsList) => replacePage(workoutsList));
    });
  };

  return (
    <>
      <NavigationBar />
      <div className="cd-section" id="testimonials">
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/backgrounds/sky.jpg").default + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Workout</h2>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/muscles/abs.jpg").default}
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Abs
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/muscles/arms.jpg").default}
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Arms
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/muscles/back.jpg").default}
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Back
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/muscles/calves.jpg").default}
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Calves
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/muscles/chest.jpg").default}
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Chest
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={
                          require("assets/img/muscles/legs_icon.png").default
                        }
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Legs
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="/#" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={
                          require("assets/img/muscles/shoulders.jpg").default
                        }
                      />
                    </a>
                  </div>
                  <CardFooter>
                    <CardTitle className="text-left" tag="div">
                      <h2>
                        <a href="/#" onClick={handleShowWorkouts}>
                          Shoulders
                        </a>
                      </h2>
                    </CardTitle>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default WorkoutTypesMenu;
