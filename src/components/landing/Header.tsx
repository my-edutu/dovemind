import { useState } from "react";
import { Menu, X, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Training Programs", href: "#training" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dove-teal-dark/95 backdrop-blur-sm border-b border-dove-teal-light/20">
      <div className="container-narrow">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
              <Feather className="h-5 w-5 text-accent-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold">DovesMind</span>
              <span className="text-lg font-light text-accent"> Synergy</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              size="lg"
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
                <div className="flex items-center gap-2 text-primary-foreground mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                    <Feather className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <span className="text-lg font-bold">DovesMind</span>
                    <span className="text-lg font-light text-accent"> Synergy</span>
                  </div>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
                <Button
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold mt-4"
                  size="lg"
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
