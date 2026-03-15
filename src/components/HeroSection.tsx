import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTablet from "@/assets/hero-tablet.png";

const HeroSection = () => (
  <section className="section-padding overflow-hidden">
    <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          Restaurant POS Software
        </span>
        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Restaurant POS{" "}
          <span className="text-primary">Made Simple</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">
          Easily manage orders, menus, and tables in one place. Save time, reduce errors, and grow your business faster.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
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
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a href="https://instagram.com/restroai.online" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            <span className="font-semibold text-foreground">2K+</span> followers and counting
          </a>
        </div>
      </motion.div>

      {/* Right – Tablet mockup */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex justify-center"
      >
        <img
          src={heroTablet}
          alt="RestroAI POS dashboard on a tablet"
          className="w-full max-w-lg drop-shadow-2xl"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
