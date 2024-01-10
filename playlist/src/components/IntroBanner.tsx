"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Lottie from "react-lottie-player";
import lottieJson from "@/assets/lottie/dev.json";

export const IntroBanner = () => {
  const text = useRef(null);

  useEffect(() => {
    const typed = new Typed(text.current, {
      strings: ["Front-end Dev.", "Passion Dev."],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: true,
      onComplete: () => {
        setTimeout(() => {
          if (typed.cursor) {
            typed.cursor.style.opacity = "0";
          }
        }, 1000);
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="w-full -mt-16 bg-gradient-to-r from-black text-gray-50 to-zinc-700 font-[GmarketSansMedium] animate-wave"
    >
      <main className="w-full md:w-[1200px] h-[768px] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-16">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col text-[48px] font-bold leading-tight">
            <span className="special-text">Hello, I am</span>
            <div>
              <span ref={text} className="special-text" />
            </div>
          </div>
          <div>
            <span>
              I am a developer who is truly passionate about achieving results.
            </span>
          </div>
          <div className="special-text cursor-pointer w-32 text-white flex justify-center transition-colors duration-300 bg-indigo-600 rounded-lg px-4 py-3 hover:bg-indigo-700">
            Contact
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="w-full h-96">
            <Lottie loop animationData={lottieJson} play />
          </div>
        </div>
      </main>
    </section>
  );
};
