"use client";

import React from "react";
import { motion } from "framer-motion";
export default function Sectiondivider2() {
  return (
    <motion.div
      className="bg-gray-200 mt-[0.15rem] mb-20 h-[8rem] w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
