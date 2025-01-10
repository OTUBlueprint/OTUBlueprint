export default function InternalPageHeader(props) {
    return (
        <section className={`flex ${props.align === 'left' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className="w-1/2 bg-blue flex flex-col justify-center items-center py-32 px-12">
                <h1 className="text-white">
                    { props.title }
                </h1>
                <p className="text-white">{ props.children }</p>
            </div>
            <div className="w-1/2 flex flex-row justify-center items-center py-32 px-12">
                <div className="w-auto h-auto">
                    <img src={`/assets/${props.imageSrc}`} alt={props.imageAlt} />
                </div>
            </div>
        </section>
    )
}