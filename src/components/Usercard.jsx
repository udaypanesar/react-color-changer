/* eslint-disable react/prop-types */
import { memo } from "react";

const Usercard = ({ username, email, color = "white" , onClick,id }) => {
  //const {firstname,lastname} = user.name;
  console.log("usercard re-render");
  return (
    <>
      <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
           style={{ backgroundColor: color }}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {email}</p>
        <button
          onClick={()=>onClick(id)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Change Color
        </button>
      </div>
    </>
  );
};

export default memo(Usercard);
