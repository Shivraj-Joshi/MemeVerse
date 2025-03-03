import React, { useContext } from "react";
import MemeContext from "../Context/MemeContext";
import Navbar from "../Components/Navbar";

const Home = () => {
  const { data } = useContext(MemeContext);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 bg-[#0f0f0f]  ">
        {data ? (
          data.map((meme) => (
            <div
              key={meme.id}
              className="mt-16 border bg-black h-[300px] mb-4 relative overflow-hidden group transition rounded-lg  "
            >
              <div className="w-[200px] mx-auto flex justify-center items-center object-cover">
                <img
                  className="max-h-full  group-hover:scale-90  transition duration-300"
                  src={meme.url}
                  alt=""
                />
              </div>

              <p className="text-white">{meme.name}</p>
              <p className="text-white">{meme.captions}</p>
              <p className="text-white">{meme.box_count}</p>
            </div>
          ))
        ) : (
          <li>no data</li>
        )}
      </div>
    </>
  );
};

export default Home;
