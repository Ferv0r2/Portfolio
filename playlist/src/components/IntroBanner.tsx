"use client";

import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Lottie from "react-lottie-player";
import lottieJson from "@/assets/lottie/dev.json";

export const IntroBanner = () => {
  const text = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const lottieRef = useRef<HTMLDivElement | null>(null);
  const [isPointerActive, setIsPointerActive] = useState(false);

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

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 768;
    };

    const drawCircle = (x: number, y: number, size: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 255, 255, 0.2)";
      context.fill();
      context.closePath();
      requestAnimationFrame(() => drawCircle(x, y, size));
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCanvasSize();
      const circleSize = isPointerActive ? 30 : 20;
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      requestAnimationFrame(() => drawCircle(mouseX, mouseY, circleSize));
    };

    const handleTextInteraction = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      if (targetElement.classList.contains("special-text")) {
        setIsPointerActive(true);
      } else {
        setIsPointerActive(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("mousemove", handleTextInteraction);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleTextInteraction);
    };
  }, [isPointerActive]);

  return (
    <section
      id="home"
      className="w-full -mt-16 bg-gradient-to-r from-black text-gray-50 to-zinc-700 font-[GmarketSansMedium] animate-wave"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[768px] z-10"
        style={{
          pointerEvents: "none",
        }}
      />
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
