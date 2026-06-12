"use client";

import { motion } from "framer-motion";

interface btnProps{
    text: string,
}

function Button({text}: btnProps) {
  return (
    <motion.div
      className="relative px-5 py-2 bg-[#C59949] uppercase rounded-md w-fit overflow-hidden"
      whileHover="hover"
      initial="rest"
    >
      <motion.div
        className="absolute inset-0 bg-white"
        variants={{
          rest: { y: "100%", opacity: 0 },
          hover: { y: 0, opacity: 1 },
        }}
        transition={{
          duration: 0.5,
          ease: [0.76, 0, 0.24, 1],
        }}
      />

      {/* Button text */}
      <button className="relative z-10 text-lg tracking-wider cursor-pointer">
        {text}
      </button>
    </motion.div>
  );
}

export default Button;
