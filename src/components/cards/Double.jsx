import React from "react";
import terms from "../../assets/terms.svg";

const Double = () => {
  return (
    <div className="w-full text-center shadow-xl bg-gray-100 flex flex-col p-4 rounded-lg hover:scale-105 duration-300">
      <img src={terms} alt="/" className="w-20 mx-auto bg-white" />
      <h2 className="text-2xl font-bold text-center py-8">Double Users</h2>
      <p className="text-center text-4xl font-bold">$149</p>
      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
      </div>
      <button
        className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 "
        style={{ margin: "auto" }}
      >
        Start Trial
      </button>
    </div>
  );
};

export default Double;
