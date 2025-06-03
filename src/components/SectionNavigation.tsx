import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'overview', title: '🔍 Overview' },
  { id: 'log-volume', title: '📦 Log Volume' },
  { id: 'architecture', title: '🛠️ Architecture' },
  { id: 'performance', title: '📈 Performance' },
  { id: 'pricing', title: '💸 Pricing' },
  { id: 'maintenance', title: '⚙️ Maintenance' },
  { id: 'recommendation', title: '📌 Recommendation' },
  { id: 'final-thoughts', title: '🧠 Final Thoughts' },
];

export const SectionNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
      <h2 className="text-lg font-semibold mb-4 text-slate-800">Contents</h2>
      <ul className="space-y-2">
        {sections.map(section => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors text-sm ${
                activeSection === section.id
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};