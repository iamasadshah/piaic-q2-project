import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

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
        <button className="mt-8 inline-flex bg-black py-2 px-4 text-white items-center space-x-2 rounded-sm md:mt-12 font-semibold tracking-wider hover:text-black hover:bg-white hover:ring-2 hover:ring-black">
          <FiShoppingCart className="text-xl" />
          <a href="#">Start Shopping</a>
        </button>
        <div className="mt-8 flex space-x-4 justify-center items-center md:space-x-12">
          <Image
            alt="featurd"
            width={200}
            height={200}
            src="/Featured1.webp"
            className="md:w-28"
          />
          <Image
            alt="featurd"
            width={200}
            height={200}
            src="/Featured2.webp"
            className="md:w-28"
          />
          <Image
            alt="featurd"
            width={200}
            height={200}
            src="/Featured3.webp"
            className="md:w-28"
          />
          <Image
            alt="featurd"
            width={50}
            height={50}
            src="/Featured4.webp"
            className="md:w-28"
          />
        </div>
      </div>
      <div className="hidden bg-[#FFECE3] lg:flex lg:basis-[60%] justify-center items-center pb-32 px-32 rounded-full aspect-square relative">
        <Image
          src="/Hero-image.webp"
          height={200}
          width={200}
          alt="Hero-Image"
          className="absolute inset-0 -mt-14 object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
