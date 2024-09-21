interface TopicProps {
    title: string;
    titleabsolute: string;
    titledecoration: string;
}

export const Topic: React.FC<TopicProps> = ({ title, titleabsolute, titledecoration }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className='items-baseline'>
                <p className='text-gray-700 text-6xl font-semibold gap-2 flex flex-wrap'>{title}</p>
                <div className='flex items-center justify-center text-center'>
                    <p className='text-white text-4xl font-semibold gap-2 flex flex-wrap absolute'>
                        {titleabsolute}
                        <span className='text-white text-4xl font-semibold underline decoration-purplePrimary decoration-4'> {titledecoration}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}