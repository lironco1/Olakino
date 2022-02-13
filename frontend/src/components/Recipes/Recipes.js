import { Col, Container, Row } from "reactstrap";
import Recipe from "./Recipe/Recipe";
import "./Recipes.css";
import React, { useEffect, useState } from "react";
import Pagination from "components/Pagination/Pagination";
import SearchBarInput from "../Inputs/SearchBarInput";
import TagsInput from "react-tagsinput";

const Recipes = (props) => {
  const recipesPerPage = 3;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [regularTags, setRegularTags] = React.useState([]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;

  const [allRecipes, setAllRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [recipesToDisplay, setRecipesToDisplay] = useState([]);

  // Initialize all recipes from API - only once
  useEffect(() => {
    setAllRecipes(props.recipesList);
  }, []);

  // When allRecipes are loaded and after each change of input
  useEffect(() => {
    const isMatchingTag = (val) => {
      if (regularTags.length === 0) return true;

      let flag = 0;
      for (let j = 0; j < regularTags.length; j++) {
        for (let i = 0; i < val["health_labels"].length; i++)
          if (
            val["health_labels"][i].toLowerCase() ===
            regularTags[j].toLowerCase()
          ) {
            flag = 1;
            break;
          }
        if (flag === 0) {
          return false;
        } else {
          flag = 0;
        }
      }
      return true;
    };
    const isMatching = (val) => {
      if (searchTerm.trim() === "") return true;
      return val.recipe_name.toLowerCase().includes(searchTerm.toLowerCase());
    };

    const filtered_recipes = allRecipes.filter((val) => {
      return !isMatching(val) || !isMatchingTag(val) ? null : val;
    });

    setFilteredRecipes(filtered_recipes);
    setCurrentPage(1);
  }, [allRecipes, searchTerm, regularTags]);

  // When current page changes
  useEffect(() => {
    setRecipesToDisplay(
      filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
    );
  }, [currentPage, filteredRecipes]);

  const cards = recipesToDisplay.map((recipe, index) => (
    <Col lg="4" className="my-3" key={index}>
      <Recipe index={index} recipe={recipe} />
    </Col>
  ));

  const saveSearchText = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <SearchBarInput onSearch={saveSearchText} />
      <Row className="bg-white mb-5 rounded">
        <TagsInput
          value={regularTags}
          onChange={(value) => setRegularTags(value)}
          tagProps={{ className: "react-tagsinput-tag badge-success" }}
        />
      </Row>

      <Row className="row-border-solid p-5 rounded">{cards}</Row>
      <Container className="mt-5">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={filteredRecipes.length}
          pageSize={recipesPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
    </>
  );
};

export default Recipes;
