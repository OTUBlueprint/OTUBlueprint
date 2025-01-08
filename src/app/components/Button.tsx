export default function Button(props) {
    const background = props.background || 'blue';
    const colour = props.colour || 'white';

    return (
        <button className={`bg-${background} text-${colour} rounded-xl p-3`}>
            { props.children }
        </button>
    )
}