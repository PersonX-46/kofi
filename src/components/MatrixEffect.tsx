"use client";
import React, { useEffect, useRef } from "react";

const MatrixEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix effect letters
    const letters: string[] = "THELONELYBLOGGER".split("");

    // Columns based on canvas width and font size
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    // Drops array to track the position of characters
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    // Draw function
    const draw = () => {
      if (!ctx) return;
      // Clear canvas by filling it with a semi-transparent black color
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Loop over drops and render letters
      drops.forEach((drop, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#1d130d"; // Green for Matrix style
        ctx.fillText(text, i * fontSize, drop * fontSize);

        // Increment y-position for drop
        drops[i]++;

        // Reset drop if it goes off the canvas
        if (drop * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      });
    };

    // Set the draw interval to 33ms (approx. 30 frames per second)
    const interval = setInterval(draw, 33);

    // Handle window resizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Clean up when the component is unmounted
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full opacity-30 z-1"
    ></canvas>
  );
};

export default MatrixEffect;
