// import { motion } from "framer-motion";

// type MotionProgressProps = {
//   value: number; // percent, e.g. 85 for 85%
// };

// export default function MotionProgress({ value }: MotionProgressProps) {
//   return (
//     <div className="h-2 bg-white/20 rounded relative overflow-hidden">
//       <motion.div
//         initial={{ width: 0 }}
//         animate={{ width: `${value}%` }}
//         transition={{ duration: 1, ease: "easeInOut" }}
//         className="h-full bg-primary rounded"
//         style={{ position: "absolute", top: 0, left: 0 }}
//       />
//     </div>
//   );
// }
import { motion } from "framer-motion";

type MotionProgressProps = {
  value: number;
  active: boolean;   // If true, animate bar; if false, keep width 0
  delay?: number;
};

export default function MotionProgress({ value, active, delay = 0 }: MotionProgressProps) {
  return (
    <div className="h-2 bg-white/20 rounded relative overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: active ? `${value}%` : 0 }}
        transition={{ duration: 1, delay, ease: "easeInOut" }}
        className="h-full bg-primary rounded"
        style={{ position: "absolute", top: 0, left: 0 }}
      />
    </div>
  );
}

