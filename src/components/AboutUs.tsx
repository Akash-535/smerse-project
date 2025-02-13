import React from "react";
import Image from "next/image";
import aboutUsImg from "../../public/assets/images/about-us-img.webp";
import { ABOUT_US_LIST } from "@/utils/Helper";
import Heading from "./common/Heading";
const AboutUs = () => {
  return (
    <div className="relative max-w-[1920px] mx-auto overflow-hidden">
      <div className="container mx-auto lg:px-4 flex items-center justify-between pt-[189px] max-lg:pt-24 max-sm:pt-[60px] max-lg:pb-[99px] pb-[272px] max-sm:pb-[19px] gap-10 max-lg:gap-8 max-sm:gap-5 max-lg:flex-wrap">
        <div className="relative z-10 max-lg:px-4 md:px-8">
          <Heading
            text="About Us"
            headingSpan="About Us"
            mySpanClass="max-md:translate-x-[2px] max-md:-top-[2%] translate-x-[2px]"
          />
          <div className="pt-7 max-xl:pt-5 max-md:pt-8 flex flex-col gap-2">
            {ABOUT_US_LIST.map((obj, i) => (
              <div
                key={i}
                className="flex gap-5 max-xl:pt-3 max-xl:items-center"
              >
                <div className="size-[29px] min-w-[29px] mt-0.5 flex items-center justify-center rounded-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange">
                  {obj.icon}
                </div>
                <p className="text-white tracking-[1.5px] text-base leading-custom-xl max-w-[560px] font-normal max-lg:max-w-3xl">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-sm:pt-4 justify-center flex w-full">
          <Image
            src={aboutUsImg}
            alt="about"
            width={954}
            height={690}
            className="pointer-events-none max-lg:mx-auto lg:hidden max-md:min-w-[600px] max-md:max-w-[654px] max-w-[950px] md:min-w-[943px] mx-auto w-full max-lg:-translate-x-10"
          />
        </div>
      </div>
      <Image
        src={aboutUsImg}
        alt="about"
        width={954}
        height={690}
        className="pointer-events-none max-xl:w-[700px] max-xl:top-[18%] max-lg:mx-auto max-lg:hidden absolute top-11 right-0 max-lg:-left-40 max-xl:-right-24 max-lg:top-[412px]"
      />
    </div>
  );
};

export default AboutUs;
