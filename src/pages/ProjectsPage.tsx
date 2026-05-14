import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Employee Management System",
    type: "Academic Project",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    points: [
      "Full-stack MERN app for employee onboarding, attendance, leave & performance",
      "RESTful APIs with JWT auth & role-based access control",
      "Responsive frontend with real-time updates",
      "Secure data handling & form validation",
    ],
  },
  {
    title: "Android Applications Suite",
    type: "Internship Project",
    tech: ["Java", "Android Studio", "Firebase"],
    points: [
      "Quiz App with timed, category-based MCQs & real-time scoring",
      "Firebase integration for auth, data & leaderboard",
      "Quote of the Day App with API integration & notifications",
      "Clean UI with efficient performance & engagement features",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="font-cyber text-2xl md:text-4xl text-primary neon-glow-pink mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        PROJECT_LOG
      </motion.h2>

      <div className="space-y-6 max-w-4xl w-full">
        {PROJECTS.map((project, pi) => (
          <motion.div
            key={project.title}
            className="cyber-card p-6"
            initial={{ opacity: 0, x: pi % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: pi * 0.2 + 0.2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
              <h3 className="font-cyber text-base md:text-lg text-primary">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-neon-purple border border-secondary/30 px-2 py-1 w-fit">
                {project.type}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-wider px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-2">
              {project.points.map((point, i) => (
                <motion.li
                  key={i}
                  className="font-body text-sm text-muted-foreground flex gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: pi * 0.2 + i * 0.1 + 0.4 }}
                >
                  <span className="text-primary mt-0.5">▸</span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default ProjectsPage;
