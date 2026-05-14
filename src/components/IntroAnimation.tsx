import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "hsl(var(--cyber-darker))" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Neon grid background */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--neon-pink) / 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--neon-pink) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating neon orbs */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 40 + Math.random() * 80,
                height: 40 + Math.random() * 80,
                background: i % 2 === 0
                  ? `hsl(var(--neon-pink) / 0.15)`
                  : `hsl(var(--neon-purple) / 0.15)`,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                filter: "blur(20px)",
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1], scale: [0, 1.5, 1, 1.2] }}
              transition={{ duration: 2, delay: Math.random() * 1, ease: "easeOut" }}
            />
          ))}


          {/* Glitch lines */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-[1px] left-0 right-0"
              style={{
                background: `hsl(var(--neon-cyan) / 0.4)`,
                top: `${15 + i * 18}%`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
            />
          ))}

          {/* Title */}
          <motion.div
            className="relative text-center z-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="font-mono text-xs tracking-[0.5em] mb-4"
              style={{ color: "hsl(var(--neon-cyan))" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              &gt; SYSTEM BOOT...
            </motion.p>
            <h1 className="font-cyber text-5xl md:text-7xl neon-glow-pink text-primary tracking-wider">
              BALAJI S
            </h1>
            <motion.p
              className="font-mono text-sm md:text-base mt-3 tracking-[0.3em]"
              style={{ color: "hsl(var(--neon-purple))" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              FULL STACK DEVELOPER
            </motion.p>
            <motion.div
              className="mt-4 flex gap-2 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              {["MERN", "ANDROID", "JAVA", "PYTHON"].map((tech) => (
                <span key={tech} className="font-mono text-[10px] px-2 py-1 border"
                  style={{
                    borderColor: "hsl(var(--neon-pink) / 0.5)",
                    color: "hsl(var(--neon-pink))",
                    background: "hsl(var(--neon-pink) / 0.08)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Scanlines */}
          <div className="scanline absolute inset-0" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;

