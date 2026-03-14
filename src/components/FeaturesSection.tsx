import { motion } from "framer-motion";
import {
  ShoppingCart,
  UtensilsCrossed,
  QrCode,
  CreditCard,
  Users,
  Monitor,
  LayoutGrid,
  ClipboardList,
  Printer,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Order Management",
    desc: "All your customer orders—dine-in to takeout—organized in one place. Speed up service and keep your kitchen running smoothly.",
    span: "lg:col-span-2",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu Management",
    desc: "Add, edit, or remove items on the go. Highlight specials, update prices, and keep everything in sync.",
    span: "lg:col-span-1",
  },
  {
    icon: QrCode,
    title: "QR Code Menu",
    desc: "Contactless ordering made easy for your guests.",
    span: "",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway",
    desc: "Fast, secure, and flexible payments using Stripe and Razorpay.",
    span: "",
  },
  {
    icon: Users,
    title: "Staff Management",
    desc: "Separate login for every staff role with different permissions.",
    span: "",
  },
  {
    icon: Monitor,
    title: "POS Integration",
    desc: "Complete Point of Sale integration for seamless checkout.",
    span: "",
  },
  {
    icon: LayoutGrid,
    title: "Custom Floor Plans",
    desc: "Design your restaurant's layout exactly how you want it.",
    span: "",
  },
  {
    icon: ClipboardList,
    title: "Kitchen Order Tickets",
    desc: "Efficient kitchen workflow with digital KOT management.",
    span: "",
  },
  {
    icon: Printer,
    title: "Bill Printing",
    desc: "Quick and accurate billing with thermal printer support.",
    span: "",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    desc: "Data-driven decisions with comprehensive reporting.",
    span: "",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-alt">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          Everything You Need to Run Your Restaurant
        </h2>
        <p className="mt-4 text-muted-foreground">
          A comprehensive suite of tools designed to simplify every aspect of your restaurant operations.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((f) => (
          <motion.div
            key={f.title}
            variants={item}
            className={`group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg ${f.span}`}
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
