import React from "react";
import { assets } from "../assets/assets";
import { CardHoverEffectDemo } from "../components/Grid";



const About = () => {
  return (
    <div>
      <div className="text-center text-xl pt-10">
        <p className="font-medium">
          <span className="text-gray-600">ABOUT</span> US
        </p>
      </div>

      <div className="flex flex-col my-10 md:flex-row gap-12 items-center">
        <img
          className="w-full max-w-[360px] rounded-lg outline-none drop-shadow-xl"
          src={assets.about_image}
          alt=""
        />
        <div className="text-gray-600 tracking-wide flex flex-col gap-6 md:2/4 text-sm">
          <p>
            Welcome to DocOnTime, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At DocOnTime, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            DocOnTime is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, DocOnTime is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at DocOnTime is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div>
        <p className="text-gray-800 font-medium">
          Why <span className="text-gray-500">Choose Us</span>
        </p>
      </div>

      {/* CARD BOTTOM */}
      <CardHoverEffectDemo/>
    </div>
  );
};

export default About;
