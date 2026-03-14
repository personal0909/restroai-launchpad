import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type Feature = {
  name: string;
  note?: string;
  starter: boolean;
  silver: boolean;
  platinum: boolean;
};

const features: Feature[] = [
  { name: "Menu", starter: true, silver: true, platinum: true },
  { name: "Menu Item", note: "Unlimited", starter: true, silver: true, platinum: true },
  { name: "Item Category", starter: true, silver: true, platinum: true },
  { name: "Area", starter: false, silver: true, platinum: true },
  { name: "Table", starter: true, silver: true, platinum: true },
  { name: "Reservation", starter: false, silver: true, platinum: true },
  { name: "KOT", starter: false, silver: true, platinum: true },
  { name: "Order", note: "Unlimited", starter: true, silver: true, platinum: true },
  { name: "Customer", starter: true, silver: true, platinum: true },
  { name: "Staff", note: "Unlimited", starter: true, silver: true, platinum: true },
  { name: "Report", starter: false, silver: true, platinum: true },
  { name: "Delivery Executive", starter: false, silver: true, platinum: true },
  { name: "Waiter Request", starter: false, silver: true, platinum: true },
  { name: "Expenses", starter: false, silver: true, platinum: true },
  { name: "Payment", starter: true, silver: true, platinum: true },
  { name: "Settings", starter: false, silver: true, platinum: true },
  { name: "Change Branch", starter: false, silver: false, platinum: true },
  { name: "Export Report", starter: false, silver: false, platinum: true },
  { name: "Table Reservation", starter: false, silver: false, platinum: true },
  { name: "Payment Gateway Integration", starter: false, silver: false, platinum: true },
  { name: "Theme Setting", starter: false, silver: false, platinum: true },
  { name: "Customer Display", starter: false, silver: false, platinum: true },
];

const plans = [
  {
    key: "starter" as const,
    name: "Starter",
    monthlyPrice: 5,
    annualPrice: 50,
    description: "Get started at a great price.",
    popular: false,
  },
  {
    key: "silver" as const,
    name: "Silver",
    monthlyPrice: 10,
    annualPrice: 100,
    description: "Best for growing restaurants.",
    popular: true,
  },
  {
    key: "platinum" as const,
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
                {features.map((f) => {
                  const included = f[plan.key];
                  return (
                    <li
                      key={f.name}
                      className={`flex items-start gap-2 text-sm ${
                        included ? "text-muted-foreground" : "text-muted-foreground/40"
                      }`}
                    >
                      {included ? (
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      ) : (
                        <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/30" />
                      )}
                      <span className={included ? "" : "line-through"}>
                        {f.name}
                        {f.note && (
                          <span className="ml-1 text-xs font-semibold text-primary">({f.note})</span>
                        )}
                      </span>
                    </li>
                  );
                })}
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
