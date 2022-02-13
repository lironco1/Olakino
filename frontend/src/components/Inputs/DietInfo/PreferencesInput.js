import { useController } from "react-hook-form";
import Select from "react-select";
import { PREFERENCES } from "store/select-options";
import { FormGroup } from "reactstrap";

const PreferencesInput = ({ control }) => {
  const {
    field: { ref, ...inputProps },
  } = useController({
    name: "diet.preferences",
    control,
  });

  return (
    <FormGroup className="font-weight-bold" style={{ zIndex: 3 }}>
      <Select
        ref={ref}
        className="react-select react-select-primary"
        classNamePrefix="react-select"
        placeholder="Choose preferences"
        closeMenuOnSelect={false}
        isMulti
        options={PREFERENCES}
        {...inputProps}
      />
    </FormGroup>
  );
};

export default PreferencesInput;
