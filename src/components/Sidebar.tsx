import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Oswal' },
  { id: 'timeline', label: 'Our Legacy' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

const Sidebar = ({ activeSection, onNavigate }: SidebarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (section: string) => {
    onNavigate(section);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-2 bg-background/90 backdrop-blur-sm rounded border border-border"
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed left-0 top-0 h-screen w-64 bg-background border-r border-border
          flex flex-col justify-between py-12 px-8 z-40
          transition-transform duration-300
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div>
          <div className="mb-12">
            <h1 className="font-display text-2xl text-primary tracking-wide">OSWAL</h1>
            <div className="w-16 h-px bg-primary mt-2 mb-1" />
            <p className="text-sm text-secondary tracking-widest">Group of Industries</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                onClick={() => handleNav(item.id)}
                className={`
                  block w-full text-left py-2.5 text-sm tracking-wide transition-all duration-300
                  hover:text-primary hover:pl-2
                  ${activeSection === item.id ? 'text-primary font-medium pl-2' : 'text-muted-foreground'}
                `}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="text-xs text-muted-foreground">
          <p>© 2025 Oswal Group</p>
          <p className="mt-1">Est. 1845</p>
        </div>
      </motion.aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-secondary/30 backdrop-blur-sm z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
