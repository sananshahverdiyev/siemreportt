import React from 'react';

interface SiemCardProps {
  title: string;
  icon: React.ReactNode;
  color: 'blue' | 'indigo' | 'emerald';
  children: React.ReactNode;
}

export const SiemCard: React.FC<SiemCardProps> = ({ title, icon, color, children }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200',
    indigo: 'bg-indigo-50 border-indigo-200',
    emerald: 'bg-emerald-50 border-emerald-200'
  };
  
  const titleColors = {
    blue: 'text-blue-800',
    indigo: 'text-indigo-800',
    emerald: 'text-emerald-800'
  };

  return (
    <div className={`rounded-lg ${colorClasses[color]} p-6 border transition-all hover:shadow-md`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className={`text-xl font-semibold ml-3 ${titleColors[color]}`}>{title}</h3>
      </div>
      {children}
    </div>
  );
};