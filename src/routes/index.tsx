import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Scene3D } from "@/components/Scene3D";
import { SocialLinks } from "@/components/SocialLinks";
import { PageShell } from "@/components/PageShell";
import { ArrowRight, Sparkles, Trophy, Code2, Rocket } from "lucide-react";
import samPhoto from "@/assets/sam-harrish.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sam Harrish E — Software Engineer Portfolio" },
      { name: "description", content: "Sam Harrish E — Software Engineer skilled in Java, JavaScript, Python, MERN, and database design." },
    ],
  }),
  component: Home,
});

const stats = [
  { icon: Trophy, label: "Distinction", value: "1st" },
  { icon: Code2, label: "Projects", value: "3+" },
  { icon: Rocket, label: "B.E CSE", value: "2025" },
];

function Home() {
  return (
    <PageShell>
      <section className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Software Engineer · Open to opportunities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="text-gradient">Sam Harrish</span> — building reliable software.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Software Engineer based in Tiruvallur, India. I develop, test and ship applications using Java, JavaScript, Python and the MERN stack, with a focus on clean code, automation and well-designed databases.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-gradient-hero px-6 py-3 rounded-full font-semibold glow"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link to="/projects">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold"
              >
                View Work
              </motion.span>
            </Link>
          </motion.div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass rounded-2xl p-4 text-center"
              >
                <s.icon className="w-5 h-5 mx-auto text-accent mb-1" />
                <div className="text-2xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="h-[500px] lg:h-[600px] relative flex items-center justify-center"
        >
          <div className="absolute inset-0">
            <Scene3D />
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-hero glow"
          >
            <img
              src={samPhoto}
              alt="Sam Harrish E — Software Engineer"
              className="w-full h-full rounded-full object-cover object-top border-4 border-background"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-5xl mx-auto mt-32">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          About <span className="text-gradient">Me</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          B.E in Computer Science (Indira Institute of Engineering and Technology, 2022–2025) and a Diploma in Computer Engineering with First Class Distinction. I love turning ideas into working software.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Develop", desc: "Java, JavaScript, HTML, CSS — built, tested and documented." },
            { title: "Automate", desc: "Python scripts that take the boring work off your plate." },
            { title: "Data", desc: "Relational and NoSQL databases with MySQL and MongoDB." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-hero mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <SocialLinks />
        </div>
      </section>
    </PageShell>
  );
}
