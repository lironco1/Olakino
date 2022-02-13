import { Redirect, Route, Switch } from "react-router-dom";

// pages
import AboutUs from "pages/AboutUs.js";
import HomePage from "pages/HomePage";
import RecipesPage from "pages/RecipesPage.js";
import ContactUs from "pages/ContactUs.js";
import LoginPage from "pages/LoginPage.js";
import ProfilePage from "pages/ProfilePage";
import SignupPage from "pages/SignupPage.js";
import CreateProfile from "pages/CreateProfile";
import { useContext } from "react";
import WorkoutsPage from "pages/WorkoutsPage";
import AuthContext from "./store/auth-context";
import RecipesTypesMenu from "components/Recipes/RecipesTypesMenu";
import WorkoutTypesMenu from "components/Workouts/WorkoutTypesMenu";
import WorkoutData from "components/Workouts/Workout/WorkoutData";

function App() {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Switch>
      {/*Private Routes:*/}

      {isLoggedIn && (
        <Route path="/create-profile">
          <CreateProfile />
        </Route>
      )}

      {isLoggedIn && (
        <Route path="/profile-page">
          <ProfilePage />
        </Route>
      )}

      {/*Dynamic home page according to auth status:*/}
      <Route exact path="/">
        {isLoggedIn && <ProfilePage />}
        {!isLoggedIn && <HomePage />}
      </Route>

      <Route path="/home-page" render={(props) => <HomePage {...props} />} />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route path="/sign-up" render={(props) => <SignupPage {...props} />} />
      <Route
        path="/recipes-types"
        render={(props) => <RecipesTypesMenu {...props} />}
      />
      <Route path="/recipes" render={(props) => <RecipesPage {...props} />} />
      <Route
        path="/workouts"
        render={(props) => <WorkoutTypesMenu {...props} />}
      />
      <Route
        path="/specific-muscle"
        render={(props) => <WorkoutsPage {...props} />}
      />
      <Route
        path="/workout-data"
        render={(props) => <WorkoutData {...props} />}
      />

      {/*When an incorrect route is being attempted we redirect the user back to home page*/}
      <Redirect to={isLoggedIn ? "/profile-page" : "/home-page"} />
    </Switch>
  );
}

export default App;
