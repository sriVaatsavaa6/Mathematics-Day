import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", title }) => {
  return (
    <section id={id} className={`min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 md:px-8 ${className}`}>
      <div className="max-w-7xl w-full mx-auto">
        {title && (
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 mb-12 text-center drop-shadow-sm leading-tight pb-2">
                {title}
            </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;