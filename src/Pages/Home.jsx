import React, { useContext } from "react";
import MemeContext from "../Context/MemeContext";

const Home = () => {
  const { data } = useContext(MemeContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-16 max-w-6xl mx-auto  px-6 py-12">
      {data ? (
        data.map((meme) => (
          <div
            key={meme.id}
            className="mt-16 border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition "
          >
            <div className="w-[200px] mx-auto flex justify-center items-center object-cover">
              <img
                className="max-h-full  group-hover:scale-110  transition duration-300"
                src={meme.url}
                alt=""
              />
            </div>

            <p>{meme.name}</p>
            <p>{meme.captions}</p>
            <p>{meme.box_count}</p>
          </div>
        ))
      ) : (
        <li>no data</li>
      )}
    </div>
  );
};

export default Home;
