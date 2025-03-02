import React, { useState, useEffect } from "react";
import MemeContext from "./MemeContext";

const MemeContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  let API = "https://api.imgflip.com/get_memes";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      console.log(result);
      setData(result.data.memes);
    } catch (error) {
      console.log(" error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <MemeContext.Provider value={{ data, setData }}>
      {children}
    </MemeContext.Provider>
  );
};

export default MemeContextProvider;
