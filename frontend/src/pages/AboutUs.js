import React from "react";

// reactstrap components
import { Col, Container, Row } from "reactstrap";

// core components
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";
import NavigationBar from "components/Navbars/NavigationBar";
import TeamMember from "components/Cards/TeamMember";
import Fade from "react-reveal/Fade";
import initPageBody from "utils/initPageBody";

function AboutUs() {
  React.useEffect(() => {
    initPageBody("about-us");
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="about-description text-center" />
        <Container>
          <Row className="justify-content-center">
            <Col className="ml-1" md="4">
              <Fade top>
                <TeamMember
                  name="liron"
                  title="Liron Cohen"
                  role="Web developer"
                />
              </Fade>
            </Col>
            <Col className="mr-1" md="4">
              <Fade right>
                <TeamMember
                  name="tomer"
                  title="Tomer Wege"
                  role="Web developer"
                />
              </Fade>
            </Col>
            <Col className="ml-1 mt-4" md="4">
              <Fade bottom>
                <TeamMember
                  name="bar"
                  title="Bar Haran"
                  role="Backend developer"
                />
              </Fade>
            </Col>
            <Col className="mr-1 mt-4" md="4">
              <Fade left>
                <TeamMember
                  name="gal"
                  title="Gal Hay"
                  role="Backend developer"
                />
              </Fade>
            </Col>
          </Row>
        </Container>
        <Footer pageName="About Us" />
      </div>
    </>
  );
}

export default AboutUs;
