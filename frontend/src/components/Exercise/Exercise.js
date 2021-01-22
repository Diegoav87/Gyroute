const exercise = (props) => {
    const stripHTML = (str) => {
        return str.replace(/<[^>]*>/g, '');
    }

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{stripHTML(props.description)}</p>
            <p>{props.category}</p>
        </div>
    )
}

export default exercise;