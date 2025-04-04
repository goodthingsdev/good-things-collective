import { Link } from "react-router-dom";
import { ChevronRight, Leaf, Lock, Globe, Github, MessagesSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-collective-black text-collective-beige py-16">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">GOOD!</h3>
            <p className="text-sm opacity-80 max-w-xs">
              A remote-first software collective crafting secure, ethical, and privacy-focused digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/goodthingsdev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-collective-beige/10 hover:bg-collective-orange transition-colors">
                <Github size={18} className="text-collective-beige" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Get In Touch</h4>
            <p className="text-sm opacity-80 mb-4">
              Ready to start your next project? Send us your proposal or book a call!
            </p>
            <a 
              href="mailto:collective@goodthings.dev" 
              className="flex items-center text-collective-orange hover:underline"
            >
              collective@goodthings.dev
            </a>
          </div>
        </div>
        
        <div className="border-t border-collective-beige/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs opacity-60">© {new Date().getFullYear()} GOOD! Collective. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-xs opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Privacy Policy</span>
            <span className="text-xs opacity-60 hover:opacity-100 transition-opacity cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-sm opacity-80 hover:opacity-100 transition-opacity flex items-center group"
    >
      <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
      {children}
    </Link>
  </li>
);

export default Footer;
