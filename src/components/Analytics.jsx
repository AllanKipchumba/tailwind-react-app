import React from "react";
import stats from "../assets/stats.svg";

const Analytics = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={stats} alt="stats" />
        <div className="flex flex-col justify-center">
          <p className="uppercase mx-auto md:mx-0 text-[#00df9a] font-bold">
            data analytics dashboard
          </p>
          <p className="capitalize md:text-4xl sm:ext-3xl text-2xl mx-auto md:mx-0 font-bold py-2">
            manage data analytics centrally
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tincidunt eget nullam non nisi est sit amet facilisis. Odio ut enim
            blandit volutpat maecenas. In tellus integer feugiat scelerisque
            varius morbi enim nunc faucibus. Ac odio tempor orci dapibus
            ultrices. In nibh mauris cursus mattis molestie a iaculis at.
            Volutpat consequat mauris nunc congue nisi vitae suscipit tellus.
            Quis viverra nibh cras pulvinar mattis nunc. In hac habitasse platea
            dictumst quisque sagittis. Dignissim diam quis enim lobortis
            scelerisque fermentum dui. Tristique risus nec feugiat in fermentum.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get started
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
