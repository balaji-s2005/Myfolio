import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const ConnectPage = () => {
  const [form, setForm] = useState({ from: "", subject: "", description: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send via mailto
    const mailto = `mailto:atman@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `From: ${form.from}\n\n${form.description}`
    )}`;
    window.open(mailto, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="font-cyber text-2xl md:text-4xl text-primary neon-glow-pink mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CONNECT
      </motion.h2>

      <motion.form
        className="cyber-card p-6 md:p-8 max-w-lg w-full space-y-5"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <label className="font-cyber text-xs tracking-wider text-primary block mb-2">FROM</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="w-full bg-input border border-border px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            value={form.from}
            onChange={(e) => setForm({ ...form, from: e.target.value })}
          />
        </div>
        <div>
          <label className="font-cyber text-xs tracking-wider text-muted-foreground block mb-2">TO</label>
          <input
            type="email"
            readOnly
            value="atman@gmail.com"
            className="w-full bg-muted border border-border px-4 py-2.5 text-sm font-mono text-muted-foreground cursor-not-allowed"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          />
        </div>
        <div>
          <label className="font-cyber text-xs tracking-wider text-primary block mb-2">SUBJECT</label>
          <input
            type="text"
            required
            placeholder="Subject..."
            className="w-full bg-input border border-border px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>
        <div>
          <label className="font-cyber text-xs tracking-wider text-primary block mb-2">MESSAGE</label>
          <textarea
            required
            rows={4}
            placeholder="Your message..."
            className="w-full bg-input border border-border px-4 py-2.5 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <motion.button
          type="submit"
          className="cyber-btn w-full flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {sent ? <><CheckCircle className="w-4 h-4" /> SENT!</> : <><Send className="w-4 h-4" /> TRANSMIT</>}
        </motion.button>
      </motion.form>

      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default ConnectPage;
