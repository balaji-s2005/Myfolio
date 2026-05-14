import { motion } from "framer-motion";
import atmanPhoto from "@/assets/atman.png";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-20 relative">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-5xl w-full">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.p
            className="font-mono text-xs tracking-[0.4em] text-neon-purple mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            &gt; INITIALIZING PORTFOLIO...
          </motion.p>
          <h1 className="font-cyber text-3xl sm:text-4xl md:text-6xl text-primary neon-glow-pink leading-tight">
            BALAJI S
          </h1>
          <motion.div
            className="mt-4 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="font-body text-lg md:text-xl text-foreground">
              Full Stack Developer & Android Dev
            </p>
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              B.E CSE @ GCE Salem | MERN Stack | Java | Python
            </p>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {["Skills", "Projects", "Contact", "Connect", "ChatUp"].map((item) => (
              <span
                key={item}
                className="font-cyber text-[10px] tracking-wider px-3 py-1 border border-border text-muted-foreground"
                style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://linkedin.com/in/balaji-s" target="_blank" rel="noreferrer" className="cyber-btn text-xs">
              LinkedIn
            </a>
            <a href="https://github.com/balaji-s2005" target="_blank" rel="noreferrer" className="cyber-btn text-xs !border-neon-purple !text-neon-purple !bg-neon-purple/10 hover:!bg-neon-purple/30">
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Character */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative">
            <motion.img
              src={atmanPhoto}
              alt="Balaji S - Cyberpunk Avatar"
              className="w-64 sm:w-80 md:w-[420px] rounded-sm border-2 border-primary/30"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -inset-2 border border-primary/20 -z-10"
              style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
            />
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default HomePage;
