import { FormGroup, Input, Label } from "reactstrap";
import { useController } from "react-hook-form";
import React from "react";

const HeightInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "basic.height",
    control,
    rules: {
      required: "Height is required",
      min: {
        value: 100,
        message: "Min height is 100cm",
      },
      max: {
        value: 250,
        message: "Max height is 250cm",
      },
    },
    defaultValue: 170,
  });

  return (
    <div className="text-left">
      <Label forhtml="height" className="text-black">
        <strong>Height:</strong> (in cm)
      </Label>
      <FormGroup className={error ? "has-danger" : "has-success"}>
        <Input
          ref={ref}
          type="number"
          max={250}
          min={100}
          id="height"
          {...inputProps}
        />
      </FormGroup>
      {error && (
        <p className="text-danger">
          <strong> {error.message}</strong>
        </p>
      )}
    </div>
  );
};

export default HeightInput;
