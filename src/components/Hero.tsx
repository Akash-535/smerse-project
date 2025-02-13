import Header from "@/components/common/Header";
import React from "react";
import Image from "next/image";
import heroImg from "../../public/assets/images/hero-img.webp";

const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover bg-center bg-no-repeat max-lg:bg-hero-tab-bg max-md:bg-hero-mobile-bg">
      <Header />
      <div className="pt-[152px] pb-[50px] flex justify-center items-center flex-col px-3.5 max-lg:pb-[105px] max-lg:pt-[179px] max-md:pt-[163px] max-md:pb-[85px]">
        <Image
          className="max-lg:w-[388px] max-md:w-[256px]"
          width={404}
          height={241}
          src={heroImg}
          alt="hero img"
        />
        <div className="relative">
          <h1 className="pt-8 text-8xl font-black text-white tracking-[3px] relative z-10 leading-custom-md max-md:text-[40px] max-md:pt-[108px]">
            SMERSE
          </h1>
          <span className="absolute inset-0 text-8xl max-md:text-[40px] leading-custom-md font-black bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[23.5%] -translate-x-0.5 max-md:top-[70%]">
            SMERSE
          </span>
        </div>
        <p className="text-4xl leading-custom-xl text-white max-w-[637px] mx-auto text-center pt-2.5 tracking-[2px] max-md:text-xl">
          FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
        </p>
        <button className="py-4 px-7 bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-white text-xl font-extrabold tracking-[2px] leading-6 rounded-lg mt-11 hover:bg-gradient-to-b max-md:mt-20">
          Get Started
        </button>
      </div>
      <div className="h-10 w-full bg-gradient-to-b from-light-purple via-light-pink to-light-orange drop-shadow-[0px_0px_15.01px_#FFFFFF80]"></div>
    </div>
  );
};

export default Hero;
