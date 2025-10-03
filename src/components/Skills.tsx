import Image from "next/image";
import React from "react";

interface SkillsProps {
  text: string;
  icon: string;
}

export const Skills: React.FC<SkillsProps> = ({ text, icon }) => {
  return (
    <div className="relative bg-customBlueSecondary p-5 border-b-2 border-b-purplePrimary space-x-1 rounded-md w-full flex group hover:bg-purplePrimary/20 hover:scale-105 hover:shadow-lg hover:shadow-purplePrimary/25 transition-all duration-300 ease-in-out cursor-pointer animate-in slide-in-from-bottom">
      <p className="text-white flex gap-2 items-center group-hover:text-purplePrimary transition-colors duration-300">
        <Image 
          src={icon} 
          alt="Logomarca" 
          className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
        />
        {text}
      </p>
      <div className="absolute inset-0 bg-gradient-to-r from-purplePrimary/0 via-purplePrimary/10 to-purplePrimary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
    </div>
  );
};
