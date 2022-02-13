import { Col, Row } from "reactstrap";
import GoalInput from "./GoalInput";
import MethodInput from "./MethodInput";
import WorkoutTypeInput from "./WorkoutTypeInput";
import FirstDayInput from "./FirstDayInput";
import FrequencyInput from "./FrequencyInput";
import LevelInput from "./LevelInput";

const WorkoutsInfo = ({ control }) => {
  return (
    <>
      <Row className="mb-3">
        <Col xl="4" lg="6" md="12">
          <GoalInput control={control} />
        </Col>
        <Col xl="4" lg="6" md="12">
          <MethodInput control={control} />
        </Col>
        <Col xl="4" lg="6" md="12">
          <WorkoutTypeInput control={control} />
        </Col>
        <Col xl="4" lg="6" md="12">
          <FrequencyInput control={control} />
        </Col>
        <Col xl="4" lg="6" md="12">
          <FirstDayInput control={control} />
        </Col>
        <Col xl="4" lg="6" md="12">
          <LevelInput control={control} />
        </Col>
      </Row>
    </>
  );
};

export default WorkoutsInfo;
