import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const FirstDayInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "workouts.first_day",
    control,
    rules: { required: "Week Day is required" },
    defaultValue: { value: "0", label: "Sunday" },
  });

  return (
    <div className="text-left">
      <Label forhtml="first_day" className="text-black">
        <strong>First Day of Workout:</strong>
      </Label>
      <FormGroup>
        <Select
          id="first_day"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "0", label: "Sunday" },
            { value: "1", label: "Monday" },
            { value: "2", label: "Tuesday" },
            { value: "3", label: "Wednesday" },
            { value: "4", label: "Thursday" },
            { value: "5", label: "Friday" },
            { value: "6", label: "Saturday" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default FirstDayInput;
