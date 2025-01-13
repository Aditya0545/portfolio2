import React from "react";
import { motion } from "framer-motion";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            work experience
          </span>
        </motion.h2>

        <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 px-4 md:px-0">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="w-16 md:w-20 lg:w-32"
                />
                <div className="mt-3 md:mt-5">
                  <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-sm md:text-base text-white-100 mt-2 md:mt-3 font-semibold">
                    {card.desc}
                  </p>
                  {card.link && (
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 underline mt-2 inline-block"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
