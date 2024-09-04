import React from "react";

const Promotions = () => {
  return (
    <div className="pt-6">
      <p className="text-center text-blue-600 font-semibold tracking-widest text-xs py-6">
        PROMOTIONS
      </p>
      <h1 className="text-4xl text-center font-bold">Our Promotions Events</h1>
      <div className="py-10">
        <div className="grid grid-cols-2 bg-gray-300 pl-10 pt-3">
          <p>
            <h1 className="text-3xl font-bold">GET UP TO 60%</h1>
            For the Summer Season
          </p>
          <img src="event1.webp" className="h-full" />
        </div>
        <div className="bg-black mt-4 text-white text-center pt-8 pb-3 px-4">
          <h1 className="text-3xl font-bold pb-6">GET 30% OFF </h1>
          <p className="text-sm pb-4">USE PROMO CODE</p>
          <button className="bg-gray-600 w-full text-base py-2 rounded-md tracking-widest font-semibold px-10">
            DINEWEEKENDSALE
          </button>
        </div>

        <div>
          <div>
            <p>Flex Sweatshirt</p>
            <p className="">$100.00</p>
            <p className="">$75.00</p>
            <img src="event2.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
