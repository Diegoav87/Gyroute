import Category from './Category/Category.js';

const Categories = (props) => {


    return (
        <div className="d-flex">
            <Category text="Chest" changeCategory={props.changeCategory} />
            <Category text="Arms" changeCategory={props.changeCategory} />
            <Category text="Back" changeCategory={props.changeCategory} />
            <Category text="Shoulders" changeCategory={props.changeCategory} />
            <Category text="Abs" changeCategory={props.changeCategory} />
            <Category text="Legs" changeCategory={props.changeCategory} />
        </div>
    )
}

export default Categories;