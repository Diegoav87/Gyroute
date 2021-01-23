import './Exercise.css';

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
            <li className="list-group-item border-bottom-grey">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{stripHTML(exerciseDesc)}<span>...</span></p>
                <p className="text-secondary">{props.category}</p>
            </li>
        </div>
    )
}

export default exercise;