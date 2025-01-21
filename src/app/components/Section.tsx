export default function Section(props) {
    const background = `bg-${props.background}` || '';

    return (
        <section className={`py-12 ${background} bg-cover bg-no-repeat bg-center`}>
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-blue capitalize text-center">
                    { props.heading }
                    { props.heading ? <hr className="w-48 h-2 bg-blue mx-auto mt-5" /> : '' }
                </h1>
                {props.children}
            </div>
        </section>
    )
}