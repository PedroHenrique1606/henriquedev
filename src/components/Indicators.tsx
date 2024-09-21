interface IndicatorsProps {
    numberIndicator: string;
    titleIndicator: string;
    conectiveIndicator: string;
    predicateIndicator: string;
}

export const Indicators: React.FC<IndicatorsProps> = ({ numberIndicator, titleIndicator, conectiveIndicator, predicateIndicator }) => {
    return (
        <div className='flex gap-2 items-center justify-center text-white ' >
            <p className='font-bold text-4xl' >
                {numberIndicator} +
            </p>
            < p className='text-slate-400 leading-6 text-sm' >
                {titleIndicator} < br />
                {conectiveIndicator} < br />
                {predicateIndicator}
            </p>
        </div>
    )
}