import React, { useContext } from "react";
import MemeContext from "../Context/MemeContext";
import Layout from "../Components/Layout/Layout";

const MemeExpolre = () => {
  const { data } = useContext(MemeContext);

  return (
    <>
      <Layout>
        <section className="text-gray-600 body-font font-mono mt-10">
          <div className="container px-5 py-10 mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center -m-4 mb-5 mt-10">
              {/* Card   */}
              {data ? (
                data.map((meme) => {
                  return (
                    <div className="p-4 md:w-1/3 " key={meme.id}>
                      <div
                        className="h-full shadow-lg  hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                         
                                          rounded-xl overflow-hidden"
                      >
                        {/* meme Thumbnail  */}
                        <img className=" w-full" src={meme.url} alt="meme" />

                        {/* Top Items  */}
                        <div className="p-6">
                          {/* Blog Date  */}
                          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            {"25 Sep 2023"}
                          </h2>

                          {/* meme Title  */}
                          <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                            {meme.name}
                          </h1>

                          {/* meme Description  */}
                          <p className="leading-relaxed mb-3">
                            Photo booth fam kinfolk cold-pressed sriracha
                            leggings jianbing microdosing tousled waistcoat.
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>no data </p>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default MemeExpolre;
