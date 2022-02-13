import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";
import AuthContext from "../../store/auth-context";

function NavigationBar({ fixed }) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState(" navbar-transparent");

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 499 ||
        document.body.scrollTop > 499
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 500 ||
        document.body.scrollTop < 500
      ) {
        setNavbarColor(" navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={fixed ? "fixed-top" : "navbar-absolute" + navbarColor}
        color="white"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              Olakino
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Designed and Created by Olakino
            </UncontrolledTooltip>
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar" />
              <span className="navbar-toggler-bar middle-bar" />
              <span className="navbar-toggler-bar bottom-bar" />
            </button>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <NavItem tag={Link} to="/workouts" className="nav-link">
                <i className="now-ui-icons sport_user-run" />
                <p>Workouts</p>
              </NavItem>

              <NavItem tag={Link} to="/recipes-types" className="nav-link">
                <i className="now-ui-icons files_paper" />
                <p>Recipes</p>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i aria-hidden={true} className="now-ui-icons design_image" />
                  <p>More</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63" />
                    About-us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/home-page">
                    <i className="now-ui-icons business_bulb-63" />
                    Home Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="now-ui-icons location_pin" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08" />
                    Login Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile" />
                    Signup Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {!isLoggedIn && (
                <NavItem tag={Link} to="/login-page">
                  <Button className="nav-link btn-default" color="primary">
                    <p>Login</p>
                  </Button>
                </NavItem>
              )}
              {isLoggedIn && (
                <NavItem to="/">
                  <Button
                    className="nav-link btn-default"
                    color="primary"
                    onClick={logoutHandler}
                  >
                    <p>Logout</p>
                  </Button>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
