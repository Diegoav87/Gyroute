import './Category.css';

const Category = (props) => {

    return (
        <div className="category">
            <a onClick={() => props.changeCategory(props.value)} href="!#" className="btn btn-primary">{props.text}</a>
        </div>
    )
}

export default Category;