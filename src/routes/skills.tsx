import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { PageShell, SectionTitle } from "@/components/PageShell";

export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [{ title: "Skills — Portfolio" }, { name: "description", content: "Technical skills and proficiency." }] }),
  component: Skills,
});

const skills = [
  { name: "Java", level: 88 },
  { name: "JavaScript / HTML / CSS", level: 90 },
  { name: "Python (Automation & Scripting)", level: 85 },
  { name: "MySQL", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "Git & Version Control", level: 88 },
  { name: "API Design", level: 80 },
  { name: "Code Review & Documentation", level: 85 },
];

const counters = [
  { label: "Projects", end: 3 },
  { label: "Languages", end: 4 },
  { label: "Databases", end: 2 },
  { label: "Year Started", end: 2025 },
];

function Counter({ end, label }: { end: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);
  return (
    <div ref={ref} className="glass rounded-2xl p-6 text-center">
      <div className="text-4xl font-bold text-gradient">{val}+</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Skills() {
  return (
    <PageShell>
      <SectionTitle eyebrow="Toolbelt" title="My Skills" />
      <div className="max-w-3xl mx-auto space-y-6">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground text-sm">{s.level}%</span>
            </div>
            <div className="h-3 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${s.level}%` }}
                transition={{ delay: i * 0.1 + 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-hero relative"
              >
                <div className="shimmer absolute inset-0" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {counters.map((c) => <Counter key={c.label} {...c} />)}
      </div>
    </PageShell>
  );
}
