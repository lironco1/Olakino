import React from "react";
import useParallaxEffect from "../../utils/applyParallaxEffect";

// reactstrap components

// core components

function ContactUsHeader() {
  let pageHeader = React.createRef();
  useParallaxEffect(pageHeader);
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/placeHolders/image_placeholder.jpg").default +
              ")",
          }}
          ref={pageHeader}
        />
      </div>
    </>
  );
}

export default ContactUsHeader;
