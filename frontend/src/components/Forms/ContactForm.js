import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

function ContactForm(props) {
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  return (
    <Form id="contact-form" method="post" role="form">
      <label>Your name</label>
      <InputGroup className={nameFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons users_circle-08" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          aria-label="Your Name..."
          autoComplete="name"
          placeholder="Your Name..."
          type="text"
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
        />
      </InputGroup>
      <label>Email address</label>
      <InputGroup className={emailFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons ui-1_email-85" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          aria-label="Email Here..."
          autoComplete="email"
          placeholder="Email Here..."
          type="email"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
      </InputGroup>
      <label>Phone</label>
      <InputGroup className={numberFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons tech_mobile" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          autoComplete="number"
          placeholder="Number Here..."
          type="text"
          onFocus={() => setNumberFocus(true)}
          onBlur={() => setNumberFocus(false)}
        />
      </InputGroup>
      <FormGroup>
        <label>Your message</label>
        <Input id="message" name="message" rows="6" type="textarea" />
      </FormGroup>
      <div className="submit text-center">
        <Button
          className="btn-raised btn-round"
          color="info"
          defaultValue="Contact Us"
          type="submit"
        >
          Contact Us
        </Button>
      </div>
    </Form>
  );
}

export default ContactForm;
