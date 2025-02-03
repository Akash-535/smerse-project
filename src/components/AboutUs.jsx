import React from "react";
import Image from "next/image";
import aboutUsImg from "../../public/assets/images/about-us-img.webp";
import aboutBlueLayer from "../../public/assets/images/about-blue-layer.webp";
import aboutRedLayer from "../../public/assets/images/about-red-layer.webp";
import { ABOUT_US_LIST } from "@/utils/Helper";
const AboutUs = () => {
  return (
    <div className="flex container mx-auto pt-36 pb-[78px] max-xl:pt-24 max-md:pt-[60px] justify-between items-center relative max-xl:flex-col max-xl:px-8 max-xl:justify-center max-xl:items-center max-md:px-4 ">
      <div>
        <div className="relative">
          <h2 className="pt-8 text-5xl font-black text-white tracking-[3px] relative z-10 leading-custom-md max-md:text-[40px]">
            About Us
          </h2>
          <span className="absolute inset-0 text-5xl max-md:text-[40px] leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[33.5%] -translate-x-[1.5px] max-md:top-[38%]">
            About Us
          </span>
        </div>
        <div className="pt-7 max-xl:pt-5 max-md:pt-8">
          {ABOUT_US_LIST.map((obj, i) => (
            <div
              key={i}
              className="flex gap-5 pt-2 max-xl:pt-3 max-xl:items-center"
            >
              <div className="size-[29px] min-w-[29px] mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange">
                {obj.icon}
              </div>
              <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[560px] font-normal max-xl:max-w-3xl">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Image
        width={478.06}
        height={478.31}
        className="max-xl:pt-24 max-md:w-[300px] max-md:h-full object-cover max-md:pt-16"
        src={aboutUsImg}
        alt="about image"
      />
      {/* <Image
        width={324}
        height={347}
        className=" bg-blend-screen absolute top-1/4 -z-[1] right-1/4"
        src={aboutBlueLayer}
        alt="layer"
      />
      <Image
        width={324}
        height={347}
        className="bg-blend-screen absolute top-0 -z-[1] right-0"
        src={aboutRedLayer}
        alt="layer"
      /> */}
    </div>
  );
};

export default AboutUs;
