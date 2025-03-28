"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    // Create email content
    const subject = `Message from ${name} via Portfolio`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Create mailto URL
    const mailtoUrl = `mailto:adityakumar2019.ak@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <footer
      id="contact"
      className="w-full pt-20 pb-10 px-4 md:px-0 scroll-mt-28 relative"
    >
      {/* Background with gradient and blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/20 backdrop-blur-xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's{" "}
            <span className="bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-transparent bg-clip-text">
              Connect
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a
            friendly chat. I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all outline-none text-white placeholder-gray-400 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/25"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Location */}
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl shadow-lg shadow-purple-500/10">
                <IoLocationSharp className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Location
                </h3>
                <p className="text-gray-300">Prayagraj, Uttar Pradesh, India</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="bg-white/10 p-3 rounded-xl shadow-lg shadow-purple-500/10">
                <HiMail className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <a
                  href="mailto:adityakumar2019.ak@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  adityakumar2019.ak@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Aditya0545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg shadow-purple-500/10 group"
                >
                  <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://x.com/aditya0545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg shadow-purple-500/10 group"
                >
                  <FaTwitter className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/aditya0545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg shadow-purple-500/10 group"
                >
                  <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-20 pt-10 border-t border-white/10">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Aditya Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
