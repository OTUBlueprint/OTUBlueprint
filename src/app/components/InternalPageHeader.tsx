export default function InternalPageHeader(props) {
    return (
        <section className={`flex ${props.align === 'left' ? 'flex-row' : 'flex-row-reverse'} min-h-[calc(30vw)]`}>
            <div className="w-full md:w-1/2 bg-blue flex flex-col justify-center items-center p-6 md:px-12 md:py-0">
                <p className="text-white text-2xl md:text-4xl mb-2 md:mb-10">
                    { props.title }
                </p>
                <p className="text-white md:text-lg">{ props.children }</p>
            </div>
            <div className="w-full md:w-1/2 flex flex-row justify-center items-center">
                <div className="flex w-auto h-auto">
                    <img src={`${props.imageSrc}`} alt={props.imageAlt} className="w-full md:w-auto" />
                </div>
            </div>
        </section>
    )
}
