import PreferencesInput from "./PreferencesInput";
import { Button, Label, Row } from "reactstrap";
import { useFieldArray } from "react-hook-form";
import MealInput from "./MealInput";

const DietInfo = ({ control }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "diet.exclude",
  });

  return (
    <div className="text-left font-weight-bold">
      <Label className="text-black">Select any special diet you have:</Label>
      <PreferencesInput control={control} />
      <br />
      <Label className="text-black mb-4">
        Type meals you want to exclude from your menu:
      </Label>
      <Row>
        {fields.map((meal, index) => (
          <MealInput
            key={meal.id}
            onClick={() => remove(index)}
            control={control}
            name={`diet.exclude${index}`}
          />
        ))}
      </Row>
      <div className="text-center my-3">
        <Button
          className="btn-outline-success btn-round"
          size="sm"
          onClick={() => append("")}
        >
          <i className="text-success now-ui-icons ui-1_simple-add" />
        </Button>
      </div>
    </div>
  );
};

export default DietInfo;
