const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
      <span className="font-display font-bold text-foreground">
        Restro<span className="text-primary">AI</span>
      </span>
      <p>© {new Date().getFullYear()} RestroAI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
