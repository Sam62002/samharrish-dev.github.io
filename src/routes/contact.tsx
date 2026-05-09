import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Check, Send } from "lucide-react";
import { PageShell, SectionTitle } from "@/components/PageShell";
import { SocialLinks } from "@/components/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Portfolio" }, { name: "description", content: "Get in touch." }] }),
  component: Contact,
});

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Tell me a bit more"),
});

type FormData = z.infer<typeof schema>;

function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_d: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <PageShell>
      <SectionTitle eyebrow="Let's talk" title="Contact" />
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto glass rounded-3xl p-8 space-y-5">
        {(["name", "email"] as const).map((f) => (
          <div key={f}>
            <label className="text-sm capitalize block mb-2">{f}</label>
            <input
              {...register(f)}
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              placeholder={f === "email" ? "you@example.com" : "Your name"}
            />
            {errors[f] && <p className="text-destructive text-xs mt-1">{errors[f]?.message}</p>}
          </div>
        ))}
        <div>
          <label className="text-sm block mb-2">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none resize-none"
            placeholder="What are we building?"
          />
          {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
        </div>
        <motion.button
          type="submit"
          disabled={isSubmitting || sent}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3 rounded-xl bg-gradient-hero font-semibold glow flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {sent ? (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Message sent!
            </motion.span>
          ) : (
            <>
              <Send className="w-4 h-4" /> {isSubmitting ? "Sending..." : "Send Message"}
            </>
          )}
        </motion.button>
      </form>
      <div className="mt-16">
        <SocialLinks />
      </div>
    </PageShell>
  );
}
