"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 30,
    },
  },
};

export const FloatingNav = ({
  navItems,
}: {
  navItems: { name: string; link: string }[];
}) => {
  const [activeItem, setActiveItem] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-5 inset-x-0 max-w-[95%] sm:max-w-2xl mx-auto z-50"
    >
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <motion.div
          className="flex items-center justify-center px-10 py-4 bg-black bg-opacity-40 backdrop-blur-md rounded-full shadow-lg border border-white/10
                     shadow-black/5"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex gap-12">
            {navItems.map((item, i) => (
              <DesktopMenuItem
                key={item.name}
                item={item}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                index={i}
              />
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="md:hidden fixed right-5 top-5 z-50 p-4 rounded-full bg-black bg-opacity-40 backdrop-blur-md border border-white/10
                   shadow-lg shadow-black/5"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <IoClose className="w-6 h-6 text-white" />
          ) : (
            <IoMenu className="w-6 h-6 text-white" />
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed right-0 top-0 h-screen w-[280px] bg-black/60 backdrop-blur-lg border-l border-white/10 z-40"
          >
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="p-6 border-b border-white/10">
                <h2 className="text-lg font-medium text-white">Menu</h2>
              </div>

              {/* Menu Items */}
              <ul className="flex-1 py-8 px-4">
                {navItems.map((item, i) => (
                  <MobileMenuItem
                    key={item.name}
                    item={item}
                    toggleMenu={toggleMenu}
                    index={i}
                  />
                ))}
              </ul>

              {/* Menu Footer */}
              <div className="p-6 border-t border-white/10">
                <motion.div
                  className="text-sm text-white/60 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Press ESC to close
                </motion.div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const DesktopMenuItem = ({
  item,
  activeItem,
  setActiveItem,
  index,
}: {
  item: { name: string; link: string };
  activeItem: string;
  setActiveItem: (name: string) => void;
  index: number;
}) => (
  <Link href={item.link}>
    <motion.li
      variants={menuItemVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      className="relative"
      onHoverStart={() => setActiveItem(item.name)}
      onHoverEnd={() => setActiveItem("")}
    >
      <motion.span
        className={`text-base font-medium cursor-pointer ${
          activeItem === item.name
            ? "text-white"
            : "text-white/70 hover:text-white"
        } transition-colors`}
      >
        {item.name}
      </motion.span>
      {activeItem === item.name && (
        <motion.div
          layoutId="navHighlight"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.li>
  </Link>
);

const MobileMenuItem = ({
  item,
  toggleMenu,
  index,
}: {
  item: { name: string; link: string };
  toggleMenu: () => void;
  index: number;
}) => (
  <motion.div
    variants={menuItemVariants}
    initial="hidden"
    animate="visible"
    custom={index}
  >
    <Link href={item.link} onClick={toggleMenu}>
      <motion.li
        className="py-3 px-4 mb-2 text-white/80 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        {item.name}
      </motion.li>
    </Link>
  </motion.div>
);
