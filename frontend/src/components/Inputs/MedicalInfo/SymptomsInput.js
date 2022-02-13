import { useController } from "react-hook-form";
import Select from "react-select";
import { SYMPTOMS } from "store/select-options";
import { FormGroup } from "reactstrap";

const SymptomsInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: "medical.symptoms",
    control,
  });

  return (
    <FormGroup>
      <Select
        ref={ref}
        className="react-select react-select-primary"
        classNamePrefix="react-select"
        placeholder="Choose Symptom"
        closeMenuOnSelect={false}
        isMulti
        options={SYMPTOMS}
        {...inputProps}
      />
    </FormGroup>
  );
};

export default SymptomsInput;
