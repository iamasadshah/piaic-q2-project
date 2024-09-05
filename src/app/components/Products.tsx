import React from "react";

const Products = () => {
  return (
    <div className="mt-40 md:mt-20">
      <div className="text-center">
        <h3 className="text-blue-600 tracking-wider font-bold text-sm">
          PRODUCTS
        </h3>
        <h4 className="font-[900] text-4xl text-black">Check What We Have</h4>
      </div>

      <div className="flex mt-10 lg:px-16 md:justify-center md:mt-4 lg:mt-10">
        <div className=" lg:basis-1/3 lg:h-[350px] lg:w-[350px] lg:hover:scale-125 hover:scale-105 md:w-[500px] ease-in duration-500">
          <img
            src="product1.webp"
            alt="Flex Sweatshirt"
            loading="lazy"
            width="800"
            height="1000"
            className="w-full h-full object-contain"
          />
          <div className="font-bold text-center mt-1">
            <div>Flex Sweatshirt</div>
            <div>$175</div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col hidden lg:basis-1/3 lg:h-[350px] lg:w-[350px] hover:scale-125 ease-in duration-500">
          <img
            src="product2.webp"
            alt="Flex Sweatshirt"
            loading="lazy"
            width="800"
            height="1000"
            className="w-full h-full object-contain"
          />
          <div className="font-bold text-center mt-2">
            <div>Flex Sweatshirt</div>
            <div>$175</div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col hidden lg:basis-1/3 lg:h-[350px] lg:w-[350px] hover:scale-125 ease-in duration-500">
          <img
            src="product3.webp"
            alt="Flex Sweatshirt"
            loading="lazy"
            width="800"
            height="1000"
            className="w-full h-full object-contain"
          />
          <div className="font-bold text-center mt-2">
            <div>Flex Sweatshirt</div>
            <div>$175</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
