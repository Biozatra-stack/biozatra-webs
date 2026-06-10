import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Droplet } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Biozatra', path: '/about' },
  { name: 'Participation Models', path: '/models' },
  { name: 'Pearl Opportunity', path: '/assam-story' },
  { name: 'Inquiry', path: '/inquiry' },
];

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-river text-forest selection:bg-forest selection:text-river">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-river/95 backdrop-blur-sm border-b border-stone/20">
        <div className="max-w-7xl mx-auto px-12 h-24 md:h-28 flex items-center justify-between">
          <NavLink to="/" className="flex items-center z-50 mix-blend-multiply" onClick={closeMenu}>
            <img src="/logo.png?v=2" alt="BIOZATRA Logo" className="h-[5.25rem] md:h-[6rem] w-auto object-contain" />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-[11px] uppercase tracking-widest font-semibold transition-colors hover:text-gold relative',
                    isActive ? 'text-forest' : 'text-forest/80'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 z-50 text-forest"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-0 left-0 right-0 h-screen bg-river pt-24 px-6 flex flex-col gap-6"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'font-serif text-3xl transition-colors',
                      isActive ? 'text-forest' : 'text-stone'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone/20 bg-forest text-river pt-16 pb-8 px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6 inline-block bg-river/10 p-2 rounded-sm w-fit">
              <img src="/logo.png?v=2" alt="BIOZATRA Logo" className="h-[4rem] w-auto object-contain object-left invert brightness-0" />
            </div>
            <p className="text-river/80 mt-4 leading-relaxed font-light text-sm max-w-sm">
              Building Sustainable Aquaculture Ecosystems.<br/>
              Supporting Farmers, SHGs, Cooperatives & Community Clusters Across Northeast India.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Navigation</h4>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 3).map(link => (
                <li key={link.path}>
                  <NavLink to={link.path} className="text-[11px] uppercase tracking-widest font-semibold text-river/80 hover:text-gold transition-colors">{link.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold text-gold mb-6 block">Connect</h4>
            <ul className="space-y-4">
              <li>
                <NavLink to="/assam-story" className="text-[11px] uppercase tracking-widest font-semibold text-river/80 hover:text-gold transition-colors">Pearl Opportunity</NavLink>
              </li>
              <li>
                <NavLink to="/inquiry" className="text-[11px] uppercase tracking-widest font-semibold text-river/80 hover:text-gold transition-colors">Inquiries & Partnerships</NavLink>
              </li>
              <li className="text-[11px] font-sans text-river/80 mt-4 block">
                📧 biozatra.info@gmail.com
              </li>
              <li className="text-[11px] font-sans text-river/80 block">
                📞 7086504244
              </li>
              <li className="text-[11px] font-sans text-river/80 block">
                📞 9957577096
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-river/10 flex flex-col items-center gap-6">
          <p className="font-serif text-2xl italic tracking-wide text-river">
            From <span className="text-blue-300">Northeast.</span> For the <span className="text-gold/90">World.</span>
          </p>
          <div className="text-[9px] uppercase tracking-widest font-bold opacity-50 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p>© {new Date().getFullYear()} BIOZATRA PLATFORM. ALL RIGHTS RESERVED.</p>
            <div className="flex space-x-8">
              <p>FARM</p>
              <p>SCIENCE</p>
              <p>VALUE</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
