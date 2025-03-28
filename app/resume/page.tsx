"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="min-h-screen w-full bg-[#070B14]">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-small-white/[0.02]" />
      <div className="fixed inset-0 bg-gradient-to-br from-[#16072a] via-[#080316] to-[#070f33]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-4 sm:py-8 min-h-screen flex flex-col">
        {/* Navigation */}
        <div className="mb-4 sm:mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors w-fit"
          >
            <FaArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* PDF Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-xl"
        >
          <style jsx global>{`
            /* Hide toolbar and other controls */
            #resume-frame {
              width: 1px;
              min-width: 100%;
              border: none;
              height: 100%;
            }
            #resume-frame::-webkit-scrollbar {
              display: none;
            }
            @media (max-width: 640px) {
              #resume-frame {
                width: 1px;
                min-width: 100%;
                height: 100%;
              }
            }
          `}</style>
          <div className="w-full h-full overflow-auto">
            <iframe
              id="resume-frame"
              src="/resume.pdf#page=1&view=FitH,top&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&download=0"
              className="w-full h-full"
              title="Resume PDF"
              style={{
                minHeight: "100vh",
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;
