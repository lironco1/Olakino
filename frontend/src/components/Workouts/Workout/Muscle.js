import { Col, UncontrolledTooltip } from "reactstrap";
import { getMuscleName } from "../../../utils/getMuscleName";
import React from "react";

function Muscle(props) {
  return (
    <Col xl="1" lg="2" md="3" sm="4">
      <img
        alt="muscle"
        id={"id" + props.index.toString()}
        style={{
          height: "50px",
          width: "50px",
          border: "2px solid green",
          borderRadius: "25px",
        }}
        src={
          require("assets/img/muscles/" +
            getMuscleName(props.muscle.id) +
            ".png").default
        }
      />
      <UncontrolledTooltip
        placement="top"
        target={"id" + props.index.toString()}
      >
        {getMuscleName(props.muscle.id)}
      </UncontrolledTooltip>
    </Col>
  );
}

export default Muscle;
