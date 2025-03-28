"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { AnimatedBackground } from "./ui/AnimatedBackground";
import { useEffect, useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background with grid and gradient */}
      <div className="fixed inset-0 bg-grid-small-white/[0.02]" />
      <div className="fixed inset-0 bg-gradient-to-br from-[#16072a] via-[#080316] to-[#070f33]" />
      <AnimatedBackground />

      {/* Animated circles */}
      <motion.div
        className="fixed top-[20%] -left-36 w-[650px] h-[650px] bg-purple-800 opacity-15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.1, 0.15],
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          x: { duration: 0.1 },
          y: { duration: 0.1 },
        }}
      />
      <motion.div
        className="fixed bottom-[20%] -right-36 w-[650px] h-[650px] bg-blue-800 opacity-15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.1, 0.15],
          x: mousePosition.x * -50,
          y: mousePosition.y * -50,
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
          opacity: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
          x: { duration: 0.1 },
          y: { duration: 0.1 },
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center w-full max-w-3xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center w-full"
          >
            <p className="text-neutral-400 text-sm tracking-[0.3em] uppercase mx-auto">
              Dynamic Web Magic with Next.js
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-200 tracking-tight w-full mx-auto text-center"
          >
            Aditya Kumar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16 w-full text-center"
          >
            <p className="text-neutral-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Google Developer Group Core Team | WIKI Contributor | JAVA
              Developer |{" "}
              <motion.span
                className="text-purple-400 font-medium inline-block"
                whileHover={{ scale: 1.1 }}
              >
                AI/ML Enthusiasts
              </motion.span>{" "}
              | Team Management |{" "}
              <motion.span
                className="text-blue-400 font-medium inline-block"
                whileHover={{ scale: 1.1 }}
              >
                Graphic Design
              </motion.span>{" "}
              | College Ambassador
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full flex justify-center"
          >
            <Link href="/resume">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full 
                         hover:from-purple-500 hover:to-blue-500 transition-all duration-300 
                         shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]
                         flex items-center gap-3 mx-auto backdrop-blur-sm relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="font-medium text-base relative z-10">
                  Show my work
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <FaLocationArrow className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mouse scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 relative overflow-hidden group"
          whileHover={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-white/50 rounded-full group-hover:bg-white/70 transition-colors"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
