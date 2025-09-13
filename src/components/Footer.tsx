const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 bg-card border-2 border-accent/30 rounded-xl flex items-center justify-center shadow-accent-glow">
              <img src="/placeholder-company-logo.png" alt="Company Logo" className="h-6 w-6 object-contain" />
            </div>
            <div className="text-sm text-muted-foreground">© 2025 Nagarro. All rights reserved.</div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-200">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;