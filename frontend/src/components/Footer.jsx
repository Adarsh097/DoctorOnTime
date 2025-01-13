import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  // ! my practice
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* LEFT SECTION */}
        <div>
          <div className="flex">
            <img className="mb-5 w-8" src={assets.icon} alt="" />
            <p className=" cursor-pointer text-2xl font-bold text-sky-900 mb-4">
              DocOnTime
            </p>
          </div>

          <p className="w-full md:2/3 text-gray-600 leading-6">
            Book appointments with trusted doctors effortlessly. Browse
            specialists, view availability, and reserve your time with ease.
            Convenient, secure, and designed to put quality healthcare at your
            fingertips anytime.
          </p>
        </div>

        {/* MID SECTION */}
        <div>
          <p className="font-medium text-lg text-gray-800 mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li
              onClick={() => {
                navigate(`/`);
              }}
              className="cursor-pointer hover:underline"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate(`/about`);
              }}
              className="cursor-pointer hover:underline"
            >
              About Us
            </li>
            <li
              onClick={() => {
                navigate(`/contact`);
              }}
              className="cursor-pointer hover:underline"
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                navigate(`/`);
              }}
              className="cursor-pointer hover:underline"
            >
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <p className="font-medium text-lg text-gray-800 mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 9999999999</li>
            <li>docontime@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm font-medium">
        {/* COPYRIGHT */}
        <hr className="h-2 w-full" />
        <p className="text-gray-600 my-5">
          Copyright © 2024 DocOnTime - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
