"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { projects } from "@/data";

// Array of different gradient combinations for cards
const cardGradients = [
  "from-purple-600 to-blue-600", // First card
  "from-rose-600 to-orange-600", // Second card
  "from-emerald-600 to-cyan-600", // Third card
  "from-indigo-600 to-fuchsia-600", // Fourth card
];

const ProjectCard = ({
  item,
  index,
  gradient,
}: {
  item: any;
  index: number;
  gradient: string;
}) => {
  // Mouse movement animation setup
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for rotation - increased rotation angle for more visible effect
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [20, -20]), {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), {
    stiffness: 150,
    damping: 20,
    mass: 0.5,
  });

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Convert mouse position to normalized values (-0.5 to 0.5)
    const normalizedX = (mouseX - width / 2) / width;
    const normalizedY = (mouseY - height / 2) / height;

    // Increased sensitivity for more pronounced effect
    x.set(normalizedX * 1.2);
    y.set(normalizedY * 1.2);
  }

  function handleMouseLeave() {
    // Smoother return to original position
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      key={item.id}
      className="group relative w-full max-w-[600px] min-h-[500px] perspective-[1500px]" // Increased perspective for subtler effect
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 50,
          damping: 20,
          delay: index * 0.15,
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Gradient Glow */}
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${gradient} opacity-20 group-hover:opacity-30 blur-xl transition-all duration-700 -z-10`}
      />

      {/* Main Card Container */}
      <motion.div
        className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col will-change-transform"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease",
        }}
      >
        {/* Image Section */}
        <div className="h-[280px] sm:h-[320px] relative overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40"
            style={{
              backgroundImage: 'url("/bg.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.3,
            }}
          />

          {/* Project Image */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center p-6 sm:p-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              transform: "translateZ(20px)",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="max-h-full w-auto object-contain drop-shadow-2xl"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} mix-blend-overlay opacity-40`}
          />

          {/* Project Title Badge */}
          <motion.div
            className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10"
            style={{
              transform: "translateZ(30px)",
            }}
          >
            <h3 className="font-bold text-sm sm:text-base text-white">
              {item.title}
            </h3>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col">
          {/* Description */}
          <motion.p
            className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              transform: "translateZ(10px)",
            }}
          >
            {item.des}
          </motion.p>

          {/* Tech Stack & Action */}
          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Tech Icons */}
            <motion.div
              className="flex flex-wrap gap-1.5 sm:gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                transform: "translateZ(20px)",
              }}
            >
              {item.iconLists.map((icon: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.5 + idx * 0.1,
                      type: "spring",
                      stiffness: 200,
                    },
                  }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                >
                  <img
                    src={icon}
                    alt={`Tech ${idx + 1}`}
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Live Demo Button */}
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group/btn relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-white text-sm sm:text-base font-medium 
                        overflow-hidden transition-all duration-300 w-full sm:w-auto
                        bg-gradient-to-r ${gradient}
                        hover:shadow-lg hover:shadow-white/10`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{
                transform: "translateZ(30px)",
              }}
            >
              <div className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                <span>Live Demo</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <FaLocationArrow className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const RecentProjects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          A small selection of{" "}
          <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
            recent projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 max-w-7xl mx-auto place-items-center">
          {projects.map((item, index) => (
            <ProjectCard
              key={item.id}
              item={item}
              index={index}
              gradient={cardGradients[index % cardGradients.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
