import React from "react";

const Promotions = () => {
  return (
    <div className="pt-6 md:px-10 ">
      <p className="text-center text-blue-600 font-semibold tracking-widest text-xs py-6">
        PROMOTIONS
      </p>
      <h1 className="text-4xl text-center font-bold">Our Promotions Events</h1>
      <div className="py-10 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:px-16">
        <div>
          <div className="grid grid-cols-2 bg-gray-300 pl-10 pt-3">
            <p className="md:mt-10 ">
              <b className="text-3xl font-bol md:text-4xl">GET UP TO 60%</b>
              <br />
              <b className="md:text-lg">For the Summer Season</b>
            </p>
            <img src="event1.webp" className="h-full" />
          </div>
          <div className="bg-black mt-4 text-white text-center pt-8 pb-3 px-4 xl:h-[50%]">
            <h1 className="text-3xl font-bold pb-6 ">GET 30% OFF </h1>
            <p className="text-sm pb-4 xl:pb-6">USE PROMO CODE</p>
            <button className="bg-gray-600 w-full text-base py-2 rounded-md tracking-widest font-semibold px-10 xl:w-[70%]">
              DINEWEEKENDSALE
            </button>
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-x-8 mt-8 lg:m-0">
          <div className="bg-[#EFE1C7] pt-6 text-center">
            <p className="text-center font-semibold pb-3">Flex Sweatshirt</p>
            <p className="line-through">$100.00</p>
            <p className="font-semibold">$75.00</p>
            <img src="event2.webp" alt="Flex-Sweatshirt" />
          </div>
          <div className="bg-[#D7D7D9] pt-6 text-center">
            <p className="text-center font-semibold pb-3">
              Flex Push Button Bomber
            </p>
            <p className="line-through">$225.00</p>
            <p className="font-semibold">$190.00</p>
            <img src="event3.webp" alt="Flex-Push-Button-Bomber" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
