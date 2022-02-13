import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
} from "reactstrap";

import "./Recipe.css";
import React from "react";

const addDefaultSrc = (ev) => {
  ev.target.src =
    require("assets/img/placeHolders/image_placeholder.jpg").default;
};

const Recipe = (props) => {
  return (
    <Card className="h-100 card-border-solid">
      <a className="Meal" href={props.recipe.url}>
        <CardImg
          tag="img"
          alt="recipe"
          src={props.recipe.picture_url}
          top
          style={{ height: "300px" }}
          onError={addDefaultSrc}
        />
      </a>
      <CardBody className="text-black">
        <div className="card-title-fixed m-0">
          <CardTitle tag="h3">{props.recipe.recipe_name}</CardTitle>
          <CardText tag="h5">{props.recipe.source}</CardText>
        </div>
        <Container fluid>
          {props.recipe["health_labels"].map((tag, index) => (
            <Badge color="primary" key={index}>
              {tag}
            </Badge>
          ))}
        </Container>
      </CardBody>
    </Card>
  );
};

export default Recipe;
