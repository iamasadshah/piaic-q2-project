"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiShoppingCart, FiX } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Large and Tablet Screen Navbar */}
      <div className="hidden lg:flex justify-between py-5 items-center px-24 bg-white space-x-4 sticky top-0 z-20">
        <Link href={"/"}>
          {" "}
          <Image
            src="/Logo.webp"
            alt="logo"
            width={200}
            height={200}
            className="w-36"
          />
        </Link>
        <div className="flex gap-5 text-[15px] ">
          <a href="/female">Female</a>
          <a href="/male">Male</a>
          <a href="/kids">Kids</a>
          <a href="/all-products">All Products</a>
        </div>
        <div className="flex border border-gray-300 rounded-md bg-white w-[35%]">
          <div className="flex items-center p-1 w-full">
            <CiSearch />
            <input
              type="text"
              className="text-xs w-full pl-2"
              placeholder="What You Looking for"
            />
          </div>
        </div>
        <a href="">
          <div className="bg-gray-200 rounded-full p-3 relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute bg-[#f02d34] rounded-full w-5 h-5 text-center top-0 right-0 text-white">
              0
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Navbar */}

      <div className="lg:hidden flex justify-between items-center py-5 px-4 bg-white ">
        <Link href={"/"}>
          <Image src="/Logo.webp" alt="logo" width={130} height={130} />{" "}
        </Link>
        <button
          className="text-3xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <CgMenuRightAlt />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-8 p-4 bg-white h-screen py-20 md:py-32 items-center">
          <a href="" className="flex justify-center">
            <div className="bg-gray-200 rounded-full p-3 relative">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute bg-[#f02d34] rounded-full w-5 h-5 text-center top-0 right-0 text-white">
                0
              </span>
            </div>
          </a>
          <a href="/female">Female</a>
          <a href="/male">Male</a>
          <a href="/kids">Kids</a>
          <a href="/all-products">All Products</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
