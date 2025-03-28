import React from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const ExperienceCard = ({ card, index }: { card: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`${
      index % 2 === 0 ? "lg:mt-0" : "lg:mt-24"
    } w-full lg:w-[calc(50%-1rem)]`}
  >
    <Button
      duration={Math.floor(Math.random() * 10000) + 10000}
      borderRadius="1.75rem"
      className="w-full h-full text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 rounded-2xl group"
    >
      <div className="flex flex-col p-6 py-8 md:p-8 gap-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-grid-white/5 bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity" />

        {/* Company logo and year */}
        <div className="flex items-center justify-between">
          <motion.img
            src={card.thumbnail}
            alt={card.thumbnail}
            className="w-16 md:w-20 lg:w-24 z-10 rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <div className="px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">
            {card.year || "Present"}
          </div>
        </div>

        <div className="z-10">
          <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-300 to-neutral-200 group-hover:from-purple-400 group-hover:via-violet-400 group-hover:to-white transition-all duration-300">
            {card.title}
          </h1>
          <p className="text-sm md:text-base text-white/70 mt-3 leading-relaxed">
            {card.desc}
          </p>
          {card.link && (
            <motion.a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-white transition-colors group/link"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="border-b border-purple-400/30 group-hover/link:border-white/30">
                Learn More
              </span>
              <FaLocationArrow className="w-3 h-3" />
            </motion.a>
          )}
        </div>
      </div>
    </Button>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-violet-600 via-purple-400 to-blue-500 text-transparent bg-clip-text">
            work experience
          </span>
        </motion.h2>

        {/* Masonry grid container */}
        <div className="flex flex-wrap lg:flex-row gap-8 items-start">
          {workExperience.map((card, index) => (
            <ExperienceCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
