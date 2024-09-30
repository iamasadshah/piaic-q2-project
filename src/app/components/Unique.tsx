import React from "react";
import Image from "next/image";
import Link from "next/link";
const Unique = () => {
  return (
    <div className="mt-20 mb-4 md:px-16 lg:mt-36 md:mt-24">
      <div className="px-6 bg-[#FBFCFF] md:px-16 relative pt-24 lg:grid lg:grid-cols-2 lg:gap-x-20 ">
        <h1 className="text-3xl font-bold row-span-2 md:text-5xl absolute xxxs:-mt-24 xxs:-mt-24 xs:-mt-20 md:-mt-32 lg:m-0 lg:text-right lg:-mt-8">
          Unique and Authentic Vintage Designer Jewellery
        </h1>

        <div className="grid grid-cols-2 mt-6 text-sm gap-x-4 gap-y-4">
          <div>
            <p className="font-bold ">Using Good Quality Meterials</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            {" "}
            <p className="font-bold ">100% Handmade Products</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            {" "}
            <p className="font-bold  ">Modern Fashion Design</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div>
            {" "}
            <p className="font-bold ">Discount For Bulk orders</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
        </div>

        {/* =========================================================== */}

        <div className=" md:grid md:grid-cols-2 md:gap-x-4">
          <div className="my-4 flex justify-center items-center">
            <Image
              src="/unique.webp"
              alt="unique title"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center md:mt-8 md:text-start text-gray-600">
            <p>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/all-products"}>
              <button className="bg-black text-white rounded-md font-semibold px-10 py-2 mt-2 hover:text-black hover:bg-white hover:ring-2 hover:ring-black">
                See All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;
