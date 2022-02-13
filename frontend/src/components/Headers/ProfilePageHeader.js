import React, { useState } from "react";
import { api } from "store/api";
// reactstrap components
import { Container } from "reactstrap";
import useParallaxEffect from "../../utils/applyParallaxEffect";

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useParallaxEffect(pageHeader);

  React.useEffect(() => {
    api.get("/profile").then((userDetails) => {
      setFirstName(userDetails.data.first_name);
      setLastName(userDetails.data.last_name);
    });
  }, []);
  return (
    <>
      <div
        className="page-header clear-filter page-header-small"
        filter-color="blue"
      >
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/home-page-header-bg.jpg")
                .default +
              ")",
          }}
          ref={pageHeader}
        />
        <Container>
          <div className="photo-container">
            <img
              alt="..."
              src={`https://avatar.oxro.io/avatar.svg?name=${firstName}+${lastName}&background=6ab04c&color=000`}
            />
          </div>
          <h3 className="title">{firstName + " " + lastName}</h3>
        </Container>
      </div>
    </>
  );
}

export default ProfilePageHeader;
