"use client";
import { motion } from "motion/react";
import { HandRaisedIcon } from "@heroicons/react/24/solid";
import React from "react";

export const IntroOverlay = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    isVisible && (
      <motion.div
        className="fixed inset-0 bg-background min-h-lvh w-full z-50 flex justify-center items-center"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
        onAnimationComplete={() => {
          setIsVisible(false);
        }}
      >
        <span className="text-2xl font-bold text-text-primary">Hello! </span>
        <motion.span
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0,
          }}
        >
          <HandRaisedIcon className="w-10 h-10 text-col-primary" />
        </motion.span>
      </motion.div>
    )
  );
};
