import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryItems = [
  { id: 1, label: "Tournament Action", src: gallery1 },
  { id: 2, label: "Team Spirit", src: gallery2 },
  { id: 3, label: "Champion Moments", src: gallery3 },
  { id: 4, label: "On the Field", src: gallery4 },
  { id: 5, label: "Victory Celebrations", src: gallery5 },
  { id: 6, label: "Behind the Scenes", src: gallery6 },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 bg-muted/50">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-primary mb-3">
            GALLERY
          </h2>
          <div className="w-16 h-0.5 bg-secondary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                width={640}
                height={640}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-display text-sm md:text-lg tracking-wider text-primary-foreground text-center px-2">
                  {item.label.toUpperCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-muted-foreground text-sm mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          More photos coming soon — stay tuned!
        </motion.p>
      </div>
    </section>
  );
};

export default GallerySection;
