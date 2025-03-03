"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-zinc-800/60 rounded-full px-4 py-2 mb-6"
          >
            <span className="mr-2">🎉</span>
            <span className="text-gray-300">Introducing Event Management</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
            Build Amazing Events{" "}
            <span className="block mt-2">Without Hassle</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Create, deploy, and scale your events without any complications.
            Simple and efficient event management.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black font-semibold px-8 py-4 rounded-lg text-lg"
            >
              Start Building
            </motion.a>
            <motion.a
              href="#demo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-800/60 text-white font-semibold px-8 py-4 rounded-lg text-lg"
            >
              View Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
