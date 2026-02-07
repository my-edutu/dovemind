import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useContactModal } from "@/contexts/ContactModalContext";
import logoImage from "@/assets/logo-dovesmind.png";

const navLinks = [
  { name: "About", href: "/about", isPage: true },
  { name: "Services", href: "/services", isPage: true },
  { name: "Team", href: "/team", isPage: true },
  { name: "Blog", href: "/blog", isPage: true },
  { name: "Contact", href: "/contact", isPage: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModal();

  const handleBookConsultation = () => {
    setIsOpen(false);
    openModal();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container-narrow">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <img src={logoImage} alt="DovesMind Logo" className="h-10 w-10 object-contain" />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-foreground">Dovesmind</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-dove-teal transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="bg-dove-teal text-white hover:bg-dove-teal-light font-semibold"
              size="lg"
              onClick={handleBookConsultation}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white border-border">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-foreground mb-4">
                  <img src={logoImage} alt="DovesMind Logo" className="h-10 w-10 object-contain" />
                  <div>
                    <span className="text-lg font-bold text-foreground">Dovesmind</span>
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-foreground/80 hover:text-dove-teal transition-colors py-2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <Button
                  className="bg-dove-teal text-white hover:bg-dove-teal-light font-semibold mt-4"
                  size="lg"
                  onClick={handleBookConsultation}
                >
                  Book Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
