import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";

export const Route = createFileRoute("/articles")({
  head: () => ({ meta: [{ title: "Articles — Portfolio" }, { name: "description", content: "Featured articles and writing." }] }),
  component: Articles,
});

const articles = [
  { title: "Building cinematic UIs with Framer Motion", date: "May 2026", read: "8 min", hue: 305 },
  { title: "Three.js for product showcases", date: "Apr 2026", read: "12 min", hue: 200 },
  { title: "Designing a dark, moody portfolio", date: "Mar 2026", read: "6 min", hue: 280 },
  { title: "Performance budgets in React 19", date: "Feb 2026", read: "10 min", hue: 180 },
];

function Articles() {
  return (
    <PageShell>
      <SectionTitle eyebrow="Writing" title="Featured Articles" />
      <div className="max-w-4xl mx-auto space-y-5">
        {articles.map((a, i) => (
          <motion.a
            key={a.title}
            href="#"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ x: 8 }}
            className="group flex gap-5 glass rounded-2xl p-5 items-center"
          >
            <div className="w-24 h-24 rounded-xl shrink-0" style={{ background: `linear-gradient(135deg, oklch(0.7 0.22 ${a.hue}), oklch(0.6 0.2 ${a.hue + 50}))` }} />
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-semibold group-hover:text-gradient transition-colors">{a.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                <span className="inline-flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                <span>· {a.read}</span>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </PageShell>
  );
}
