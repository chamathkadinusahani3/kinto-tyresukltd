import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  fullWidth?: boolean;
}
export function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] focus:ring-brand-red disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-[#ff0000] text-white hover:bg-[#B01820] border border-transparent shadow-glow',
    secondary: 'bg-[#2A2A2A] text-white hover:bg-[#333333] border border-transparent',
    outline: 'bg-transparent text-white border border-gray-600 hover:border-white hover:bg-white/5'
  };
  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClassName = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;
  const Component = href ? Link : motion.button;
  const motionProps = href ? {} : {
    whileHover: {
      scale: 1.02
    },
    whileTap: {
      scale: 0.98
    }
  };
  if (href) {
    return <Link to={href} className={combinedClassName}>
        {children}
      </Link>;
  }
  return <motion.button className={combinedClassName} {...motionProps} {...props as any}>
      {children}
    </motion.button>;
}