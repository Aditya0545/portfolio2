"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";
import { useEffect, useState } from "react";
import { learningResources as fallbackData } from "@/data";

const MyLearning = () => {
  const [resources, setResources] = useState(fallbackData);

  useEffect(() => {
    console.log("Fetching resources...");
    fetch(
      "https://api.github.com/repos/Aditya0545/portfolio/contents/learning-resources.json"
    )
      .then((res) => {
        console.log("Response status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        const content = JSON.parse(atob(data.content));
        console.log("Parsed content:", content);
        setResources(content);
      })
      .catch((err) => {
        console.error("Error loading resources:", err);
        setResources(fallbackData);
      });
  }, []);

  return (
    <section id="my-learning" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            Learning Resources
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* YouTube Videos Section */}
          <Button
            borderRadius="1.75rem"
            className="col-span-1 lg:col-span-2"
            duration={10000}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 w-full">
              <h3 className="text-2xl font-bold mb-4">YouTube Videos</h3>
              <div className="space-y-4">
                {resources.youtubeVideos.map((video, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-4"
                  >
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple hover:text-white transition-colors"
                    >
                      {video.title}
                    </a>
                    <p className="text-sm text-gray-400 mt-2">{video.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </Button>

          {/* Command Reference Section */}
          <Button
            borderRadius="1.75rem"
            className="col-span-1"
            duration={12000}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 w-full">
              <h3 className="text-2xl font-bold mb-4">Command Reference</h3>
              <div className="space-y-4">
                {resources.commandReference.map((cmd, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-4"
                  >
                    <code className="text-purple block mb-2">
                      {cmd.command}
                    </code>
                    <p className="text-sm text-gray-400">{cmd.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Button>

          {/* Important Links Section */}
          <Button
            borderRadius="1.75rem"
            className="col-span-1 lg:col-span-3"
            duration={11000}
          >
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 w-full">
              <h3 className="text-2xl font-bold mb-4">Important Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.importantLinks.map((link, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-lg p-4"
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple hover:text-white transition-colors"
                    >
                      {link.title}
                    </a>
                    <p className="text-sm text-gray-400 mt-2">{link.notes}</p>
                  </div>
                ))}
              </div>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MyLearning;
