import { useState } from "react";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/logo-dovesmind.png";
import LegalModal from "./LegalModal";

const footerLinks = {
  services: [
    { name: "Psychological Consultation", href: "#services" },
    { name: "Recovery Support", href: "/services" },
    { name: "Training Programs", href: "/services" },
  ],
  legal: [
    { name: "Privacy Policy", type: "privacy" },
    { name: "Confidentiality & Ethics", type: "ethics" },
    { name: "Terms of Service", type: "terms" },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // WhatsApp number (placeholder - replace with actual number)
  const whatsappNumber = "2348000000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'd like to inquire about your services.")}`;

  const getLegalContent = (type: string) => {
    switch (type) {
      case "privacy":
        return (
          <div className="space-y-4">
            <h3>1. Introduction</h3>
            <p>DovesMind Synergy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services.</p>
            <h3>2. Information We Collect</h3>
            <p>We may collect personal information such as your name, email address, phone number, and any other information you provide when you fill out our contact forms or book a consultation.</p>
            <h3>3. How We Use Your Information</h3>
            <p>We use your information to provide our services, communicate with you, and improve our offerings. We do not sell or share your personal information with third parties for marketing purposes.</p>
            <h3>4. Data Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse.</p>
            <h3>5. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.</p>
          </div>
        );
      case "ethics":
        return (
          <div className="space-y-4">
            <h3>Confidentiality & Ethics Statement</h3>
            <p>At DovesMind Synergy, we adhere to the highest standards of professional ethics and confidentiality.</p>
            <h3>1. Client Confidentiality</h3>
            <p>All interactions with our psychologists and counselors are strictly confidential. Information shared during sessions will not be disclosed to anyone without your explicit consent, except where required by law or to prevent harm to yourself or others.</p>
            <h3>2. Professional Conduct</h3>
            <p>Our team consists of certified professionals who are bound by ethical codes of conduct. We treat every individual with respect, dignity, and non-judgmental support.</p>
            <h3>3. Dual Relationships</h3>
            <p>We maintain professional boundaries to ensure the integrity of the therapeutic relationship. We avoid dual relationships that could impair professional judgment or risk exploitation.</p>
          </div>
        );
      case "terms":
        return (
          <div className="space-y-4">
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using the DovesMind Synergy website and services, you agree to comply with and be bound by these Terms of Service.</p>
            <h3>2. Use of Services</h3>
            <p>Our services are intended for personal support and educational purposes. They are not a substitute for emergency medical care. If you are in a life-threatening situation, please contact emergency services immediately.</p>
            <h3>3. Intellectual Property</h3>
            <p>All content on this website, including text, graphics, logos, and images, is the property of DovesMind Synergy and is protected by copyright laws.</p>
            <h3>4. Limitation of Liability</h3>
            <p>DovesMind Synergy is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services or website.</p>
            <h3>5. Changes to Terms</h3>
            <p>We reserve the right to modify these Terms of Service at any time. Your continued use of the website constitutes acceptance of the updated terms.</p>
          </div>
        );
      default:
        return <p>Content not available.</p>;
    }
  };

  const getLegalTitle = (type: string) => {
    switch (type) {
      case "privacy": return "Privacy Policy";
      case "ethics": return "Confidentiality & Ethics";
      case "terms": return "Terms of Service";
      default: return "Legal Information";
    }
  };

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
                <span className="text-lg font-bold text-foreground">Dovesmind</span>
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
                  <button
                    onClick={() => setActiveModal(link.type)}
                    className="text-sm text-muted-foreground hover:text-dove-teal transition-colors text-left"
                  >
                    {link.name}
                  </button>
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

      <LegalModal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal ? getLegalTitle(activeModal) : ""}
        content={activeModal ? getLegalContent(activeModal) : null}
      />
    </footer>
  );
};

export default Footer;
