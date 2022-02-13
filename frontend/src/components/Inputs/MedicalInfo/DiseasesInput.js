import { useController } from "react-hook-form";
import Select from "react-select";
import { DISEASES } from "store/select-options";
import { FormGroup } from "reactstrap";

const DiseasesInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: "medical.diseases",
    control,
  });

  return (
    <FormGroup>
      <Select
        ref={ref}
        className="react-select react-select-primary"
        classNamePrefix="react-select"
        placeholder="Choose Disease"
        closeMenuOnSelect={false}
        isMulti
        options={DISEASES}
        {...inputProps}
      />
    </FormGroup>
  );
};

export default DiseasesInput;
