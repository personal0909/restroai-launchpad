import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="section-padding bg-foreground text-background">
    <div className="container mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl font-bold sm:text-4xl">
        Ready to Simplify Your Restaurant?
      </h2>
      <p className="mt-4 text-background/70">
        Join hundreds of restaurants already using RestroAI to streamline their operations.
      </p>
      <a href="https://app.restroai.online" target="_blank" rel="noopener noreferrer">
        <Button size="lg" className="mt-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          Get Started Free <ArrowRight className="h-4 w-4" />
        </Button>
      </a>
    </div>
  </section>
);

export default CTASection;
