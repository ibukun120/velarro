import { motion } from "framer-motion";

interface ScrollIndicatorProps {
  indicator: number;
}

export default function ScrollIndicator({ indicator }: ScrollIndicatorProps) {
  return (
    <div className="relative w-full h-1 bg-black/20 mt-1 rounded overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 h-full bg-[#C59949]"
        animate={{ x: `${indicator}%` }}
        transition={{ duration: 0.2, ease: "linear" }}
        style={{ width: "20%" }}
      />
    </div>
  );
}
