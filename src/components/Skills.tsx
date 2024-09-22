import Image from 'next/image';
import React from 'react';

interface SkillsProps {
    text: string;
    icon: string;
}

export const Skills: React.FC<SkillsProps> = ({ text, icon }) => {
    return (
        <div className="bg-customBlueSecondary p-5 border-b-2 border-b-purplePrimary space-x-1 rounded-md w-full flex">
            <p className="text-white flex gap-2 items-center">
                <Image src={icon} alt='Logomarca' className='w-5 h-5' />
                {text}
            </p>
        </div>
    );
};
