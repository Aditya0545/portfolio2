"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const FloatingNav = ({ navItems }: { navItems: { name: string; link: string }[] }) => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 inset-x-0 max-w-2xl mx-auto z-50"
    >
      <nav className="relative flex items-center justify-center px-4 py-2 bg-black/50 border border-white/[0.2] rounded-full shadow-lg backdrop-blur-md">
        <ul className="flex gap-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <motion.li
                className={`px-4 py-2 rounded-full text-sm lg:text-base relative cursor-pointer ${
                  activeItem === item.name ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                onHoverStart={() => setActiveItem(item.name)}
                onHoverEnd={() => setActiveItem("")}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {activeItem === item.name && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ duration: 0.2 }}
                  />
                )}
                {item.name}
              </motion.li>
            </Link>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
