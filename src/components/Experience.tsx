import React from 'react';
import ElectricBorder from './ElectricBorder';

interface ExperienceProps {
    dateRange: string;
    role: string;
    company: string;
}

export const Experience: React.FC<ExperienceProps> = ({ dateRange, role, company }) => {
    return (
        <ElectricBorder
            color="#614FD0"
            speed={0.8}
            chaos={0.5}
            thickness={2}
            className="relative"
        >
            <div className="bg-gradient-to-br from-customBlueSecondary/90 to-customBlueSecondary p-6 space-y-3 rounded-lg backdrop-blur-sm hover:from-customBlueSecondary hover:to-purplePrimary/10 transition-all duration-500 group">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                        <p className="text-purplePrimary text-xs font-semibold uppercase tracking-wider">
                            {dateRange}
                        </p>
                        <h3 className="text-white font-bold text-lg group-hover:text-purplePrimary transition-colors duration-300">
                            {role}
                        </h3>
                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                            {company}
                        </p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-purplePrimary group-hover:scale-150 transition-transform duration-300 mt-2"></div>
                </div>
            </div>
        </ElectricBorder>
    );
};

