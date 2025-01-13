"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4 mb-12">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A small selection of{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            recent projects
          </span>
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="Background" />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title} // More descriptive alt text
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index + 2}px)` }}
                      >
                        <img
                          src={icon}
                          alt={`Icon ${index + 1}`}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <a // Link for "Check Live Site"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center transition-transform hover:translate-x-1" // Simplified hover
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
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
