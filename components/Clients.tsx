"use client";

import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A good words from{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            satisfied clients
          </span>
        </motion.h2>

        <div className="flex flex-col items-center max-lg:mt-10">
          <div
            // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
            className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2">
                  <Image 
                    src={company.img} 
                    alt={company.name} 
                    width={40}
                    height={40}
                    className="md:w-10 w-5"
                    unoptimized={company.img.endsWith('.svg')}
                  />
                  <Image 
                    src={company.nameImg}
                    alt={company.name}
                    width={company.id === 4 || company.id === 5 ? 100 : 150}
                    height={40}
                    className="md:w-24 w-20"
                    unoptimized={company.nameImg.endsWith('.svg')}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
