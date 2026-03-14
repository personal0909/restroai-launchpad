import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is RestroAI?",
    a: "RestroAI is an all-in-one restaurant POS software that helps you manage orders, menus, tables, staff, billing, and more—all from a single dashboard.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes! You can sign up and start using RestroAI for free. No credit card required.",
  },
  {
    q: "Which payment gateways are supported?",
    a: "We currently integrate with Stripe and Razorpay for fast, secure, and flexible payment processing.",
  },
  {
    q: "Can I customise the floor plan?",
    a: "Absolutely. Our built-in floor plan designer lets you map out your restaurant layout with drag-and-drop simplicity.",
  },
  {
    q: "Does RestroAI support QR code menus?",
    a: "Yes. Generate QR codes for each table so guests can browse your menu and place orders contactlessly.",
  },
  {
    q: "How does staff management work?",
    a: "You can create separate logins for every staff member with role-based permissions—from managers to waitstaff.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is encrypted and stored securely in the cloud with regular backups and industry-standard security practices.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding">
    <div className="container mx-auto max-w-2xl">
      <h2 className="mb-12 text-center font-display text-3xl font-bold text-foreground sm:text-4xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left font-display font-semibold text-foreground">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
