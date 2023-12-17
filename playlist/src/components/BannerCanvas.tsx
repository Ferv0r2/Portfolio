"use client";

import { useEffect, useRef, useState } from "react";

export const BannerCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [targetSize, setTargetSize] = useState(20);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 768;
    };

    let currentSize = 20;

    const drawCircle = (x: number, y: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.beginPath();
      context.arc(x, y, currentSize, 0, Math.PI * 2);
      context.fillStyle = "rgba(255, 255, 255, 0.2)";
      context.fill();
      context.closePath();

      currentSize += (targetSize - currentSize) / 10;
      requestAnimationFrame(() => drawCircle(x, y));
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCanvasSize();
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      requestAnimationFrame(() => drawCircle(mouseX, mouseY));
    };

    const handleTextInteraction = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      if (targetElement.classList.contains("special-text")) {
        setTargetSize(30);
      } else {
        setTargetSize(20);
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
  }, [targetSize]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[768px] z-10"
      style={{
        pointerEvents: "none",
      }}
    />
  );
};
