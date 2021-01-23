const exercise = (props) => {
    const stripHTML = (str) => {
        return str.replace(/<[^>]*>/g, '');
    }

    const truncateString = (str, limit) => {
        const content = str.split(' ').slice(0, limit);
        return content.join(' ');
    }

    let exerciseDesc = props.description;

    if (exerciseDesc.length > 100) {
        exerciseDesc = truncateString(exerciseDesc, 15);
    }

    return (
        <div>
            <h3>{props.name}</h3>
            <p>{stripHTML(exerciseDesc)}<span>...</span></p>
            <p>{props.category}</p>
        </div>
    )
}

export default exercise;