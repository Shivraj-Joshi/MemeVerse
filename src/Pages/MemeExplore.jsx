import React, { useContext } from "react";
import MemeContext from "../Context/MemeContext";
import Layout from "../Components/Layout/Layout";

const MemeExpolre = () => {
  const { data } = useContext(MemeContext);

  return (
    <>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 bg-[#0f0f0f]  ">
          {data ? (
            data.map((meme) => (
              <div
                key={meme.id}
                className="mt-16 border bg-black h-[300px] mb-4 relative overflow-hidden group transition rounded-lg  "
              >
                <img
                  className=" group-hover:scale-90  transition duration-300 obejct-cover"
                  src={meme.url}
                  alt=""
                />

                <p className="text-white">{meme.name}</p>
              </div>
            ))
          ) : (
            <li>no data</li>
          )}
        </div>
      </Layout>
    </>
  );
};

export default MemeExpolre;
