import React from "react";
// reactstrap components
import { useHistory } from "react-router-dom";

import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import NavigationBar from "components/Navbars/NavigationBar";
import Parser from "html-react-parser";

import Footer from "components/Footers/Footer";
import Muscle from "./Muscle";

function WorkoutData(props) {
  useHistory();
  return (
    <>
      <NavigationBar />
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/backgrounds/bg18.jpg").default + ")",
          }}
        />
        <div className="content p-5">
          <Card className="w-75 card-border-solid text-black">
            <CardTitle tag="h1">
              {props.location.state.workoutData.name}
            </CardTitle>
            <CardBody>
              {props.location.state.workoutData["equipment"].length > 0 && (
                <div className="p-3">
                  <h2 className="text-left">Equipment:</h2>
                  <ul className="ml-5 p-0">
                    {props.location.state.workoutData["equipment"].map(
                      (element, index) => (
                        <li key={index} className="text-left">
                          {element.name}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
              {props.location.state.workoutData["muscles"].length > 0 && (
                <div className="p-3">
                  <h2 className="text-left">Muscles:</h2>
                  <Row className="mb-2">
                    <Col sm="1" />
                    {props.location.state.workoutData["muscles"].map(
                      (muscle, index) => (
                        <Muscle key={index} index={index} muscle={muscle} />
                      )
                    )}
                  </Row>
                </div>
              )}
              <Row>
                <Card className="p-3 mx-5 text-left">
                  <CardTitle tag="h3">Description:</CardTitle>
                  <strong className="text-left text-black">
                    {Parser(props.location.state.description)}
                  </strong>
                </Card>
              </Row>
            </CardBody>
          </Card>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WorkoutData;
