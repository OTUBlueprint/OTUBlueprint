export default function Section(props) {

    return (
        <section className="relative py-12">
            <object className="absolute inset-0 -z-1 w-full h-full" type="image/svg+xml" data={`/assets/${props.background}`} />
            <div className="relative max-w-screen-lg mx-auto px-12 z-2 md:px-28 lg:px-40 2xl:px-0">
                <h1 className="mt-10 text-blue capitalize text-center">
                    { props.heading }
                    { props.heading ? <hr className="w-48 h-2 bg-blue mx-auto mt-3" /> : '' }
                </h1>
                {props.children}
            </div>
        </section>
    )
}