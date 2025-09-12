import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-siena-500 text-white hover:bg-siena-600 focus:ring-siena-400',
    secondary: 'bg-siena-100 text-siena-800 hover:bg-siena-200 focus:ring-siena-200',
    outline: 'border border-siena-500 text-siena-500 hover:bg-siena-50 focus:ring-siena-400',
  };
  
  const sizeStyles = {
    sm: 'text-xs sm:text-sm px-2 py-1.5 sm:px-3 sm:py-1.5',
    md: 'text-sm md:text-base px-3 py-2 sm:px-4 sm:py-2',
    lg: 'text-sm sm:text-base md:text-lg px-4 py-2.5 sm:px-6 sm:py-3',
  };
  
  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;