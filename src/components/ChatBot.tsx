import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";

const RESUME_DATA = {
  name: "Balaji S",
  education: "B.E in Computer Science at GCE Salem (2022-2026), CGPA 7.1. HSC 88%, SSLC 95%.",
  skills: "Java, Python, C, C++, HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, Git, GitHub, Android Studio, JWT, RESTful APIs. Soft skills: Team Management, Leadership, Time Management, Problem Solving.",
  projects: "1) Employee Management System (MERN stack) - full-stack app for employee data, attendance, leave, performance. JWT auth with RBAC. 2) Android Applications Suite (Java, Android Studio, Firebase) - Quiz App with real-time scoring, Quote of the Day app with API integration.",
  experience: "Full Stack Development Intern at Ideal Formatic Institute (June-July 2025) - MERN stack. Android Application Development Intern at Codsoft (Feb-March 2025) - Java, Android Studio, Firebase.",
  achievements: "Basketball Runner-up at Anna University Zonal Championship. NSS Volunteer. AI Fundamentals certificate from IBM.",
  links: "LinkedIn: linkedin.com/in/balaji-s, GitHub: github.com/balaji-s2005",
};

function getResponse(query: string): string {
  const q = query.toLowerCase();
  
  if (q.includes("name") || q.includes("who")) {
    return `I'm **${RESUME_DATA.name}**, a Computer Science Engineering student and Full Stack Developer.`;
  }
  if (q.includes("education") || q.includes("college") || q.includes("school") || q.includes("study")) {
    return RESUME_DATA.education;
  }
  if (q.includes("skill") || q.includes("tech") || q.includes("language") || q.includes("framework") || q.includes("know")) {
    return `**Technical Skills:** ${RESUME_DATA.skills}`;
  }
  if (q.includes("project") || q.includes("built") || q.includes("made") || q.includes("work")) {
    return `**Projects:** ${RESUME_DATA.projects}`;
  }
  if (q.includes("experience") || q.includes("intern") || q.includes("job") || q.includes("company")) {
    return `**Experience:** ${RESUME_DATA.experience}`;
  }
  if (q.includes("achieve") || q.includes("award") || q.includes("certificate") || q.includes("sport") || q.includes("basketball")) {
    return `**Achievements:** ${RESUME_DATA.achievements}`;
  }
  if (q.includes("contact") || q.includes("reach") || q.includes("linkedin") || q.includes("github") || q.includes("connect")) {
    return `**Links:** ${RESUME_DATA.links}`;
  }
  if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
    return `Hey there! 👋 I'm Balaji's portfolio bot. Ask me about his **skills**, **projects**, **experience**, **education**, or **achievements**!`;
  }
  
  return `I can answer questions about Balaji's **skills**, **projects**, **experience**, **education**, **achievements**, and **contact info**. Try asking something specific!`;
}

interface Message {
  role: "user" | "bot";
  content: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hey! 🚗💨 I'm Balaji's cyberpunk portfolio bot. Ask me anything about his skills, projects, or experience!" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    const botMsg: Message = { role: "bot", content: getResponse(input) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full max-h-[70vh]">
      <div ref={chatRef} className="flex-1 overflow-y-auto space-y-3 p-4 scrollbar-thin">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`w-8 h-8 rounded-sm flex items-center justify-center border ${
              msg.role === "bot" ? "border-primary bg-primary/10" : "border-secondary bg-secondary/10"
            }`}>
              {msg.role === "bot" ? <Bot className="w-4 h-4 text-primary" /> : <User className="w-4 h-4 text-secondary" />}
            </div>
            <div className={`max-w-[75%] p-3 text-sm font-body ${
              msg.role === "bot"
                ? "cyber-card text-foreground"
                : "bg-primary/20 border border-primary/40 text-foreground"
            }`}
            style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="p-4 border-t border-border flex gap-2">
        <input
          className="flex-1 bg-input border border-border px-4 py-2 text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors"
          style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
          placeholder="Ask about Balaji..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />
        <motion.button
          className="cyber-btn !px-4 !py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={send}
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatBot;
