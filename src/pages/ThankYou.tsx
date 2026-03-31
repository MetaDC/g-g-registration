import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import logo from "@/assets/gg-logo.webp";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--gradient-hero)" }}
    >
      <motion.div
        className="bg-card rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
        </motion.div>

        <motion.img
          src={logo}
          alt="Grooming Gurus"
          className="w-16 h-16 object-contain mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />

        <motion.h1
          className="font-display text-3xl md:text-4xl tracking-wider text-foreground mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          THANK YOU!
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-sm md:text-base mb-2"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Your registration has been submitted successfully. 🏏
        </motion.p>

        <motion.p
          className="text-muted-foreground/70 text-xs md:text-sm mb-8"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          We will contact you shortly to confirm your team details.
        </motion.p>

        <motion.button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-md font-display text-lg tracking-wider text-primary hover:scale-105 transition-transform"
          style={{ background: "var(--gradient-gold)" }}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          BACK TO HOME
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ThankYou;
