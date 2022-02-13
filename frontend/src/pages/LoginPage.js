import React, { useContext, useEffect } from "react";
import "assets/css/auto-complete.css";

// reactstrap components
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavItem,
  Row,
} from "reactstrap";

// core components
import NavigationBar from "components/Navbars/NavigationBar.js";
import Footer from "components/Footers/Footer.js";
import initPageBody from "utils/initPageBody";
import LoginForm from "../components/Forms/LoginForm";

function LoginPage() {
  const [errorMessage, setErrorMessage] = React.useState(
    "Wrong email or password, please try again"
  );

  useEffect(() => initPageBody("login-page"), []);

  return (
    <>
      <NavigationBar />
      <div className="page-header header-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/login-bg.jpg").default +
              ")",
          }}
        />
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                  <LoginForm onError={(error) => setErrorMessage(error)} />
                </Card>
                {errorMessage && (
                  <p className="text-danger">
                    <strong>{errorMessage}</strong>
                  </p>
                )}
              </Col>
            </Row>
          </Container>
        </div>
        <Footer pageName="Login" />
      </div>
    </>
  );
}

export default LoginPage;
