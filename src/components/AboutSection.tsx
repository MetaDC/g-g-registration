import { motion } from "framer-motion";
import teamPhoto from "@/assets/team-photo.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-4xl md:text-6xl text-center text-primary tracking-wider mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ABOUT THE TOURNAMENT
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={teamPhoto}
              alt="Grooming Gurus Team"
              className="rounded-lg shadow-2xl w-full aspect-[3/3]"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
              Grooming Gurus brings together the salon and grooming community for an exciting cricket tournament in Vadodara. This unique event blends creativity and competition, giving barbers, stylists, and beauty professionals across Gujarat a chance to showcase their skills both behind the chair and on the field.
              </p>
                 <p className="text-lg">
           More than just cricket, it’s about networking, team spirit, and celebrating the industry in a fun, energetic way. Represent your brand, build connections, and enjoy the thrill of the game.  </p>
          <p className="text-lg">
      Join Grooming Gurus in Vadodara - where style meets sport.  </p>

              <div className="bg-muted rounded-lg p-6 space-y-3">
                <h3 className="font-display text-2xl text-primary tracking-wide">REGISTRATION DETAILS</h3>
                <ul className="space-y-2 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span>Salon registration fee: <strong className="text-foreground">₹5,000</strong></span>
                  </li>
                   <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span>Player registration: <strong className="text-foreground">₹2,000 per player</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span>Minimum <strong className="text-foreground">8 players</strong>, maximum <strong className="text-foreground">15 players</strong> per team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold mt-0.5">•</span>
                    <span><strong className="text-foreground">8 players</strong> will play on the team at one time</span>
                  </li> 
                </ul>
              </div>

              {/* <div className="bg-muted rounded-lg p-6 space-y-3">
                <h3 className="font-display text-2xl text-primary tracking-wide">PLAYER AUCTION</h3>
                <p className="text-sm md:text-base">
                  Professional players will be invited for auction. Each team can buy up to <strong className="text-foreground">2 professional players</strong>. 
                  These players will be charged based on their skills and the auction bidding.
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
