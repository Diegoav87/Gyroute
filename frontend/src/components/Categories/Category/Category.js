const Category = (props) => {

    return (
        <div>
            <a onClick={() => props.changeCategory(props.text)} href="!#" className="btn btn-primary">{props.text}</a>
        </div>
    )
}

export default Category;