import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Jayashankara M
            </span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 border-l pl-6 border-slate-200">
              <a href="https://github.com/Jayshankar927" target="_blank" rel="noreferrer">
                <Github className="w-5 h-5 text-slate-600 hover:text-black" />
              </a>
              <a href="https://linkedin.com/in/jayashankara-m-191ab0219" target="_blank" rel="noreferrer">
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-blue-700" />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;