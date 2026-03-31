import { motion } from "framer-motion";
import logo from "@/assets/gg-logo.webp";
import heroImage from "@/assets/hero-image.webp";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background hero image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cricket tournament"
          className="w-full h-full object-cover object-top opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Decorative gold lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-secondary" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-secondary" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-secondary" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src={logo}
          alt="Grooming Gurus Logo"
          className="w-40 h-40 md:w-56 md:h-56 object-contain mb-8 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-primary-foreground drop-shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          GROOMING GURUS
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl tracking-widest uppercase text-secondary font-medium drop-shadow-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Cricket Tournament 2026
        </motion.p>

        <motion.p
          className="mt-2 text-sm md:text-base text-secondary/90 max-w-lg drop-shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Where the salon industry meets the cricket pitch. Register your team now!
        </motion.p>

        <motion.a
          href="#register"
          className="mt-10 px-10 py-4 font-display text-xl tracking-wider rounded-md transition-all hover:scale-105 shadow-xl"
          style={{ background: "var(--gradient-gold)" }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <span className="text-primary font-bold">REGISTER NOW</span>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-secondary/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
