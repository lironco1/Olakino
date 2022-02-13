import React, { useEffect, useState } from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import { Carousel } from "3d-react-carousal";
import Slide from "react-reveal/Slide";
import Tip from "./Tip";
import { api } from "store/api";

function CarouselTips() {
  const [firstTip, setFirstTip] = useState("");
  const [secondTip, setSecondTip] = useState("");
  const [thirdTip, setThirdTip] = useState("");

  useEffect(() => {
    api.get("/tips/daily").then((res) => {
      setFirstTip(res.data.tips[0]);
      setSecondTip(res.data.tips[1]);
      setThirdTip(res.data.tips[2]);
    });
  }, []);

  let tipObject = [
    {
      src: require("assets/img/Tips/tips-bg.png").default,
      caption: "Tip1",
      body: firstTip,
    },
    {
      src: require("assets/img/Tips/tips-bg.png").default,
      caption: "Tip2",
      body: secondTip,
    },
    {
      src: require("assets/img/Tips/tips-bg.png").default,
      caption: "Tip3",
      body: thirdTip,
    },
  ];

  let slides = [
    <Tip {...tipObject[0]} />,
    <Tip {...tipObject[1]} />,
    <Tip {...tipObject[2]} />,
  ];

  return (
    <>
      <div className="d-none d-lg-block">
        <Carousel slides={slides} />
      </div>
      {/* <div className="features-3 d-lg-none">
        <Container>
          <Row className="justify-content-center">
            <Slide left>
              <Col md="12">
                <div className="info">
                  <div className="icon icon-success icon-circle">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <h4 className="info-title">{tipObject[0].caption}</h4>
                  <p className="description">{tipObject[0].body}</p>
                </div>
              </Col>
            </Slide>
            <Slide right>
              <Col md="12">
                <div className="info">
                  <div className="icon icon-info icon-circle">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <h4 className="info-title">{tipObject[1].caption}</h4>
                  <p className="description">{tipObject[1].body}</p>
                </div>
              </Col>
            </Slide>
            <Slide bottom>
              <Col md="12">
                <div className="info">
                  <div className="icon icon-danger icon-circle">
                    <i className="now-ui-icons files_paper"></i>
                  </div>
                  <h4 className="info-title">{tipObject[2].caption}</h4>
                  <p className="description">{tipObject[2].body}</p>
                </div>
              </Col>
            </Slide>
          </Row>
        </Container>
      </div> */}
    </>
  );
}

export default CarouselTips;
