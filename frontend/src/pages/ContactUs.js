import React from "react";

// reactstrap components
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

// core components
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import NavigationBar from "components/Navbars/NavigationBar";
import initPageBody from "utils/initPageBody";
import ContactForm from "components/Forms/ContactForm";

function ContactUs() {
  React.useEffect(() => {
    initPageBody("contact-page");
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Send us a message</h2>
                  <p className="description">
                    You can contact us with anything related to our Product.
                    We'll get in touch with you as soon as possible. <br />
                    <br />
                  </p>
                  <ContactForm />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
