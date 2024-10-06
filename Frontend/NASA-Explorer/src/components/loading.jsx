import React from "react";
import Spinner from "react-spinners/RingLoader";

const loading = () => (
  <div className="flex justify-center items-center h-lvh">
    <Spinner className="loader" size={150} color="#fff" />
  </div>
);

export default loading;
