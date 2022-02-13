import React, { useEffect } from "react";

//  ANIMATION

// react plugin used to create DropdownMenu for selecting items
import "assets/animations/typewriter.css";
import "assets/animations/profilecards.css";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import HomePageHeader from "components/Headers/HomePageHeader";
import NavigationBar from "components/Navbars/NavigationBar";
import Features from "components/Sections/Features";
import initPageBody from "utils/initPageBody";
import activateAnimation from "utils/typewriterAnimation";

function HomePage() {
  useEffect(() => {
    initPageBody("about-us");
    activateAnimation();
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="wrapper mx-auto">
        <HomePageHeader />
        <div className="section">
          <div className="about-description">
            <Container>
              <Row>
                <Col lg="8" style={{ fontSize: "1.1em" }}>
                  <h1 className="title text-break">
                    OLAKINO is a platform for personalized
                    <span className="d-block d-sm-none">
                      Workouts, Nutrition and Tips
                    </span>
                    <span className="font-weight-bold text-success d-none d-sm-block">
                      <a
                        href="/#"
                        className="typewrite font-weight-bold text-success line-1 anim-typewriter"
                        data-period="1800"
                        data-type='[ " WORKOUTS.", " TIPS.", " NUTRITION."]'
                      >
                        <span className="wrap" />
                      </a>
                    </span>
                  </h1>
                </Col>
                <Col lg="4">
                  <div className="animation-img-header" />
                </Col>
              </Row>
            </Container>
            <Features />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
