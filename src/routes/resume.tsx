import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";

export const Route = createFileRoute("/resume")({
  head: () => ({ meta: [{ title: "Resume — Portfolio" }, { name: "description", content: "Download my resume." }] }),
  component: Resume,
});

function Resume() {
  return (
    <PageShell>
      <SectionTitle eyebrow="Curriculum Vitae" title="Resume" />
      <div className="max-w-2xl mx-auto">
        <motion.a
          href="/Sam_Harrish_Resume.pdf"
          download="Sam_Harrish_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03, rotate: -1 }}
          whileTap={{ scale: 0.97 }}
          className="block glass rounded-3xl p-10 text-center group glow relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-20 transition-opacity" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="w-20 h-20 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center mb-6 glow"
          >
            <FileText className="w-10 h-10" />
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Sam_Harrish_Resume.pdf</h2>
          <p className="text-muted-foreground mb-6">B.E CSE · Software Engineer · Java, JavaScript, Python, MySQL, MongoDB.</p>
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hero font-semibold">
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Download PDF
          </span>
        </motion.a>
      </div>
    </PageShell>
  );
}
