import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import {
  Alert,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  NavItem,
} from "reactstrap";

import { api } from "store/api";
import AuthContext from "store/auth-context";

function LoginForm({ onError }) {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const emailRegexPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        authCtx.login(response.data["access_token"]);
        history.replace("/profile-page");
      })
      .catch((error) => {
        if (!!error.response?.data["errorMessage"]) {
          // error.response.data.errorMessage
          onError("Incorrect Email");
        } else {
          onError(error.message);
        }
      });
  };

  return (
    <Form className="form" onSubmit={handleSubmit(onSubmit)}>
      <CardHeader className="text-center my-5">
        <div>
          <img alt="..." src={require("assets/img/logos/login.png").default} />
        </div>
      </CardHeader>
      <CardBody>
        <InputGroup
          className={"input-lg" + (emailFocus ? " input-group-focus" : "")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons ui-1_email-85" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            className="login"
            {...register("email", {
              pattern: {
                value: emailRegexPattern,
                message: "Please enter a valid email",
              },
            })}
            placeholder="Email"
            type="email"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            required
          />
        </InputGroup>
        <InputGroup
          className={"input-lg" + (passwordFocus ? " input-group-focus" : "")}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="now-ui-icons ui-1_lock-circle-open" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            className="login"
            {...register("password", {
              minLength: {
                value: 5,
                message: "Password must have at least 5 characters!",
              },
            })}
            placeholder="Password"
            type="password"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            required
          />
        </InputGroup>
        {errors.password && (
          <Alert color="danger">{errors.password.message}</Alert>
        )}
        {errors.email && <Alert color="danger">{errors.email.message}</Alert>}
      </CardBody>
      <CardFooter className="text-center">
        <Button block className="btn-round" color="success" size="lg">
          Login
        </Button>
      </CardFooter>
      <div className="pull-left">
        <NavItem tag={Link} to="/sign-up" className="link footer-link">
          <h6>Create Account</h6>
        </NavItem>
      </div>
      <div className="pull-right">
        <NavItem tag={Link} to="/contact-us" className="link footer-link">
          <h6>Need Help?</h6>
        </NavItem>
      </div>
    </Form>
  );
}

export default LoginForm;
