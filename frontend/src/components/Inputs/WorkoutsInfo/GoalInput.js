import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const GoalInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "workouts.goal",
    control,
    rules: { required: "Goal is required" },
    defaultValue: { value: "0", label: "Lose Fat" },
  });

  return (
    <div className="text-left">
      <Label forhtml="goal" className="text-black">
        <strong>Workout Goal:</strong>
      </Label>
      <FormGroup>
        <Select
          id="goal"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "0", label: "Lose Fat" },
            { value: "1", label: "Build Muscles" },
            { value: "2", label: "Keep Active" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default GoalInput;
