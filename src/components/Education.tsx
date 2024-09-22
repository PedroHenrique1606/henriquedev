import React from 'react';

interface EducationProps {
    dateRange: string;
    course: string;
    institution: string;
}

export const Education: React.FC<EducationProps> = ({ dateRange, course, institution }) => {
    return (
        <div className="bg-customBlueSecondary p-5 border-b-2 border-b-purplePrimary space-x-1 space-y-1 rounded-md w-full">
            <p className="text-white text-sm pl-1">
                {dateRange}
            </p>
            <p className="text-white">
                {course} -{' '}
                <span className="text-slate-300">
                    {institution}
                </span>
            </p>
        </div>
    );
};
