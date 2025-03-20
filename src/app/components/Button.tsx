export default function Button(props) {
    const background = props.background || 'blue';
    const colour = props.colour || 'white';

    return (
        <button
            className={`
                bg-${background} 
                text-${colour} 
                rounded-xl 
                p-3 
                transition-all 
                duration-200 
                hover:bg-${background}-700 
                hover:shadow-lg 
                ${props.className}
            `}
        >
            {props.children}
        </button>
    );
}