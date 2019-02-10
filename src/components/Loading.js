import React from "react";
import spinner from "../assets/images/loading.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading.."
        style={{
          width: "200px",
          margin: "40px auto",
          display: "block",
          borderRadius: "50%",
          boxShadow: "-2px 2px 35px 0px rgba(1,188,212,.8)"
        }}
      />
    </div>
  );
};

export default Spinner;
