import React from "react";
import { motion } from "framer-motion";

const TestFramerMotion = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-blue-500 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default TestFramerMotion;
