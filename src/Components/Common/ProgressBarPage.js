import React from "react";
import { MDBProgress } from "mdbreact";

const ProgressBarPage = () => {
  return (
    <MDBProgress
      material
      preloader
      value={50}
      animated
      value={100}
      color="warning"
      height="5px"
    />
  );
};

export default ProgressBarPage;
