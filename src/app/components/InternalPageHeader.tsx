export default function InternalPageHeader(props) {
    return (
        <section className={`flex flex-col-reverse h-dvh md:flex-row md:h-[calc(32rem)] lg:min-h-[calc(30vw)] ${props.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            <div className="w-full h-full bg-blue flex flex-col justify-center items-center p-6 md:w-1/2 md:h-auto md:px-12 md:py-0">
                <p className="text-white text-2xl md:text-4xl mb-2 md:mb-10">
                    { props.title }
                </p>
                { props.children }
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center py-32 px-12 md:w-1/2 md:h-auto">
                <div className="w-auto h-auto">
                    <img src={`/assets/${props.imageSrc}`} alt={props.imageAlt} />
                </div>
            </div>
        </section>
    )
}
