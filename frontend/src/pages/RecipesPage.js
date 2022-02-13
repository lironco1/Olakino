import React from "react";

import { Container } from "reactstrap";
import Footer from "components/Footers/Footer";
import Recipes from "components/Recipes/Recipes";
import initPageBody from "utils/initPageBody";
import NavigationBar from "../components/Navbars/NavigationBar";

function RecipesPage(props) {
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
              require("assets/img/backgrounds/recipes-bg.jpg").default +
              ")",
          }}
        />
        <div className="content p-5">
          <Container>
            <Recipes recipesList={props.location.state.recipesList} />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecipesPage;
