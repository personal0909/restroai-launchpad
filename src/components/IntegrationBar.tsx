const IntegrationBar = () => (
  <section className="section-padding">
    <div className="container text-center">
      <p className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Trusted Payment Integrations
      </p>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {/* Stripe wordmark */}
        <span className="font-display text-3xl font-bold text-muted-foreground/40">Stripe</span>
        {/* Razorpay wordmark */}
        <span className="font-display text-3xl font-bold text-muted-foreground/40">Razorpay</span>
      </div>
    </div>
  </section>
);

export default IntegrationBar;
