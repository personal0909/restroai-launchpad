const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col items-center justify-between gap-6 text-sm text-muted-foreground sm:flex-row">
      <span className="font-display font-bold text-foreground">
        Restro<span className="text-primary">AI</span>
      </span>
      <div className="flex items-center gap-4">
        <a href="https://instagram.com/restroai.online" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="https://app.restroai.online/restaurant/10d" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
          Live Demo
        </a>
      </div>
      <p>© {new Date().getFullYear()} RestroAI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
