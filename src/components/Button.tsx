import React from 'react';

interface ButtonProps {
    text: string;
    destineLink?: string;
    icon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({ destineLink, text, icon: IconComponent }) => {
    return (
        <div className="bg-purplePrimary rounded-xl py-4 px-5 text-white flex items-center space-x-2 hover:bg-purplePrimary/90 hover:cursor-pointer w-max">
            <a href={destineLink} target="_blank" rel="noopener noreferrer" className="text-white font-medium">
                {text}
            </a>
            {IconComponent && <IconComponent className="text-white" size={20} weight="fill" />}
        </div>
    );
};
