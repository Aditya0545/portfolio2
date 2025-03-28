"use client";

import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa6";
import { blogPosts } from "@/data";

const Blogs = () => {
  return (
    <section id="blogs" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            Blogs
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((blog, index) => (
            <motion.a
              key={blog.id}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${blog.gradient} opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700`}
              />

              <div className="relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden">
                <div className="flex items-start gap-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${blog.gradient} flex items-center justify-center`}
                  >
                    <FaBook className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{blog.description}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
