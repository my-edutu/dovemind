import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-dovesmind.png";

const footerLinks = {
  services: [
    { name: "Psychological Consultation", href: "#services" },
    { name: "Rehabilitation Referral", href: "#services" },
    { name: "Training Programs", href: "#training" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Confidentiality & Ethics", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // WhatsApp number (placeholder - replace with actual number)
  const whatsappNumber = "2348000000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to inquire about your services.")}`;

  return (
    <footer className="bg-white text-foreground border-t border-border">
      {/* Main footer */}
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="DovesMind Logo" className="h-10 w-10 object-contain" />
              <div>
                <span className="text-lg font-bold text-foreground">DovesMind</span>
                <span className="text-lg font-light text-dove-teal"> Synergy</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing confidential, ethical, and accessible psychological support and 
              substance abuse prevention services across Nigeria. Your wellness journey 
              starts here.
            </p>
          </div>

          {/* Services links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-dove-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-dove-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@dovesmindsynergy.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-dove-teal transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@dovesmindsynergy.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348000000000"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-dove-teal transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+234 800 000 0000</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-dove-teal transition-colors"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon - Fri: 9am - 5pm WAT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border">
        <div className="container-narrow py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} DovesMind Synergy. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p>Professional Psychological Support & Substance Abuse Prevention</p>
              <Link 
                to="/admin/login" 
                className="text-muted-foreground/60 hover:text-dove-teal transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
