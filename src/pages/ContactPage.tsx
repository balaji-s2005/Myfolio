import { motion } from "framer-motion";
import { Linkedin, Github, GraduationCap, Trophy, Award } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.h2
        className="font-cyber text-2xl md:text-4xl text-primary neon-glow-pink mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CONTACT_INFO
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Education */}
        <motion.div
          className="cyber-card p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="font-cyber text-sm text-primary">&gt; Education</h3>
          </div>
          <div className="space-y-3 font-body text-sm text-muted-foreground">
            <div>
              <p className="text-foreground font-semibold">GCE Salem</p>
              <p>B.E CSE | 2022-2026 | CGPA 7.1</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">Hans Roever HSS</p>
              <p>HSC 88% | 2022</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">St. Andrew's MHSS</p>
              <p>SSLC 95% | 2020</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          className="cyber-card p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-5 h-5 text-secondary" />
            <h3 className="font-cyber text-sm text-secondary">&gt; Experience</h3>
          </div>
          <div className="space-y-3 font-body text-sm text-muted-foreground">
            <div>
              <p className="text-foreground font-semibold">Full Stack Dev Intern</p>
              <p>Ideal Formatic Institute | Jun-Jul 2025</p>
            </div>
            <div>
              <p className="text-foreground font-semibold">Android Dev Intern</p>
              <p>Codsoft | Feb-Mar 2025</p>
            </div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="cyber-card p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-primary" />
            <h3 className="font-cyber text-sm text-primary">&gt; Achievements</h3>
          </div>
          <ul className="space-y-2 font-body text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary">▸</span> Basketball Runner-up, Anna University Zonal</li>
            <li className="flex gap-2"><span className="text-primary">▸</span> NSS Volunteer - community service</li>
            <li className="flex gap-2"><span className="text-primary">▸</span> AI Fundamentals Certificate - IBM</li>
          </ul>
        </motion.div>

        {/* Links */}
        <motion.div
          className="cyber-card p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-cyber text-sm text-secondary mb-4">&gt; Connect</h3>
          <div className="space-y-3">
            <a
              href="https://linkedin.com/in/balaji-s"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" /> linkedin.com/in/balaji-s
            </a>
            <a
              href="https://github.com/balaji-s2005"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-secondary transition-colors"
            >
              <Github className="w-5 h-5" /> github.com/balaji-s2005
            </a>
          </div>
        </motion.div>
      </div>

      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default ContactPage;
