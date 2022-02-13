import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Form,
  Progress,
  Row,
} from "reactstrap";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import BasicInfo from "../Inputs/BasicInfo/BasicInfo";
import MedicalInfo from "../Inputs/MedicalInfo/MedicalInfo";
import DietInfo from "../Inputs/DietInfo/DietInfo";
import WorkoutsInfo from "../Inputs/WorkoutsInfo/WorkoutsInfo";

const CreateProfileForm = ({ onSubmit, apiError, isLoading }) => {
  const FINAL_STEP = 4;
  const [currentStep, setCurrentStep] = useState(1);

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      medical: { diseases: [], symptoms: [] },
      diet: {
        preferences: [],
        excluded: [],
      },
    },
  });

  function getTitle() {
    if (currentStep === 1) {
      return "Basic information";
    } else if (currentStep === 2) {
      return "Medical information";
    } else if (currentStep === 3) {
      return "Diet information";
    } else if (currentStep === FINAL_STEP) {
      return "Workouts Preferences";
    }
  }

  return (
    <Container>
      <Row>
        <Col className="mx-auto" lg="8">
          <Card className="card-signup">
            <CardBody>
              <CardTitle className="text-center" tag="h1">
                {getTitle()}
              </CardTitle>
              <div className="progress-container progress-success text-center font-weight-bold mx-5">
                <span className="progress-value">{`Step ${currentStep.toString()} / 4`}</span>
                <Progress max="4" value={currentStep.toString()} />
              </div>
              <Form
                className="form px-5 pt-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                {currentStep === 1 && <BasicInfo control={control} />}
                {currentStep === 2 && <MedicalInfo control={control} />}
                {currentStep === 3 && <DietInfo control={control} />}
                {currentStep === FINAL_STEP && (
                  <WorkoutsInfo control={control} />
                )}
                <CardFooter className="m-0">
                  <Button
                    className="btn-round mx-4"
                    type="button"
                    color="secondary"
                    onClick={() => {
                      setCurrentStep((prevStep) => prevStep - 1);
                    }}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  {currentStep !== FINAL_STEP && (
                    <Button
                      className="btn-round mx-4"
                      color="primary"
                      type="button"
                      onClick={() => {
                        setCurrentStep((prevStep) => prevStep + 1);
                      }}
                      disabled={!isValid}
                    >
                      Next
                    </Button>
                  )}
                  {currentStep === FINAL_STEP && (
                    <>
                      <Button className="btn-round mx-4" color="primary">
                        {isLoading ? (
                          <span className="spinner-border spinner-border-sm" />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                      {apiError !== "" && (
                        <p className="text-danger">
                          <strong>{apiError}</strong>
                        </p>
                      )}
                      {isLoading && (
                        <p className="text-success font-weight-bold">
                          Creating profile...
                        </p>
                      )}
                    </>
                  )}
                </CardFooter>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProfileForm;
