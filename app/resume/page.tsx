"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#070B14] relative">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-small-white/[0.02] z-0" />
      <div className="fixed inset-0 bg-gradient-to-br from-[#16072a] via-[#080316] to-[#070f33] z-0" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-2 sm:px-4 py-2 sm:py-8 min-h-screen flex flex-col">
        {/* Navigation */}
        <div className="mb-2 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-white/90 transition-colors text-sm sm:text-base bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10"
          >
            <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Resume Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="w-full h-[calc(100vh-120px)]">
            <object
              data="/resume.pdf"
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="w-full h-full flex items-center justify-center text-white">
                <p>
                  Unable to display PDF.{" "}
                  <a
                    href="/resume.pdf"
                    className="text-blue-400 hover:text-blue-300 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to download
                  </a>
                </p>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
