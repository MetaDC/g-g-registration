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
import sponsor5 from "@/assets/hnk.png";
import sponsor6 from "@/assets/n-lounge.png";
import sponsor7 from "@/assets/oasis.png";
import sponsor8 from "@/assets/3tenx.png";

// import sponsor6 from "@/assets/sponsor-6.png";

const sponsors = [
  { name: "CO-SPONSOR", src: sponsor1 },
  { name: "BEVERAGE PARTNER", src: sponsor2 },
  { name: "MEDIA SPONSOR", src: sponsor3 },
  { name: "POWERED BY", src: sponsor4 },
  { name: "GIFTING PARTNER", src: sponsor5 },
  { name: "HYDRATING PARTNER", src: sponsor6 },
  { name: "SNACKING PARTNER", src: sponsor7 },
  { name: "Title Sponsor", src: sponsor8 },
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
            PREVIOUS SPONSORS 2025
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
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {sponsors.map((sponsor, index) => (
                <CarouselItem
                  key={`${sponsor.name}-${index}`}
                  className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-400">
                    <img
                      src={sponsor.src}
                      alt={sponsor.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="h-20 w-20 object-contain"
                    />
                    <span className="text-xs text-muted-foreground text-center leading-tight">
                      {sponsor.name}
                    </span>
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
