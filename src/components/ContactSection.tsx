import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-card">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.h2
          className="font-display text-4xl md:text-5xl text-primary tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          CONTACT US
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a href="tel:+918799461114" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5 text-secondary" />
            <span className="text-left">
              <span className="block text-xs text-muted-foreground/70">Registration Support</span>
              +91 87994 61114
            </span>
          </a>
          <a href="tel:+919924924454" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-5 h-5 text-secondary" />
            <span className="text-left">
              <span className="block text-xs text-muted-foreground/70">Sponsorship Queries</span>
              +91 99249 24454
            </span>
          </a>
          <a href="mailto:gromminggurus@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-5 h-5 text-secondary" />
            <span className="text-left">
              <span className="block text-muted-foreground/70 text-xs">Email</span>
              gromminggurus@gmail.com
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
