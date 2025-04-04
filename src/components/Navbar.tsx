
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-collective-beige/90 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <div className="h-10 w-auto overflow-hidden">
              <img 
                src="/lovable-uploads/dd0c2c65-b548-46ec-9c08-392bf73a05c4.png" 
                alt="GOOD! Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <span className="logo-text text-2xl text-collective-black">Collective</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLinks />
            <Button asChild variant="outline" className="ml-2">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-collective-black focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-collective-beige z-40 pt-20">
          <div className="flex flex-col items-center space-y-8 py-10">
            <NavLinks mobile />
            <Button asChild className="mt-4 w-1/2">
              <Link to="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className={`font-mono ${
            mobile ? "text-xl py-2" : "text-sm"
          } transition-colors hover:text-collective-orange ${
            location.pathname === link.path ? "text-collective-orange" : ""
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
