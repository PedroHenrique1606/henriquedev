import React from 'react';

interface EducationProps {
    dateRange: string;
    course: string;
    institution: string;
}

export const Education: React.FC<EducationProps> = ({ dateRange, course, institution }) => {
    return (
        <div className="rounded-lg border border-purplePrimary/30 bg-customBlueSecondary p-6 transition-colors duration-300 hover:border-purplePrimary/60 hover:bg-purplePrimary/5 group">
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                    <p className="text-purplePrimary text-xs font-semibold uppercase tracking-wider">
                        {dateRange}
                    </p>
                    <h3 className="text-white font-bold text-lg group-hover:text-purplePrimary transition-colors duration-300">
                        {course}
                    </h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                        {institution}
                    </p>
                </div>
                <div className="w-2 h-2 rounded-full bg-purplePrimary mt-2 shrink-0" />
            </div>
        </div>
    );
};
