import React from "react";
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import { WORKOUT_NAME } from "store/workoutName";

function ExerciseList({ data }) {
  const cardio = data.cardio;
  const running = cardio.running;
  const gym = data.gym;
  return (
    <>
      <Container className="pt-2">
        <Row>
          <Col lg="12">
            <Card className="h-100 card-border-solid">
              {cardio ? (
                <>
                  <CardTitle className="m-4" tag="h2">
                    CARDIO
                  </CardTitle>
                  {running ? (
                    <>
                      <CardTitle className="px-5" tag="h3">
                        RUNNING
                      </CardTitle>
                      <CardBody className="text-black px-5">
                        <p className="mb-1">{`Warm up  : ${running.warm_up}`}</p>
                        <p className="mb-1">{`Intervals : ${running.intervals}`}</p>
                        <p className="mb-1">{`Cool Down : ${running.cool_down}`}</p>
                        <p className="mb-1">{`Total Time : ${running.total_time}`}</p>
                      </CardBody>
                    </>
                  ) : (
                    <>
                      <CardBody className="text-black px-5">
                        <p className="mb-1">{`Plan  : ${cardio.plan}`}</p>
                        <p className="mb-1">{`Total Time : ${cardio.total_time}`}</p>
                      </CardBody>
                    </>
                  )}
                </>
              ) : (
                ""
              )}
              {gym ? (
                <>
                  <CardTitle className="m-4" tag="h2">
                    GYM
                  </CardTitle>
                  <CardTitle className="px-5" tag="h3">
                    {WORKOUT_NAME[gym.name]}
                  </CardTitle>
                  <CardBody className="text-black px-5">
                    {Object.keys(gym.workout).map((key, index) => (
                      <>
                        <p className="mb-1">{`Category  : ${gym.workout[key].category}`}</p>
                        <p className="mb-1">{`Name  : ${gym.workout[key].name}`}</p>
                        <p className="mb-1">{`Sets  : ${gym.workout[key].sets}`}</p>
                        <p className="mb-1">{`Reps  : ${gym.workout[key].reps}`}</p>
                        <p className="mb-1">{`Description  : ${gym.workout[key].description}`}</p>
                      </>
                    ))}
                  </CardBody>
                </>
              ) : (
                ""
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ExerciseList;
