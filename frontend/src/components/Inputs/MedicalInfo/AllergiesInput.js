import { useController } from "react-hook-form";
import { FormGroup, Label } from "reactstrap";
import Select from "react-select";
import { ALLERGIES } from "../../../store/select-options";

function AllergiesInput({ control }) {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: "medical.allergies",
    control,
  });

  return (
    <>
      <Label className="text-black">Specify your allergies:</Label>
      <FormGroup>
        <Select
          ref={ref}
          className="react-select react-select-primary"
          classNamePrefix="react-select"
          placeholder="Choose Allergies"
          closeMenuOnSelect={false}
          isMulti
          options={ALLERGIES}
          {...inputProps}
        />
      </FormGroup>
    </>
  );
}

export default AllergiesInput;
