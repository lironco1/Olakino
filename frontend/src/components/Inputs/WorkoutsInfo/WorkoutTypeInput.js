import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const WorkoutTypeInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "workouts.type",
    control,
    rules: { required: "Type is required" },
    defaultValue: { value: "0", label: "Weights" },
  });

  return (
    <div className="text-left">
      <Label forhtml="type" className="text-black">
        <strong>Workout Type:</strong>
      </Label>
      <FormGroup>
        <Select
          id="type"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "0", label: "Weights" },
            { value: "1", label: "Body Weight" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default WorkoutTypeInput;
