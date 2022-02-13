import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const MethodInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "workouts.method",
    control,
    rules: { required: "Method is required" },
    defaultValue: { value: "0", label: "Cardio" },
  });

  return (
    <div className="text-left">
      <Label forhtml="method" className="text-black">
        <strong>Training Method:</strong>
      </Label>
      <FormGroup>
        <Select
          id="method"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "0", label: "Cardio" },
            { value: "1", label: "Resistance & Cardio" },
            { value: "2", label: "Resistance" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default MethodInput;
