import React, { useState, useEffect } from 'react';
import { Shield, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900 text-white shadow-lg py-3' 
          : 'bg-gradient-to-r from-slate-900 to-slate-800 text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <h1 className="text-xl md:text-2xl font-bold">SIEM Solutions Comparison</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          
          {isSearchOpen && (
            <div className="absolute top-full right-4 mt-2 w-full max-w-md bg-white rounded-lg shadow-lg p-4 border border-slate-200 transition-all">
              <input 
                type="text" 
                placeholder="Search comparison data..." 
                className="w-full p-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};