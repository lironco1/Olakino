import DiseasesInput from "./DiseasesInput";
import SymptomsInput from "./SymptomsInput";
import { Label } from "reactstrap";
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import AllergiesInput from "./AllergiesInput";

function MedicalInfo({ control }) {
  const [showAllergies, setShowAllergies] = useState(false);

  const diseases = useWatch({
    control,
    name: "medical.diseases",
  });

  function hasAllergies(diseases) {
    return diseases.some((disease) => disease.value === "6");
  }

  useEffect(() => {
    if (hasAllergies(diseases)) {
      setShowAllergies(true);
    } else {
      setShowAllergies(false);
    }
  }, [diseases]);

  return (
    <div className="text-left font-weight-bold">
      <Label className="text-black">Select any symptoms you have:</Label>
      <SymptomsInput control={control} />
      <br />
      <Label className="text-black">Select any diseases you have:</Label>
      <DiseasesInput control={control} />
      <br />
      {showAllergies && <AllergiesInput control={control} />}
    </div>
  );
}

export default MedicalInfo;
