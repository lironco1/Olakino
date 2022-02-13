import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const FrequencyInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "workouts.frequency",
    control,
    rules: { required: "Frequency is required" },
    defaultValue: { value: "3", label: "3 times a week" },
  });

  return (
    <div className="text-left">
      <Label forhtml="frequency" className="text-black">
        <strong>Workout Frequency:</strong>
      </Label>
      <FormGroup>
        <Select
          id="frequency"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "3", label: "3 times a week" },
            { value: "4", label: "4 times a week" },
            { value: "5", label: "5+ times a week" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default FrequencyInput;
