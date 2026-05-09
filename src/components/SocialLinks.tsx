import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Sam62002", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sam-harrish-016b69179", label: "LinkedIn" },
  { icon: Mail, href: "mailto:samharrish2002@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+919655532183", label: "Phone" },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {socials.map(({ icon: Icon, href, label }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          whileHover={{ scale: 1.15, rotate: 8, y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:glow transition-shadow"
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
}
