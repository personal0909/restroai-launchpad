import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTablet from "@/assets/hero-tablet.png";

const HeroSection = () => (
  <section className="py-12 overflow-hidden lg:py-16">
    <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          Restaurant POS Software
        </span>
        <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Restaurant POS{" "}
          <span className="text-primary">Made Simple</span>
        </h1>
        <p className="mt-4 max-w-lg text-base text-muted-foreground lg:text-lg">
          Easily manage orders, menus, and tables in one place. Save time, reduce errors, and grow your business faster.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://app.restroai.online" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started Free <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="https://app.restroai.online/restaurant/10d" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
              View Live Demo
            </Button>
          </a>
          <a href="#features">
            <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
              View Features
            </Button>
          </a>
        </div>
        <div className="mt-5 flex items-center gap-2">
          <a href="https://instagram.com/restroai.online" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <Instagram className="h-5 w-5" />
            Follow us on Insta <span className="font-semibold text-foreground">(2K+ and counting)</span>
          </a>
        </div>
      </motion.div>

      {/* Right – Tablet mockup */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex items-center justify-center"
      >
        <img
          src={heroTablet}
          alt="RestroAI POS dashboard on a tablet"
          className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl drop-shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
