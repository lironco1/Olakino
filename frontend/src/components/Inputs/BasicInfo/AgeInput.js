import { FormGroup, Input, Label } from "reactstrap";
import { useController } from "react-hook-form";
import React from "react";

const AgeInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "basic.age",
    control,
    rules: {
      required: "Age is required",
      min: {
        value: 18,
        message: "Min age is 18",
      },
      max: {
        value: 99,
        message: "Max age is 99",
      },
    },
    defaultValue: 25,
  });

  return (
    <div className="text-left">
      <Label forhtml="age" className="text-black mr-auto">
        <strong>Age:</strong>
      </Label>
      <FormGroup className={error ? "has-danger" : "has-success"}>
        <Input
          ref={ref}
          type="number"
          id="age"
          min={18}
          max={99}
          {...inputProps}
        />
      </FormGroup>
      {error && (
        <p className="text-danger">
          <strong>{error.message}</strong>
        </p>
      )}
    </div>
  );
};

export default AgeInput;
