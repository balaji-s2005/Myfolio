import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    skills: ["Java", "Python", "C", "C++"],
    color: "primary",
  },
  {
    title: "Web Dev",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js"],
    color: "secondary",
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
    color: "primary",
  },
  {
    title: "Tools & Tech",
    skills: ["Git", "GitHub", "Android Studio", "JWT", "RESTful APIs"],
    color: "secondary",
  },
  {
    title: "Soft Skills",
    skills: ["Team Management", "Leadership", "Time Management", "Problem Solving"],
    color: "primary",
  },
];

const SkillsPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="font-cyber text-2xl md:text-4xl text-primary neon-glow-pink mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        SKILL_MATRIX
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full">
        {SKILL_CATEGORIES.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="cyber-card p-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ci * 0.1 + 0.2 }}
          >
            <h3 className={`font-cyber text-sm tracking-wider mb-4 ${cat.color === "primary" ? "text-primary" : "text-secondary"}`}>
              &gt; {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  className={`font-mono text-xs px-3 py-1.5 border transition-all duration-300 cursor-default
                    ${cat.color === "primary"
                      ? "border-primary/30 text-primary hover:bg-primary/20 hover:neon-box-pink"
                      : "border-secondary/30 text-secondary hover:bg-secondary/20 hover:neon-box-purple"
                    }
                  `}
                  style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: ci * 0.1 + si * 0.05 + 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default SkillsPage;
