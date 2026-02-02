import { useState } from "react";
import { Menu, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/about", isExternal: false },
  { name: "Trainings", href: "/trainings", isExternal: false },
  { name: "Team", href: "/team", isExternal: false },
  { name: "Contact", href: "#contact", isExternal: true },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (href: string, isExternal: boolean) => {
    setIsOpen(false);
    if (isExternal && href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home and scroll
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(href.slice(1));
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("contact");
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dove-teal-dark/95 backdrop-blur-sm border-b border-dove-teal-light/20">
      <div className="container-narrow">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
              <Feather className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold">DovesMind</span>
              <span className="text-lg font-light text-accent"> Synergy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isExternal ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isExternal)}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              size="lg"
              onClick={scrollToContact}
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-dove-teal border-dove-teal-light/20">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-primary-foreground mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <Feather className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-lg font-bold">DovesMind</span>
                    <span className="text-lg font-light text-accent"> Synergy</span>
                  </div>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    link.isExternal ? (
                      <button
                        key={link.name}
                        onClick={() => handleNavClick(link.href, link.isExternal)}
                        className="text-base font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2 text-left"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </nav>
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-4"
                  size="lg"
                  onClick={() => {
                    setIsOpen(false);
                    scrollToContact();
                  }}
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
