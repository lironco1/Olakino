import React from "react";

import { Container } from "reactstrap";
import Footer from "components/Footers/Footer";
import Workouts from "components/Workouts/Workouts";
import initPageBody from "utils/initPageBody";
import NavigationBar from "../components/Navbars/NavigationBar";

function WorkoutsPage(props) {
  React.useEffect(() => initPageBody("signup-page"), []);

  return (
    <>
      <NavigationBar />
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/workouts_background.jpg")
                .default +
              ")",
          }}
        />
        <div className="content p-5">
          <Container>
            <Workouts workoutsList={props.location.state?.workoutsList} />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WorkoutsPage;
