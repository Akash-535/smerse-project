"use client";
import React, { useEffect, useState } from "react";
import backToTopImg from "../../../public/assets/images/back-to-top.webp";
import Image from "next/image";
const BackToTop = () => {
  // State for back-to-top
  const [scrollTop, setScrollToTop] = useState(false);
  // Smooth scroll to top
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Update state if scrolled past 500px
  const setHendler = () => {
    setScrollToTop(window.scrollY > 500);
  };
  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", setHendler);
  }, []);
  return (
    <>
      {scrollTop && (
        <button
          onClick={scrollHandler}
          className="fixed right-2 bottom-2 animate-bounce z-40 cursor-pointer"
        >
          <Image
            height={48}
            width={48}
            src={backToTopImg}
            alt="back to top image"
            className="pointer-events-none max-md:size-9"
          />
        </button>
      )}
    </>
  );
};

export default BackToTop;
