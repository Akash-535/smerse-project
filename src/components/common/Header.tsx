"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/images/logo.webp";
import { HEADER_LIST } from "@/utils/Helper";

const Header = () => {
  const [showSlide, setShowSlide] = useState(false);

  const toggleSidebar = () => setShowSlide(!showSlide);
  const closeNavbar = () => setShowSlide(false);

  useEffect(() => {
    document.body.style.overflow = showSlide ? "hidden" : "auto";
  }, [showSlide]);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;
      if (window.scrollY > 100) {
        header.classList.add("bg-opacity-100");
        header.classList.remove("bg-opacity-50");
        header.classList.add("!bg-black");
      } else {
        header.classList.remove("bg-opacity-100");
        header.classList.add("bg-opacity-50");
        header.classList.remove("!bg-black");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="overflow-hidden mx-auto px-4 py-4 max-lg:py-3 bg-dark-blue max-md:py-[5px] fixed left-0 top-0 w-full z-[11] bg-opacity-50 transition-all duration-300 ease-in-out"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#">
          <Image
            className="max-lg:size-[76px] max-md:size-[40px] pointer-events-none"
            src={Logo}
            alt="logo"
            width={68}
            height={68}
          />
        </Link>

        <div
          className={`flex gap-5 max-lg:gap-3 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full max-lg:bg-gradient-to-r max-lg:from-light-purple max-lg:via-light-pink max-lg:to-light-orange duration-300 ease-linear z-20 ${
            showSlide ? "max-lg:left-0" : "max-lg:left-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <ul key={i}>
              <li className="flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white">
                <Link
                  href={obj.link}
                  onClick={closeNavbar}
                  className="text-base font-semibold text-white"
                >
                  {obj.title}
                </Link>
              </li>
            </ul>
          ))}
          <button
            onClick={closeNavbar}
            className="md:hidden p-[11px_23px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-white text-xl font-extrabold tracking-[2px] leading-6 rounded-lg hover:bg-gradient-to-b"
          >
            Mint Now
          </button>
        </div>
        <div className="flex items-center gap-10">
          <button className="max-md:hidden p-[11px_23px] bg-gradient-to-t to-light-purple via-light-pink from-light-orange text-white text-xl font-extrabold tracking-[2px] leading-6 rounded-lg hover:bg-gradient-to-b">
            Mint Now
          </button>
          <div
            onClick={toggleSidebar}
            className="z-[21] flex-col gap-1 lg:hidden flex cursor-pointer"
          >
            <span
              className={`${
                showSlide
                  ? "w-7 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded"
                  : "w-7 h-1 bg-white duration-300 ease-linear rounded"
              }`}
            ></span>
            <span
              className={`${
                showSlide
                  ? "w-7 h-1 bg-white translate-x-10 opacity-0 duration-300 ease-linear"
                  : "w-7 h-1 bg-white duration-700 ease-linear rounded"
              }`}
            ></span>
            <span
              className={`${
                showSlide
                  ? "w-7 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded"
                  : "w-7 h-1 bg-white duration-300 ease-linear rounded"
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
