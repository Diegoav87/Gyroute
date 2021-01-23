import Category from './Category/Category.js';
import './Categories.css';

const Categories = (props) => {


    return (
        <div className="categories">
            <Category value="Chest" text="Chest" changeCategory={props.changeCategory} />
            <Category value="Arms" text="Arms" changeCategory={props.changeCategory} />
            <Category value="Back" text="Back" changeCategory={props.changeCategory} />
            <Category value="Shoulders" text="Shoulders" changeCategory={props.changeCategory} />
            <Category value="Abs" text="Abs" changeCategory={props.changeCategory} />
            <Category value="Legs" text="Legs" changeCategory={props.changeCategory} />
            <Category value="All" text="All" changeCategory={props.changeCategory} />
        </div>
    )
}

export default Categories;