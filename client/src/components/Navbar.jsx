import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../image/solarlogo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* 🔵 TOP CONTACT BAR (TESLA STYLE) */}
      <div className="w-full bg-blue-700 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">

          <span className="tracking-wide">
            ⚡ Powering Kenya with Clean Solar Energy
          </span>

          <a
            href="tel:+254702256347"
            className="font-semibold hover:text-blue-200 transition"
          >
            📞 Call Us: +254 702 256 347
          </a>

        </div>
      </div>

      {/* NAVBAR */}
      


<nav
  className={`sticky top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/85 backdrop-blur-xl shadow-lg'
      : 'bg-white/70 backdrop-blur-md'
     ? 'shadow-xl border-b border-blue-100' : ''
  }`}
>
  <div className="container mx-auto  flex items-center justify-between"></div>



        
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">

          {/* 🔷 PREMIUM LOGO (replaced S block) */}
          <Link to="/" className="flex items-center gap-3">

<Link to="/" className="flex items-center gap-3 group">

  {/* 🌞 Premium glowing logo container */}
<div className="relative w-20 h-20 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg ring-2 ring-blue-100 group-hover:ring-blue-400 transition-all duration-300">

  {/* glow effect */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-sky-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-300" />

  {/* logo image */}
  <img
    src={logo}
    alt="SolarSafe Logo"
    className="relative z-10 w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-300"
  />
</div>

  {/* BRAND TEXT */}
  

</Link>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg text-slate-900">
                SolarSafe
              </span>
              <span className="text-xs text-slate-500 tracking-wider">
                Beyond Solar
              </span>
            </div>

          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition ${
                  isActive(link.path)
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">

            {/* theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-blue-50 transition"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>

            {/* mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t bg-white"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-slate-700 hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}