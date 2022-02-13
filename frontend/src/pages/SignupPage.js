import React from "react";
import "assets/css/auto-complete.css";

// reactstrap components
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap";

// core components
import Footer from "components/Footers/Footer.js";
import initPageBody from "utils/initPageBody";
import NavigationBar from "../components/Navbars/NavigationBar";
import SignupForm from "../components/Forms/SignupForm";

function SignupPage() {
  React.useEffect(() => initPageBody("signup-page"), []);

  return (
    <>
      <NavigationBar />
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/signup-leaf-bg.jpg").default +
              ")",
          }}
        />
        <div className="content p-5">
          <Container>
            <Row>
              <Col className="mx-auto" lg="6">
                <Card className="card-signup px-3">
                  <CardBody>
                    <CardTitle className="text-center" tag="h1">
                      Signup
                    </CardTitle>
                    <SignupForm />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer pageName="sign up" />
      </div>
    </>
  );
}

export default SignupPage;
