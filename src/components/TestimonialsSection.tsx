import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "It has completely transformed how we operate. Managing orders, tables, and staff all from one platform has reduced our workload and made everything run more smoothly.",
    name: "John Martin",
    role: "Owner of Riverbend Bistro",
    initials: "JM",
  },
  {
    quote:
      "The QR Code menu and payment integration have made a huge difference for us, especially after the pandemic. Customers love the ease, and we've seen faster table turnover.",
    name: "Emily Thompson",
    role: "Manager at Lakeside Grill",
    initials: "ET",
  },
  {
    quote:
      "We are able to track every order in real time, keep our menu updated, and quickly manage payments. It is like having an extra set of hands in the restaurant.",
    name: "Michael Scott",
    role: "Owner of Downtown Eats",
    initials: "MS",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-muted/50" id="testimonials">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
          Testimonials
        </span>
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          What Restaurant Owners Are Saying
        </h2>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative rounded-2xl border border-border bg-card p-8 shadow-sm"
          >
            <Quote className="mb-4 h-8 w-8 text-primary/30" />
            <div className="mb-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-8 text-muted-foreground leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {t.initials}
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
