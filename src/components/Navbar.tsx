'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-collective-beige/90 backdrop-blur-md shadow-sm'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className='container max-w-6xl mx-auto px-6'>
        <nav className='flex items-center justify-between'>
          <Link
            href='/'
            className='flex items-center gap-2 hover:opacity-90 transition-opacity'
          >
            <div className='h-[4.5rem] w-auto overflow-hidden'>
              <img
                src='/uploads/dd0c2c65-b548-46ec-9c08-392bf73a05c4.png'
                alt='GOOD! Logo'
                className='h-full w-auto object-contain'
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8 items-center'>
            <NavLinks />
            <Button asChild variant='outline' size='lg' className='ml-2'>
              <Link href='/contact'>Get in touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-collective-black focus:outline-none'
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className='md:hidden fixed inset-0 bg-collective-beige z-40 pt-20'>
          <div className='flex flex-col items-center space-y-8 py-10'>
            <NavLinks mobile />
            <Button asChild size='lg' className='mt-4 w-1/2'>
              <Link href='/contact'>Get in touch</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const pathname = usePathname();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/case-studies' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`${
            mobile ? 'text-xl' : 'text-sm'
          } font-mono transition-colors hover:text-collective-black ${
            isActive(link.path)
              ? 'text-collective-orange'
              : 'text-collective-gray'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
