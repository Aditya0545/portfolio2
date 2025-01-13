"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export const FloatingNav = ({ navItems }: { navItems: { name: string; link: string }[] }) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 inset-x-0 max-w-[95%] sm:max-w-sm md:max-w-2xl mx-auto z-50"
    >
      {/* Mobile Menu Button - Only visible on small screens */}
      <button 
        onClick={toggleMenu}
        className="md:hidden absolute right-2 top-2 z-50 p-2 rounded-full bg-black/50 border border-white/[0.2] backdrop-blur-md"
      >
        {isOpen ? (
          <IoClose className="w-6 h-6 text-white" />
        ) : (
          <IoMenu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center px-4 py-2 bg-black/50 border border-white/[0.2] rounded-full shadow-lg backdrop-blur-md">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <DesktopMenuItem 
              key={item.name}
              item={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute right-0 top-14 w-48 py-2 bg-black/95 border border-white/[0.2] rounded-2xl shadow-lg backdrop-blur-md"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <MobileMenuItem 
                  key={item.name}
                  item={item}
                  toggleMenu={toggleMenu}
                />
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DesktopMenuItem = ({ 
  item, 
  activeItem, 
  setActiveItem 
}: { 
  item: { name: string; link: string }; 
  activeItem: string;
  setActiveItem: (name: string) => void;
}) => (
  <Link href={item.link}>
    <motion.li
      className={`px-4 py-2 rounded-full text-base relative cursor-pointer ${
        activeItem === item.name 
          ? "text-white" 
          : "text-gray-400 hover:text-white"
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
);

const MobileMenuItem = ({ 
  item, 
  toggleMenu 
}: { 
  item: { name: string; link: string }; 
  toggleMenu: () => void;
}) => (
  <Link href={item.link} onClick={toggleMenu}>
    <motion.li
      className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
      whileTap={{ scale: 0.95 }}
    >
      {item.name}
    </motion.li>
  </Link>
);
