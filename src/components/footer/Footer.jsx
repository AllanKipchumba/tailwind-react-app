import React from "react";
import {
  FaTwitterSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import Company from "./Company";
import Legal from "./Legal";
import Solutions from "./Solutions";
import Support from "./Support";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-100">
      <div>
        <h1 className="uppercase w-full text-3xl font-bold text-[#00df9a]">
          React.
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          eget nullam non nisi est sit amet facilisis. Odio ut enim blandit
          volutpat maecenas. In tellus integer feugiat scelerisque varius morbi
          enim nunc faucibus
        </p>
        <div className="flex justify-between my-6 md:w-[75%] ">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between lg:mt-11">
        <Solutions />
        <Support />
        <Company />
        <Legal />
      </div>
    </div>
  );
};

export default Footer;
