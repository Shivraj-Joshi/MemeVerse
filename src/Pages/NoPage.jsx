import React from "react";
import image from "../assets/nopage.jpg";
const NoPage = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={image} alt="" className="   object-cover" />
    </div>
  );
};

export default NoPage;
