import React from "react";
import { Link } from "react-router-dom";

const CreateMeme = () => {
  return (
    <div className="flex flex-col">
      this is create meme Pages
      <Link to="/">
        <button className="p-2 bg-amber-300 rounded-xl text-white cursor-pointer">
          Back to home page
        </button>
      </Link>
    </div>
  );
};

export default CreateMeme;
