"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 relative scroll-mt-20">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12 flex justify-center items-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold flex items-center gap-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            me
          </span>
        </motion.h2>
      </div>

      {/* Content Box */}
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-black/40 backdrop-blur-sm border border-white/[0.2] rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Container */}
            <motion.div 
              className="lg:w-1/3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-[400px] w-[300px] overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Image
                  src="/aditya2.jpg"
                  alt="Aditya Kumar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Content Container - This is where you update the text */}
            <motion.div 
              className="lg:w-2/3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Passionate about technology and community building, I am currently focused on developing a vibrant community of Wikimedians. As a core team member of GDG and TFUG Prayagraj, I've contributed to multiple projects and organized impactful events like the inaugural "Keras Community Days" at SHUATS, focusing on Generative AI.
                </p>
                <p className="text-lg text-gray-300">
                  My technical journey spans web development and game development, having created projects using HTML, CSS, JavaScript, and Python. As a Java Developer with a Computer Science background from SHUATS, I combine my technical expertise with community leadership to drive innovation and create positive change in the tech ecosystem.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 