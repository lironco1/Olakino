import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NavigationBar from "components/Navbars/NavigationBar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import CarouselTips from "components/Tips/CarouselTips";
import DailyRecipes from "components/Recipes/DailyMenu/DailyRecipes";
import DailyWorkout from "components/Workouts/DailyMenu/DailyWorkout";
import initPageBody from "../utils/initPageBody";

function ProfilePage() {
  const [pills, setPills] = React.useState("1");

  React.useEffect(() => {
    initPageBody("profile-page");
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="wrapper">
        <ProfilePageHeader />
        <h2 className="title text-center">Your Daily Tips:</h2>
        <div className="section">
          <Container>
            <CarouselTips />
            <Row>
              <Col md="12">
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                        className={pills === "1" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons sport_user-run" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                        className={pills === "2" ? "active" : ""}
                        role="tablist"
                        href="#pablo"
                      >
                        <i className="now-ui-icons files_paper" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <div id="collapse">
                      <h2 className="text-center">Workouts</h2>
                      <Row>
                        <DailyWorkout />
                      </Row>
                    </div>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <div id="collapse">
                      <h2 className="text-center">My Recipes</h2>
                      <Row>
                        <DailyRecipes />
                      </Row>
                    </div>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
