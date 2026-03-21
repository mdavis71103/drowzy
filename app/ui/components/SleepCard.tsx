import React from "react";
import { motion, Variants } from "motion/react";

interface SleepCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SleepCard({ children, className = "" }: SleepCardProps) {
  // Animation variants for each card
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -100, // Starts 100 pixels to the left
    },
    visible: {
      opacity: 1,
      x: 0, // Slides into its original position
      transition: {
        type: "spring", // Makes the slide feel more natural/snappy
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className={`bg-[#374151] rounded-2xl p-5 shadow-[0_6px_20px_rgba(0,0,0,0.2)] ${className}`}
      style={{ transition: "all 0.2s ease-out" }}
    >
      {children}
    </motion.div>
  );
}
