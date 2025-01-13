"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-52"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A small selection of{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            recent projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-40">
          {projects.map((item) => (
            <div
              key={item.id}
              className="h-[550px] w-[340px] sm:w-[450px] md:w-[550px]"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center w-full h-[300px] mb-8">
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img 
                      src="/bg.png" 
                      alt="Background" 
                      className="w-full h-full object-cover opacity-40" 
                    />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute z-10 h-[85%] w-auto object-contain"
                  />
                </div>

                <div className="space-y-6">
                  <h1 className="font-bold text-xl sm:text-2xl line-clamp-1">
                    {item.title}
                  </h1>

                  <p className="text-[#BEC1DD] text-base sm:text-lg line-clamp-2">
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex -space-x-3">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/[0.2] 
                                   bg-black/80 backdrop-blur-sm flex items-center justify-center"
                        >
                          <img
                            src={icon}
                            alt={`Tech ${index + 1}`}
                            className="w-6 h-6 sm:w-7 sm:h-7 p-1"
                          />
                        </div>
                      ))}
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-purple hover:text-white transition-colors group"
                    >
                      <span className="text-base sm:text-lg whitespace-nowrap">Live Demo</span>
                      <FaLocationArrow 
                        className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" 
                      />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
