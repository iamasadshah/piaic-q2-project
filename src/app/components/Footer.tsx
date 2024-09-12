import React from "react";

import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 my-20  md:grid md:grid-cols-2 md:gap-x-44 md:justify-center md:items-center md:px-24 lg:grid-cols-4 lg:gap-x-10  lg:items-start lg:justify-center">
      <div className="space-y-2 mb-4">
        <img src="Logo.webp" />
        <p className="text-gray-400">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex gap-x-4">
          <div className="rounded-lg bg-gray-200 p-3">
            <FaTwitter />
          </div>
          <div className="rounded-lg bg-gray-200 p-3">
            <FaFacebookF />
          </div>
          <div className="rounded-lg bg-gray-200 p-3">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="space-y-2 lg:ml-auto mb-4">
        <h4 className="text-lg font-bold">Company</h4>
        <ul className="text-[15px] space-y-2">
          <li>About</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>How it Works</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="space-y-2 lg:ml-auto mb-4">
        <h4 className="text-lg font-bold">Support</h4>
        <ul className="text-[15px] space-y-2">
          <li>Support Career</li>
          <li>24h Service</li>
          <li>Quick Chat</li>
        </ul>
      </div>
      <div className="space-y-2 lg:ml-auto">
        <h4 className="text-lg font-bold">Contact</h4>
        <ul className="text-[15px] space-y-2">
          <li>Whatsapp</li>
          <li>Support 24h</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
