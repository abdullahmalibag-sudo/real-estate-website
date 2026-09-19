import React, { useState } from 'react';
import { profileData } from '../data/portfolioData';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  useImage?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', className = '', useImage = true }) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'w-10 h-10 sm:w-11 sm:h-11 text-base',
    md: 'w-12 h-12 sm:w-14 sm:h-14 text-xl',
    lg: 'w-16 h-16 sm:w-20 sm:h-20 text-2xl'
  }[size];

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-[#070b14] border-2 border-sky-400/70 shadow-[0_0_20px_rgba(56,189,248,0.35)] group-hover:border-sky-300 group-hover:shadow-[0_0_28px_rgba(56,189,248,0.65)] transition-all duration-300 select-none shrink-0 overflow-hidden font-black tracking-tighter ${sizeClasses} ${className}`}
    >
      {useImage && !imgError && profileData.heroImage ? (
        <img
          src={profileData.heroImage}
          alt={profileData.nameEn}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top rounded-full"
          referrerPolicy="no-referrer"
        />
      ) : (
        <>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500/25 via-transparent to-blue-500/20 pointer-events-none" />
          <span className="relative z-10 bg-gradient-to-br from-white via-sky-100 to-sky-400 bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_8px_rgba(56,189,248,0.6)]">
            A
          </span>
        </>
      )}
      {/* Subtle orbital glowing ring */}
      <div className="absolute -inset-0.5 rounded-full border border-sky-400/40 animate-pulse pointer-events-none" />
    </div>
  );
};
