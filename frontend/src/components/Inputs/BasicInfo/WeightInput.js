import { FormGroup, Input, Label } from "reactstrap";
import { useController } from "react-hook-form";
import React from "react";

const WeightInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "basic.weight",
    control,
    rules: {
      required: "Weight is required",
      min: {
        value: 40,
        message: "Min weight is 40kg",
      },
      max: {
        value: 150,
        message: "Max weight is 150kg",
      },
    },
    defaultValue: 70,
  });

  return (
    <div className="text-left">
      <Label forhtml="weight" className="text-black">
        <strong>Weight:</strong> (in kg)
      </Label>
      <FormGroup className={error ? "has-danger" : "has-success"}>
        <Input
          ref={ref}
          type="number"
          max={150}
          min={40}
          id="weight"
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

export default WeightInput;
