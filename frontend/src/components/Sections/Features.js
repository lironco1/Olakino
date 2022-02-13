import Rotate from "react-reveal/Rotate";
import { Container, Row, Col } from "reactstrap";

function Features() {
  return (
    <Rotate top>
      <div className="features-3">
        <Container>
          <Row>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-success icon-circle">
                  <i className="now-ui-icons sport_user-run" />
                </div>
                <h4 className="info-title">WORKOUTS</h4>
                <p className="description">
                  Get custom made workouts based on your preferences and current
                  physical condition.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-info icon-circle">
                  <i className="now-ui-icons ui-2_favourite-28" />
                </div>
                <h4 className="info-title">HEALTHY</h4>
                <p className="description">
                  Learn why and not only how with our personalized health tips.
                </p>
              </div>
            </Col>
            <Col md="4">
              <div className="info info-hover">
                <div className="icon icon-danger icon-circle">
                  <i className="now-ui-icons files_paper" />
                </div>
                <h4 className="info-title">RECIPES</h4>
                <p className="description">
                  Get recommended daily meals and recipes according to your diet
                  & medical parameters.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Rotate>
  );
}

export default Features;
