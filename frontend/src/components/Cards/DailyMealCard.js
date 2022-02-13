import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Container,
} from "reactstrap";

function DailyMealCard({ meal, onError, onSwitch }) {
  return (
    <Card className="card-testimonial" style={{ height: "45vw" }}>
      <CardImg
        alt="recipe"
        src={meal.picture_url}
        top
        style={{ height: "23vw" }}
        onError={onError}
      />
      <CardBody>
        <h1>Breakfast:</h1>
        <CardTitle className="text-center" tag="div">
          <h4>{meal.recipe_name}</h4>
        </CardTitle>
        <a href={meal.url}>Link To Recipe</a>
      </CardBody>
      <CardFooter>
        <Container fluid>
          <Button color="success" onClick={onSwitch}>
            Switch
          </Button>
        </Container>
      </CardFooter>
    </Card>
  );
}

export default DailyMealCard;
