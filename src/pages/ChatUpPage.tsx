import { motion } from "framer-motion";
import ChatBot from "@/components/ChatBot";

const ChatUpPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="font-cyber text-2xl md:text-4xl text-primary neon-glow-pink mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CHAT_UP
      </motion.h2>
      <motion.p
        className="font-mono text-xs text-muted-foreground mb-6 tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        &gt; Ask me anything about Balaji's profile
      </motion.p>

      <motion.div
        className="cyber-card max-w-2xl w-full overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <ChatBot />
      </motion.div>

      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default ChatUpPage;
