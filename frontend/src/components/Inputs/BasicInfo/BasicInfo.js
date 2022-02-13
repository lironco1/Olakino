import { Col, Row } from "reactstrap";
import AgeInput from "./AgeInput";
import GenderInput from "./GenderInput";
import HeightInput from "./HeightInput";
import WeightInput from "./WeightInput";

function BasicInfo({ control }) {
  return (
    <>
      <Row className="mb-3">
        <Col>
          <AgeInput control={control} />
        </Col>
        <Col>
          <GenderInput control={control} />
        </Col>
      </Row>
      <Row>
        <Col>
          <HeightInput control={control} />
        </Col>
        <Col>
          <WeightInput control={control} />
        </Col>
      </Row>
    </>
  );
}

export default BasicInfo;
