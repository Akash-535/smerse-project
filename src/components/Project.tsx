import React from "react";
import Image from "next/image";
import Heading from "./common/Heading";
import { PROJECTS_LIST } from "@/utils/Helper";
import projectImg from "../../public/assets/images/project-img.webp";

const Project = () => {
  return (
    <div
      id="project"
      className="px-4 pt-[130px] max-lg:pt-[140px] max-md:pt-[67px]"
    >
      <div className="container mx-auto max-w-[1140px] flex items-center max-lg:flex-wrap gap-16 max-lg:gap-10">
        <div className="w-6/12 max-lg:w-full">
          <Heading
            text="THE PROJECT"
            headingSpan="THE PROJECT"
            mySpanClass="top-[2%]"
          />
          <div className="pt-[21px] max-w-[505px] max-lg:max-w-full gap-2 flex flex-col">
            {PROJECTS_LIST.map((obj, i) => (
              <div key={i}>
                <div className="flex items-start gap-5">
                  <div className="size-[29px] w-full max-w-[39px] pointer-events-none">
                    {obj.icon}{" "}
                  </div>
                  <p className="text-white font-normal text-base leading-6 max-w-[510px] max-xl:max-w-none">
                    {obj.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-6/12 max-lg:w-full lg:justify-end flex">
          <Image
            src={projectImg}
            alt="the project"
            width={471}
            height={626}
            className="object-cover pointer-events-none max-lg:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
