import React, { useEffect, useState } from 'react';
import { Sun, Moon, LogIn, UserPlus, ChevronDown } from 'lucide-react';

const NavLink = ({ children }) => (
  <a href="#" className="px-3 py-2 text-sm font-medium hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
    {children}
  </a>
);

export default function Header() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#" className="text-xl font-semibold tracking-tight">AIPRMT</a>
          <nav className="hidden md:flex items-center">
            <NavLink>Home</NavLink>
            <NavLink>Images</NavLink>
            <NavLink>Videos</NavLink>
            <NavLink>Content</NavLink>
            <NavLink>Prompts</NavLink>
            <NavLink>Premium</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            <LogIn size={16} /> Log In
          </button>
          <button className="inline-flex items-center gap-1 rounded-full bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 text-sm transition-colors">
            <UserPlus size={16} /> Sign Up
          </button>
          <button aria-label="Toggle theme" onClick={toggleTheme} className="ml-2 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
            {dark ? <Sun size={18} className="text-orange-400" /> : <Moon size={18} className="text-orange-500" />}
          </button>
          <button className="md:hidden inline-flex items-center gap-1 px-2 py-1 rounded-full border border-neutral-300 dark:border-neutral-700">
            Menu <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
