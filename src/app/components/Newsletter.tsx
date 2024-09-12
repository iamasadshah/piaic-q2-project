import React from "react";

const Newsletter = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-10 px-4">
      {/* Background text */}
      <h1 className="absolute text-6xl sm:text-[6rem] md:text-7xl lg:text-[7rem] font-bold text-gray-100  text-center z-0">
        Newsletter
      </h1>

      {/* Foreground content */}
      <div className="relative z-10 bg-transparent p-4 sm:p-6 text-center max-w-md w-full lg:space-y-10 space-y-8">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Subscribe Our Newsletter
        </h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Get the latest information and promo offers directly
        </p>
        <div className="mt-4 flex flex-col sm:flex-row items-center w-full">
          <input
            type="email"
            placeholder="Input email address"
            className="border p-2 sm:p-3 w-full sm:flex-1 rounded-t-md sm:rounded-l-md sm:rounded-tr-none sm:rounded-br-none focus:outline-none"
          />
          <button className="bg-black text-white p-2 sm:p-3 w-full sm:w-auto rounded-b-md sm:rounded-r-md sm:rounded-bl-none sm:rounded-tl-none mt-2 sm:mt-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
