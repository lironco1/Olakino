import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import { useController } from "react-hook-form";
import { useState } from "react";

const MealInput = ({ onClick, control, name }) => {
  const [inputFocus, setFocus] = useState(false);

  const {
    field: { ref, ...inputProps },
  } = useController({
    name: name,
    control,
  });

  return (
    <Col lg="4">
      <InputGroup className={inputFocus ? "input-group-focus" : ""}>
        <Input
          {...inputProps}
          ref={ref}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <InputGroupAddon addonType="append">
          <InputGroupText>
            <Button
              size="sm"
              color="neutral"
              onClick={onClick}
              className="m-0 p-0"
            >
              <i className="text-danger now-ui-icons ui-1_simple-remove" />
            </Button>
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Col>
  );
};

export default MealInput;
