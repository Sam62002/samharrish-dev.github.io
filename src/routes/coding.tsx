import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Code2, Github, Trophy, Terminal, Zap } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";

export const Route = createFileRoute("/coding")({
  head: () => ({ meta: [{ title: "Coding Profiles — Portfolio" }, { name: "description", content: "Find me on coding platforms." }] }),
  component: Coding,
});

const profiles = [
  { name: "GitHub", handle: "@Sam62002", url: "https://github.com/Sam62002", stat: "Open source & projects", icon: Github, color: "305" },
  { name: "LeetCode", handle: "@samharrish", url: "https://leetcode.com/samharrish", stat: "Problem solving", icon: Code2, color: "200" },
  { name: "SkillRack", handle: "@samharrish", url: "https://skillrack.com", stat: "Daily practice", icon: Trophy, color: "280" },
  { name: "HackerRank", handle: "@samharrish", url: "https://hackerrank.com/samharrish", stat: "Java · Python", icon: Terminal, color: "180" },
  { name: "LinkedIn", handle: "sam-harrish", url: "https://linkedin.com/in/sam-harrish-016b69179", stat: "Connect with me", icon: Zap, color: "220" },
  { name: "CodeChef", handle: "@samharrish", url: "https://codechef.com", stat: "Competitive coding", icon: Code2, color: "240" },
];

function Coding() {
  return (
    <PageShell>
      <SectionTitle eyebrow="Where I Code" title="Coding Profiles" />
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 220, damping: 18 }}
            whileHover={{ y: -8, scale: 1.04 }}
            className="glass rounded-3xl p-6 relative overflow-hidden group"
          >
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity"
              style={{ background: `oklch(0.7 0.22 ${p.color})` }}
            />
            <div className="w-12 h-12 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4">
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-sm text-muted-foreground">{p.handle}</p>
            <div className="mt-4 inline-block text-xs px-3 py-1 rounded-full bg-secondary">{p.stat}</div>
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
