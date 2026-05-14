import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "connect", label: "Connect" },
  { id: "chatup", label: "ChatUp" },
];

interface CyberpunkNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const CyberpunkNav = ({ currentPage, onNavigate, isDark, toggleTheme }: CyberpunkNavProps) => {
  const currentIndex = NAV_ITEMS.findIndex((n) => n.id === currentPage);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-cyber text-lg md:text-xl text-primary neon-glow-pink cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => onNavigate("home")}
        >
          ATMAN
        </motion.div>

        {/* Road Path Nav */}
        <div className="hidden md:flex items-center gap-0 relative">
          {/* Road background */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center">
            <div className="w-full h-1 bg-muted relative">
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--neon-pink)), hsl(var(--neon-purple)))" }}
                animate={{ width: `${(currentIndex / (NAV_ITEMS.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              {/* Road dashes */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 road-line road-scroll opacity-30 h-[2px]" />
            </div>
          </div>

          {NAV_ITEMS.map((item, i) => {
            const isActive = currentPage === item.id;
            const isPassed = i <= currentIndex;
            return (
              <motion.button
                key={item.id}
                className={`relative z-10 px-4 py-2 font-cyber text-xs tracking-wider transition-all duration-300
                  ${isActive ? "text-primary neon-glow-pink" : isPassed ? "text-neon-purple" : "text-muted-foreground"}
                `}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.id)}
              >
                {/* Dot on road */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-all duration-300
                    ${isActive ? "bg-primary neon-box-pink scale-150" : isPassed ? "bg-neon-purple" : "bg-muted-foreground"}
                  `}
                />
                <span className="block mb-2">{item.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-2 overflow-x-auto max-w-[60vw]">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                className={`font-cyber text-[10px] tracking-wider px-2 py-1 whitespace-nowrap transition-all
                  ${isActive ? "text-primary neon-glow-pink" : "text-muted-foreground"}
                `}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Theme toggle */}
        <motion.button
          className="p-2 border border-border rounded-sm transition-all hover:border-primary hover:neon-box-pink"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-primary" />
          ) : (
            <Moon className="w-4 h-4 text-primary" />
          )}
        </motion.button>
      </div>
    </nav>
  );
};

export default CyberpunkNav;
