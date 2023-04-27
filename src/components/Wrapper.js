import React from "react";

const Wrapper = (props) => {
  return (
    <div className="pt-3 pt-md-5">
      <div className="container d-grid justify-content-center">
        <div className="wrapper mx-500">{props.children}</div>
      </div>
    </div>
  );
};
export default Wrapper;
