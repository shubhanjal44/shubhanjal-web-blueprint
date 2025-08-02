import { motion } from "framer-motion";

type MotionProgressProps = {
  value: number; // percent, e.g. 85 for 85%
};

export default function MotionProgress({ value }: MotionProgressProps) {
  return (
    <div className="h-2 bg-white/20 rounded relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-full bg-primary rounded"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}
