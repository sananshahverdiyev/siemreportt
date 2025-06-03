import React from 'react';

interface SectionTitleProps {
  title: string;
  emoji: string;
  description: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, emoji, description }) => {
  return (
    <div className="mb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center">
        <span className="mr-2">{emoji}</span>
        <span>{title}</span>
      </h2>
      <p className="text-slate-600 mt-2">{description}</p>
      <div className="h-1 w-24 bg-blue-500 mt-4 rounded"></div>
    </div>
  );
};