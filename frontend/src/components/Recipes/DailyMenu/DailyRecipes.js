import { Col, Container, Row } from "reactstrap";
import React, { useEffect, useState } from "react";
import { api } from "store/api";
import "assets/animations/skeleton-loading.css";
import SkeletonCard from "components/Skeletons/SkeletonCard";
import DailyMealCard from "components/Cards/DailyMealCard";

const DailyRecipes = () => {
  const [dailyBreakfast, setDailyBreakfast] = useState({});
  const [dailyLunch, setDailyLunch] = useState({});
  const [dailyDinner, setDailyDinner] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/nutrition/daily").then((recipes_arr) => {
      const { breakfast, dinner, lunch } = recipes_arr.data;
      setDailyBreakfast(breakfast);
      setDailyLunch(lunch);
      setDailyDinner(dinner);
      setLoading(false);
    });
  }, []);

  const switchBreakfast = () => {
    setLoading(true);
    api.patch("/nutrition/switch/breakfast").then((recipes_arr) => {
      const { breakfast } = recipes_arr.data;
      setDailyBreakfast(breakfast);
      setLoading(false);
    });
  };
  const switchLunch = () => {
    setLoading(true);
    api.patch("/nutrition/switch/lunch").then((recipes_arr) => {
      const { lunch } = recipes_arr.data;
      setDailyLunch(lunch);
      setLoading(false);
    });
  };
  const switchDinner = () => {
    setLoading(true);
    api.patch("/nutrition/switch/dinner").then((recipes_arr) => {
      const { dinner } = recipes_arr.data;
      setDailyDinner(dinner);
      setLoading(false);
    });
  };

  const addDefaultSrc = (ev) => {
    ev.target.src =
      require("assets/img/placeHolders/image_placeholder.jpg").default;
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col className="ml-auto mr-auto text-center" md="6">
          <h2 className="title">Recommended Recipes</h2>
          <h5 className="description">
            Below you can find our daily meals recommendation for you:
          </h5>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md="4">
          {loading ? (
            <SkeletonCard title="Breakfast" switchMeal={switchBreakfast} />
          ) : (
            <DailyMealCard
              meal={dailyBreakfast}
              onError={addDefaultSrc}
              onSwitch={switchBreakfast}
            />
          )}
        </Col>
        <Col md="4">
          {loading ? (
            <SkeletonCard title="Lunch" switchMeal={switchLunch} />
          ) : (
            <DailyMealCard
              meal={dailyLunch}
              onError={addDefaultSrc}
              onSwitch={switchLunch}
            />
          )}
        </Col>
        <Col md="4">
          {loading ? (
            <SkeletonCard title="Dinner" switchMeal={switchDinner} />
          ) : (
            <DailyMealCard
              meal={dailyDinner}
              onError={addDefaultSrc}
              onSwitch={switchDinner}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default DailyRecipes;
