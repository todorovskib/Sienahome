import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: 'h-8 w-16',   // Optimized for mobile header
    md: 'h-12 w-24',  // Medium size
    lg: 'h-16 w-32'   // Large size
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`${sizes[size]} transition-all duration-300 hover:scale-105 hover:drop-shadow-md`}>
        <img 
          src="https://raw.githubusercontent.com/todorovskib/css-exercises/refs/heads/main/Logo2.png"
          alt="Siena Home"
          className="h-full w-full object-contain filter drop-shadow-sm"
        />
      </div>
    </div>
  );
};

export default Logo;