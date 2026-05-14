import { motion, AnimatePresence } from "framer-motion";
import cyberpunkCar from "@/assets/cyberpunk-car.png";

interface CarTransitionProps {
  isAnimating: boolean;
  direction: "left" | "right";
}

const CarTransition = ({ isAnimating, direction }: CarTransitionProps) => {
  const xStart = direction === "right" ? "-120vw" : "120vw";
  const xEnd = direction === "right" ? "120vw" : "-120vw";
  const rotateStart = direction === "right" ? -15 : 15;
  const rotateEnd = direction === "right" ? 10 : -10;

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-[90] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
        >
          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "hsl(var(--cyber-darker) / 0.8)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: 1.2, times: [0, 0.2, 0.8, 1] }}
          />

          {/* Road flash */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-24"
            style={{ background: "hsl(var(--road-dark))" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.2, times: [0, 0.15, 0.85, 1] }}
          >
            <div className="road-line road-scroll absolute top-1/2 left-0 right-0 -translate-y-1/2" />
          </motion.div>

          {/* Car zooming across */}
          <motion.img
            src={cyberpunkCar}
            alt=""
            className="absolute w-[50vw] max-w-[500px] bottom-[60px]"
            initial={{ x: xStart, rotate: rotateStart }}
            animate={{
              x: [xStart, "0vw", xEnd],
              rotate: [rotateStart, 0, rotateEnd],
            }}
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
              times: [0, 0.4, 1],
            }}
          />

          {/* Sparks trail */}
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                background: `hsl(var(--road-line))`,
                bottom: "90px",
              }}
              initial={{ opacity: 0, x: "50vw" }}
              animate={{
                opacity: [0, 1, 0],
                x: `${50 + (Math.random() - 0.5) * 30}vw`,
                y: [0, -15 - Math.random() * 30],
              }}
              transition={{
                duration: 0.5,
                delay: 0.3 + Math.random() * 0.4,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CarTransition;
