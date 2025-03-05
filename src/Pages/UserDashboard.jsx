// import React from "react";

// const UserDashboard = () => {
//   return (
//     <Layout>
//       <div className="mt-20">protected page for user </div>
//     </Layout>
//   );
// };

// export default UserDashboard;

//----------------------------------------------------------------------------------------------------------------------------

import React from "react";
import Layout from "../Components/Layout/Layout";
import image from "../assets/me.jpg";
import image2 from "../assets/welcome2.jpg";
import { Link } from "react-router-dom";

function UserDashboard() {
  return (
    <Layout>
      <div className="py-10 mt-20">
        <div className="flex flex-wrap justify-start items-center lg:justify-center gap-2 lg:gap-10 px-4 lg:px-0 mb-8">
          <div className="left">
            <img
              className=" w-40 h-40  object-cover rounded-full border-2 border-pink-600 p-1"
              src={image}
              alt="profile"
            />
          </div>
          <div className="right">
            <h1 className="text-center font-bold text-2xl mb-2">
              Shivraj Joshi
            </h1>

            <h2 className="font-semibold">Software Developer</h2>
            <h2 className="font-semibold">shivrajjoshi@gmail.com</h2>
            <h2 className="font-semibold">
              <span>Total Blog : </span> 15
            </h2>
            <div className=" flex gap-2 mt-2">
              <Link to={"/creatememe"}>
                <div className=" mb-2 ">
                  <button className="px-8 py-2 bg-sky-400 text-white rounded-xl cursor-pointer">
                    Create Blog
                  </button>
                </div>
              </Link>
              <div className="mb-2">
                <button className="px-8 py-2 text-white cursor-pointer bg-red-500 rounded-xl">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Line  */}

        {/* Table  */}
        <div className="">
          <div className=" container mx-auto px-4 max-w-7xl my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
              {/* table  */}
              <table className="w-full border-2 border-white shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                {/* thead  */}
                <thead className="text-xs ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* tbody  */}
                <tbody>
                  <tr className=" border-b-2">
                    {/* S.No   */}
                    <td className="px-6 py-4">{"1."}</td>

                    {/* Blog Thumbnail  */}
                    <th scope="row" className="px-6 py-4 font-medium ">
                      {/* thumbnail  */}
                      <img
                        className="w-16 rounded-lg"
                        src={image2}
                        alt="thumbnail"
                      />
                    </th>

                    {/* Blog Title  */}
                    <td className="px-6 py-4">{"React Introduction"}</td>

                    {/* Blog Category  */}
                    <td className="px-6 py-4">{"reactjs"}</td>

                    {/* Blog Date  */}
                    <td className="px-6 py-4">{"Jul 25, 2023"}</td>

                    {/* Delete Blog  */}
                    <td className="px-6 py-4">
                      <button className=" px-4 py-1 rounded-lg text-white font-bold bg-red-500">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserDashboard;
