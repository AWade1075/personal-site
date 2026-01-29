import { motion } from "motion/react";

interface AnimatedFontProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedFont = ({
  text,
  className,
  delay = 0,
}: AnimatedFontProps) => {
  return (
    <motion.div className={`font-script ${className}`}>
      {text.split("").map((char, index) => {
        return (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + index * 0.1 }}
            key={index}
          >
            {char}
          </motion.span>
        );
      })}
    </motion.div>
  );
};
