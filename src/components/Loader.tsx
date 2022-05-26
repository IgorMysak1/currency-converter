import React from "react";
import "../styles/loader.scss";

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="lds-dual-ring"></div>
    </div>
  );
};
