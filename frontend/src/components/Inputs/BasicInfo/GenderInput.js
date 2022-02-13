import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";

const GenderInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    defaultValue: { value: "Male", label: "Male" },
    name: "basic.gender",
    control: control,
    rules: { required: "Gender is required" },
  });

  return (
    <div className="text-left">
      <Label forhtml="gender" className="text-black">
        <strong>Gender:</strong>
      </Label>
      <FormGroup>
        <Select
          id="gender"
          className="text-black"
          ref={ref}
          {...inputProps}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
        />
      </FormGroup>
      {error && <p className="text-danger">{error.message}</p>}
    </div>
  );
};

export default GenderInput;
