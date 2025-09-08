import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-[#F6F4F0] py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-10 left-[5%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full border border-primary/10"></div>
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full border border-secondary/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium mb-6 gap-2">
              <div className="size-5 bg-primary text-white rounded-full flex items-center justify-center">
                <Shield className="size-3" />
              </div>
              <span>Smart Privacy. Smarter Business.</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2c5a] leading-tight mb-6 lg:whitespace-nowrap">
              AI is one prompt away from leaking your secrets.
            </h1>

            <p className="text-lg text-[#0a2c5a] mb-8 max-w-lg font-light leading-relaxed">
              PrivacyWeave delivers end-to-end data privacy solutions with advanced encryption standards and AI-driven automation to protect your most valuable assets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact">
                <Button size="lg" className="bg-[#0a2c5a] hover:bg-[#0a2c5a]/90 text-white px-8 rounded-md font-medium">
                  Request a Demo
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline" className="px-8 border-2 border-[#0a2c5a] text-[#0a2c5a] hover:bg-[#0a2c5a]/10 hover:text-[#0a2c5a] rounded-md font-medium transition-all">
                  View Solutions
                </Button>
              </Link>
            </div>

            <div className="space-y-3"></div>
          </motion.div>

          {/* Solar system below hero copy, full width and centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <div className="relative mx-auto h-[44rem] w-[44rem] md:h-[52rem] md:w-[52rem]">
              {/* Orbits (now 5, with Claude on outermost) */}
              <div className="orbit-ring orbit-1"></div>
              <div className="orbit-ring orbit-2"></div>
              <div className="orbit-ring orbit-3"></div>
              <div className="orbit-ring orbit-4"></div>
              <div className="orbit-ring orbit-5"></div>

              {/* Sun (PrivacyWeave) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="sun-glow size-40 md:size-56 rounded-full grid place-items-center">
                  <img
                    src="/assets/logos/privacyweave.png"
                    alt="PrivacyWeave"
                    className="size-24 md:size-32 object-contain rounded-full bg-white p-2"
                  />
                </div>
              </div>

              {/* Planets: one per orbit, no overlaps */}
              <div className="orbit-spin orbit-size-2 orbit-speed-slow" style={{ animationDelay: "-5s" }}>
                <div className="planet-at-edge">
                  <img src="/assets/logos/salesforce.png" alt="Salesforce" className="planet-img counter-slow" />
                </div>
              </div>
              <div className="orbit-spin orbit-size-3 orbit-speed-slower" style={{ animationDelay: "-8s" }}>
                <div className="planet-at-edge">
                  <img src="/assets/logos/postgresql.png" alt="PostgreSQL" className="planet-img counter-slower" />
                </div>
              </div>
              <div className="orbit-spin orbit-size-4 orbit-speed-slowest" style={{ animationDelay: "-11s" }}>
                <div className="planet-at-edge">
                  <img src="/assets/logos/openai.png" alt="OpenAI" className="planet-img counter-slowest" />
                </div>
              </div>
              {/* Claude moved to outermost orbit */}
              <div className="orbit-spin orbit-size-5 orbit-speed-medium" style={{ animationDelay: "-2s" }}>
                <div className="planet-at-edge">
                  <img src="/assets/logos/claude.png" alt="Claude" className="planet-img counter-medium" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
