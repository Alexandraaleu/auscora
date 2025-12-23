import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="font-display text-lg font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-foreground">
                AUSCORA
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Precision-engineered medical devices advancing patient care through innovation and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Products</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Diagnostic Devices
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Surgical Instruments
              </Link>
              <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Patient Monitoring
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Contact</h3>
            <div className="flex flex-col gap-3">
              <a 
                href="mailto:info@auscora.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@auscora.com
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Medical Drive<br />Innovation City, MC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AUSCORA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;