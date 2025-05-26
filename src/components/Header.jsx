import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Active link style
  const activeStyle = "text-black font-medium";
  const inactiveStyle = "text-gray-600 font-light";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl tracking-tight font-light text-gray-900">
            <NavLink to="/" className="transition-opacity hover:opacity-80">
              John Doe
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/skills" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/academic" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Academic
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => 
                    `transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-black focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - Slide Down Animation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-2">
            <ul className="flex flex-col space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/skills" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/academic" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Academic
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({isActive}) => 
                    `block transition-colors duration-200 hover:text-black ${isActive ? activeStyle : inactiveStyle}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;