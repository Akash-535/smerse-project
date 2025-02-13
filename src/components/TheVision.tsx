import React from "react";
import Heading from "./common/Heading";
import { VISION_LIST } from "@/utils/Helper";

const TheVision = () => {
  return (
    <div id="vision" className="px-4 flex justify-center items-center">
      <div className="contaier mx-auto">
        <div className="w-fit mx-auto">
          <Heading
            text="THE VISION"
            headingSpan="THE VISION"
            myClass="text-center"
            mySpanClass="top-[2%]"
          />
        </div>
        <div className="mt-[138px] max-lg:mt-[128px] max-sm:mt-[88px] flex max-lg:max-w-[774px] max-lg:gap-y-[88px] justify-center max-xl:justify-start max-[833px]:justify-center mx-auto max-lg:flex-wrap gap-5 max-lg:gap-9">
          {VISION_LIST.map((obj, i) => (
            <div
              key={i}
              className="bg-gradient-to-t from-light-purple via-light-pink to-light-orange p-[1px] rounded-lg group"
            >
              <div className="relative h-full max-w-[367px] min-h-[365px] bg-purple-gray px-[27px] rounded-lg pt-[90px] pb-8 group-hover:bg-transparent transition-all duration-300 ease-linear max-md:px-4">
                <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 rounded-full w-fit bg-gradient-to-b from-light-purple via-light-pink to-light-orange p-[1px] flex items-center justify-center">
                  <div className="bg-purple-gray rounded-full size-24 max-md:size-[86px] flex items-center justify-center group-hover:bg-transparent transition-all duration-300 ease-linear">
                    <p className="text-4xl font-extrabold text-white">
                      {obj.numButton}
                    </p>
                  </div>
                </div>
                <p className="text-center text-white leading-[168%] tracking-[2px] max-md:tracking-[1px] text-base">
                  {obj.description}
                </p>
                <p className="text-center text-white leading-[168%] tracking-[2px] max-md:tracking-[1px] text-base">
                  {obj.descriptioTwo}
                </p>
                <p className="text-center text-white leading-[168%] tracking-[2px] max-md:tracking-[1px] text-base">
                  {obj.descriptioThree}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TheVision;
