import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Sign Up", desc: "Create your account in under a minute—no credit card required." },
  { num: "02", title: "Set Up Your Menu", desc: "Add your items, categories, and prices. Upload images if you like." },
  { num: "03", title: "Configure Tables", desc: "Use the floor plan builder to map out your restaurant layout." },
  { num: "04", title: "Start Taking Orders", desc: "Go live and let RestroAI handle the rest—from kitchen to billing." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-alt">
    <div className="container">
      <h2 className="mx-auto mb-16 max-w-xl text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
        Up and Running in Minutes
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
            className="text-center"
          >
            <span className="font-display text-5xl font-extrabold text-primary/20">{s.num}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
