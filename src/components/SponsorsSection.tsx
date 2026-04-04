import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import sponsor1 from "@/assets/ark.png";
import sponsor2 from "@/assets/deer-garden.png";
import sponsor3 from "@/assets/godrej-p.png";
import sponsor4 from "@/assets/silk-essence.png";
import sponsor5 from "@/assets/3tenx.png";
// import sponsor6 from "@/assets/sponsor-6.png";

const sponsors = [
  { name: "ark", src: sponsor1 },
  { name: "deer garden", src: sponsor2 },
  { name: "godrej professional", src: sponsor3 },
  { name: "silk essence", src: sponsor4 },
  { name: "3tenx", src: sponsor5 },
  // { name: "Wolkrit Cosmetics", src: sponsor6 },
];

const SponsorsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl tracking-wider text-primary mb-3">
            PREVIOUS SPONSORS
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {sponsors.map((sponsor) => (
                <CarouselItem
                  key={sponsor.name}
                  className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="flex items-center justify-center h-28 rounded-lg bg-card border border-border p-4 grayscale hover:grayscale-0 transition-all duration-300">
                    <img
                      src={sponsor.src}
                      alt={sponsor.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
