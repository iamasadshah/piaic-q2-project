import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="mt-6 md:mt-14 lg:flex lg:pr-6">
      <div className="px-6 md:px-20">
        <div className="bg-blue-100 text-lg font-bold text-blue-600 text-center inline px-6 py-2">
          Sale 70%
        </div>
        <h1 className="text-2xl mt-8 font-[950] md:text-5xl md:mt-10 lg:pr-24">
          An Industrial Take on Streetwear
        </h1>
        <p className="mt-8 text-sm md:text-base text-gray-600 lg:pr-52">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <button className="mt-8 inline-flex bg-black py-2 px-4 text-white items-center space-x-2 rounded-sm md:mt-12 font-semibold tracking-wider">
          <FiShoppingCart className="text-xl" />
          <a href="#">Start Shopping</a>
        </button>
        <div className="mt-8 flex space-x-4 justify-center items-center md:space-x-12">
          <img width={50} src="Featured1.webp" className="md:w-28" />
          <img width={50} src="Featured2.webp" className="md:w-28" />
          <img width={50} src="Featured3.webp" className="md:w-28" />
          <img width={50} src="Featured4.webp" className="md:w-28" />
        </div>
      </div>
      <div className="bg-[#FFECE3] lg:basis-[60%] md:basis-[60%] hidden  lg:flex justify-center items-center pb-32 px-32 rounded-full aspect-square relative">
        <img
          src="Hero-image.webp"
          alt="Hero-Image"
          className="absolute inset-0 -mt-14 object-cover w-full h-full "
        />
      </div>
    </div>
  );
};

export default Hero;
