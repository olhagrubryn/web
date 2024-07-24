// src/ui/MagicButton.tsx
import React from 'react';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

export const MagicButton: React.FC<MagicButtonProps> = ({ title, icon, position, handleClick, otherClasses }) => {
  return (
    <button
      onClick={handleClick}
      className={`relative inline-flex h-12 w-32 overflow-hidden rounded-xl p-[1px] border-2 border-red-500 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFAAAA_0%,#FF0000_50%,#FFAAAA_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-bold text-red backdrop-blur-3xl">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </span>
    </button>
  );
};
