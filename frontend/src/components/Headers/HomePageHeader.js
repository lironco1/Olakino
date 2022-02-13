import React from "react";

// reactstrap components
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import useParallaxEffect from "../../utils/applyParallaxEffect";

// core components

function HomePageHeader() {
  let pageHeader = React.createRef();

  useParallaxEffect(pageHeader);

  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/home-page-header-bg.jpg")
                .default +
              ")",
          }}
          ref={pageHeader}
        />
        <div className="content-center">
          <Row>
            <Col className="ml-auto mr-auto" md="12">
              <h1 className="title">Olakino</h1>
              <h4>
                Confused with the variety of conflicting
                <br /> information about nutrition and workout routines? <br />
                Olakino helps you make sense of it all!
              </h4>
              <Link to="sign-up">
                <button className="btn btn-primary btn-lg">Join Now!</button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default HomePageHeader;
