import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { ExternalLink, Github } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects — Sam Harrish" }, { name: "description", content: "Selected projects by Sam Harrish." }] }),
  component: Projects,
});

const projects = [
  {
    title: "AI Powered Hands-Free Assistant",
    tag: "Python · AI",
    hue: 280,
    desc: "Voice-driven assistant that executes everyday computer tasks hands-free using speech recognition and Python automation.",
  },
  {
    title: "Music Player",
    tag: "Django · Naan Mudhalvan",
    hue: 200,
    desc: "Full-stack music streaming web app built with Django, featuring playlists, search and a clean responsive UI.",
  },
  {
    title: "Book A Doctor",
    tag: "MERN Stack",
    hue: 320,
    desc: "Doctor appointment booking platform built on MongoDB, Express, React and Node with auth and scheduling.",
  },
];

function Projects() {
  return (
    <PageShell>
      <SectionTitle eyebrow="Selected Work" title="Projects" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group glass rounded-3xl p-6 overflow-hidden relative"
          >
            <div
              className="aspect-video rounded-2xl mb-5 relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, oklch(0.7 0.22 ${p.hue}), oklch(0.6 0.2 ${p.hue + 60}))` }}
            >
              <div className="shimmer absolute inset-0" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-5xl font-bold opacity-30"
                whileHover={{ scale: 1.2 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>
            </div>
            <div className="flex items-center justify-between mb-2 gap-2">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-secondary whitespace-nowrap">{p.tag}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
            <div className="flex gap-3 text-sm">
              <a href="#" className="inline-flex items-center gap-1 hover:text-accent"><ExternalLink className="w-4 h-4" /> Live</a>
              <a href="https://github.com/samharrish" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-accent"><Github className="w-4 h-4" /> Code</a>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link to="/contact" className="inline-block">
          <motion.span whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 bg-gradient-hero px-6 py-3 rounded-full font-semibold glow">
            Start a project
          </motion.span>
        </Link>
      </div>
    </PageShell>
  );
}
