import React from "react";
import { motion } from "motion/react";

interface SleepCardContainerProps {
  children: React.ReactNode;
  staggerNumber?: number;
  className?: string;
}

export function SleepCardContainer({
  children,
  staggerNumber = 0.3,
  className = "",
}: SleepCardContainerProps) {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // This delays the start of child animations by 0.3s relative to each other
        staggerChildren: staggerNumber, // Staggers the animation of child elements by the specified number of seconds
      },
    },
  };

  return (
    <motion.div
      className={`p-5 space-y-5 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
