import React, { useEffect, useState } from "react";

import Footer from "components/Footers/Footer.js";
import { useHistory } from "react-router";
import ModalProfileSuccess from "components/Modals/ModalProfileSuccess";
import CreateProfileForm from "components/Forms/CreateProfileForm";
import initPageBody from "utils/initPageBody";
import NavigationBar from "components/Navbars/NavigationBar";
import { api } from "store/api";

function CreateProfile() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const onSubmit = (data) => {
    setIsLoading(true);
    api
      .post("/create_profile", data)
      .then(() => {
        setIsLoading(false);
        setModalOpen(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorMessage(error?.response?.data["error_message"]);
      });
  };

  useEffect(() => initPageBody("signup-page"), []);

  return (
    <>
      <ModalProfileSuccess
        open={isModalOpen}
        toggle={() => setModalOpen(false)}
        onClick={() => history.replace("/profile-page")}
      />
      <NavigationBar />
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/backgrounds/create-profile-bg.jpg").default +
              ")",
          }}
        />
        <div className="content p-5">
          <CreateProfileForm
            onSubmit={onSubmit}
            apiError={errorMessage}
            isLoading={isLoading}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CreateProfile;
