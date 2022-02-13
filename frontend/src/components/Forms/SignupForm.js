import {
  Alert,
  Button,
  CardFooter,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/auth-context";
import { useForm } from "react-hook-form";
import { api } from "../../store/api";

function SignupForm() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const emailRegexPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    api
      .post("/signup", data)
      .then((response) => {
        authCtx.login(response.data["access_token"]);
        history.replace("/create-profile");
      })
      .catch((error) =>
        setErrorMessage(error?.response?.data["error_message"])
      );
  };

  return (
    <Form className="form mt-5" onSubmit={handleSubmit(onSubmit)}>
      <InputGroup className={firstFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons users_circle-08" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className="signup"
          {...register("first_name", {
            minLength: {
              value: 2,
              message: "Name must have at least 2 characters",
            },
            pattern: {
              value: /[a-zA-Z]+/,
              message: "Please use only english letters",
            },
          })}
          autoComplete="firstName"
          placeholder="First Name"
          type="text"
          onFocus={() => setFirstFocus(true)}
          onBlur={() => setFirstFocus(false)}
          required
        />
      </InputGroup>
      {errors.first_name && (
        <Alert color="danger">{errors.first_name.message}</Alert>
      )}
      <InputGroup className={lastFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons users_circle-08" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className="signup"
          {...register("last_name", {
            pattern: {
              value: /[a-zA-Z]+/,
              message: "Please use only english letters",
            },
          })}
          autoComplete="lastName"
          placeholder="Last Name"
          type="text"
          onFocus={() => setLastFocus(true)}
          onBlur={() => setLastFocus(false)}
        />
      </InputGroup>
      {errors.last_name && (
        <Alert color="danger">{errors.last_name.message}</Alert>
      )}
      <InputGroup className={emailFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons ui-1_email-85" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className="signup"
          {...register("email", {
            pattern: {
              value: emailRegexPattern,
              message: "Please enter a valid email",
            },
          })}
          autoComplete="email"
          placeholder="Your Email"
          type="email"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
      </InputGroup>
      {errors.email && <Alert color="danger">{errors.email.message}</Alert>}
      <InputGroup className={passwordFocus ? "input-group-focus" : ""}>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <i className="now-ui-icons ui-1_lock-circle-open" />
          </InputGroupText>
        </InputGroupAddon>
        <Input
          className="signup"
          required
          {...register("password", {
            minLength: {
              value: 5,
              message: "Password must have at least 5 characters!",
            },
          })}
          autoComplete="password"
          placeholder="Your Password..."
          type="password"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
      </InputGroup>
      {errors.password && (
        <Alert color="danger">{errors.password.message}</Alert>
      )}
      <CardFooter className="text-center">
        <Button className="btn-round" color="primary" size="lg">
          Sign Up
        </Button>
        {errorMessage && (
          <p className="text-danger">
            <strong>{errorMessage}</strong>
          </p>
        )}
      </CardFooter>
    </Form>
  );
}

export default SignupForm;
