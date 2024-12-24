export default function Button(props) {
    const background = props.background || 'bg-blue';
    const colour = props.colour || 'text-white';

    return (
        <button className={`border-white ${background} ${colour} hover:border-transparent hover:bg-sky-200
                            hover:text-blue-100 h-auto py-2.5 text-sm px-8 border-2 border-solid
                            rounded-full bg-transparent`}>
            { props.text }
        </button>
    )
}