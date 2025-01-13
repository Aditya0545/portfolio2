"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

const timelineData = [
  {
    date: "2023 - Present",
    title: "Wiki Contributor",
    company: "Wikimedia Foundation",
    description: "Contributing to MediaWiki and other wiki sister projects, focusing on documentation and technical improvements.",
    link: "https://www.mediawiki.org/wiki/User:Adityakumar0545"
  },
  {
    date: "2023 - Present",
    title: "Core Team Member",
    company: "Google Developer Group Prayagraj",
    description: "Organizing tech events, managing community engagement, and contributing to local tech ecosystem development.",
    link: "https://devfest.gdgprayagraj.com/team"
  },
  {
    date: "2022 - Present",
    title: "Co-organizer",
    company: "CNCF",
    description: "Leading cloud-native technology initiatives and organizing community events.",
    link: "https://www.cncf.io/"
  },
  {
    date: "2021 - Present",
    title: "Founding Member",
    company: "DCS&IT CLUB SHUATS",
    description: "Established and leading the computer science club, organizing workshops and technical events.",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf2o8O9xlWQKvworSvhJu7HtflDASIsyPSCW0OoD5viy9U5-A/viewform"
  }
];

const Timeline = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            Timeline
          </span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -translate-x-1/2 mt-1.5" />

              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <Link href={item.link} target="_blank" className="block">
                  <Button
                    borderRadius="1.5rem"
                    className="w-full"
                    duration={Math.floor(Math.random() * 10000) + 10000}
                  >
                    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 w-full">
                      <span className="text-sm text-purple-400">
                        {item.date}
                      </span>

                      <h3 className="text-xl font-bold mt-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 font-medium">
                        {item.company}
                      </p>

                      <p className="text-gray-300 mt-2">
                        {item.description}
                      </p>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline; 