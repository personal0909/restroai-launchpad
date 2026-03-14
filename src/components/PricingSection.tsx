import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Menu & Unlimited Items",
  "Item Category",
  "Area & Table Management",
  "Reservations",
  "KOT (Kitchen Order Tickets)",
  "Unlimited Orders",
  "Customer Management",
  "Unlimited Staff Accounts",
  "Reports & Export",
  "Delivery Executive",
  "Waiter Requests",
  "Expenses Tracking",
  "Payment Gateway Integration",
  "Theme & Settings",
  "Customer Display",
];

const plans = [
  {
    name: "Starter",
    monthlyPrice: 5,
    annualPrice: 50,
    description: "Get started at a great price.",
    popular: false,
  },
  {
    name: "Silver",
    monthlyPrice: 10,
    annualPrice: 100,
    description: "Best for growing restaurants.",
    popular: true,
  },
  {
    name: "Platinum",
    monthlyPrice: 20,
    annualPrice: 200,
    description: "For large chain restaurants.",
    popular: false,
  },
];

const lifetime = {
  name: "Lifetime",
  price: 199,
  description: "One-time payment, lifetime access to all features.",
};

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="section-padding" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            Pricing
          </span>
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-muted-foreground">
            Get everything you need to manage your restaurant with one affordable plan.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-1.5 py-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !annual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                annual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually
            </button>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.popular
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6">
                <span className="font-display text-4xl font-extrabold text-foreground">
                  ${annual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm text-muted-foreground">/{annual ? "year" : "month"}</span>
              </div>
              <a
                href="https://app.restroai.online"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Get Started
                </Button>
              </a>
              <ul className="mt-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Lifetime plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-accent/40 bg-accent/5 p-8 text-center shadow-sm"
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" />
            <h3 className="font-display text-lg font-bold text-foreground">{lifetime.name} Access</h3>
          </div>
          <p className="text-sm text-muted-foreground">{lifetime.description}</p>
          <div className="mt-4">
            <span className="font-display text-5xl font-extrabold text-foreground">${lifetime.price}</span>
            <span className="ml-1 text-sm text-muted-foreground">one-time</span>
          </div>
          <a href="https://app.restroai.online" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-6 gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
              Get Lifetime Access
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
