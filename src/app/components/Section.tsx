export default function Section(props) {
    return (
        <section className={`py-12`}>
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-blue capitalize text-center">
                    { props.heading }
                    <hr className="w-48 h-2 bg-blue mx-auto mt-5" />
                </h1>
                {props.children}
            </div>
        </section>
    )
}