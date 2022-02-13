import React, { useEffect } from "react";

function Tip(props) {
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div>
      <img
        src={props.src}
        width={690}
        height={300}
        className="d-block"
        alt="tip"
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          zIndex: "20",
          color: "white",
          paddingRight: "2em",
        }}
      >
        <h1 className="text-center">{props.caption}</h1>
        <h4>{props.body}</h4>
      </div>
    </div>
  );
}

export default Tip;
