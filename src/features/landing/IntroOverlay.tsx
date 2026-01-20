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
        transition={{ duration: 1, delay: 2 }}
        onAnimationComplete={() => {
          setIsVisible(false);
        }}
      >
        <motion.span
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -200, opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
          }}
          className="text-2xl font-bold text-text-primary mr-2"
        >
          Hello!{" "}
        </motion.span>
        <motion.span
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            type: "spring",
          }}
        >
          <motion.div
            animate={{ rotate: [0, 20, -20, 0] }}
            className="ml-2"
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0,
              delay: 1,
            }}
          >
            <HandRaisedIcon className="w-10 h-10 text-col-primary" />
          </motion.div>
        </motion.span>
      </motion.div>
    )
  );
};
