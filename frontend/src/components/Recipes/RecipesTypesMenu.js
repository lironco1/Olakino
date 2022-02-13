import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import React from "react";
import { api } from "../../store/api";
import { useHistory } from "react-router-dom";
import NavigationBar from "components/Navbars/NavigationBar";
import initPageBody from "utils/initPageBody";

function RecipesTypesMenu() {
  const history = useHistory();
  React.useEffect(() => initPageBody("signup-page"), []);

  const replacePage = (recipesList, innerText) => {
    const location = {
      pathname: "/recipes/" + innerText,
      state: { recipesList: recipesList.data.recipes },
    };
    console.log(recipesList.data);
    history.push(location);
  };
  const fetchRecipes = (e) => {
    e.preventDefault();
    api
      .get("/nutrition/recipes/" + e.target.innerText)
      .then((recipesList) => replacePage(recipesList, e.target.innerText))
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <NavigationBar />
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/recipes-bg.jpg").default +
              ")",
          }}
        />
        <Container>
          <Col className="ml-auto mr-auto text-center" md="6">
            <h2 className="title">Recipes Types</h2>
            <h4 className="description">
              There are many meals during the day, each meal gives different
              value.
              <br /> Choose what meal do you want to get recipes for:
            </h4>
          </Col>
          <Row style={{ paddingTop: "80px" }}>
            <Col md="4">
              <Card className="card-testimonial">
                <div className="card-avatar">
                  <a href="/#" onClick={(event) => event.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/Recipes/breakfast.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <p className="card-description">
                    In a hurry? Here are some ideas of quick and easy meals.
                    <br /> Start your day with an energized, yet light meal.
                  </p>
                </CardBody>
                <CardFooter>
                  <CardTitle className="text-left" tag="div">
                    <h2>
                      <a href="/#" onClick={fetchRecipes}>
                        Breakfast
                      </a>
                    </h2>
                  </CardTitle>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-testimonial">
                <div className="card-avatar">
                  <a href="/#" onClick={(event) => event.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/Recipes/lunch.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <p className="card-description">
                    Find yourself starving in the middle of the day? <br />
                    Here are some lunch ideas to keep you focused at the rest of
                    the day.
                  </p>
                </CardBody>
                <CardFooter>
                  <CardTitle className="text-left" tag="div">
                    <h2>
                      <a href="/#" onClick={fetchRecipes}>
                        Lunch
                      </a>
                    </h2>
                  </CardTitle>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-testimonial">
                <div className="card-avatar">
                  <a href="/#" onClick={(event) => event.preventDefault()}>
                    <img
                      alt="..."
                      className="img img-raised"
                      src={require("assets/img/Recipes/dinner.jpg").default}
                    />
                  </a>
                </div>
                <CardBody>
                  <p className="card-description">
                    Fancy a romantic dinner? <br /> Or maybe just a light
                    healthy meal to finish your day?
                    <br />
                    Click here to get many ideas.
                  </p>
                </CardBody>
                <CardFooter>
                  <CardTitle className="text-left" tag="div">
                    <h2>
                      <a href="/#" onClick={fetchRecipes}>
                        Dinner
                      </a>
                    </h2>
                  </CardTitle>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RecipesTypesMenu;
