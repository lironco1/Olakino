import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const LevelInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "workouts.level",
    control,
    rules: { required: "Level is required" },
    defaultValue: { value: "0", label: "Beginner" },
  });

  return (
    <div className="text-left">
      <Label forhtml="level" className="text-black">
        <strong>Workout Level:</strong>
      </Label>
      <FormGroup>
        <Select
          id="goal"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "0", label: "Beginner" },
            { value: "1", label: "Intermediate" },
            { value: "2", label: "Advanced" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default LevelInput;
