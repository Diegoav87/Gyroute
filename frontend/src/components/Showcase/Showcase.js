import './Showcase.css';

const Showcase = (props) => {
    const divStyle = {
        backgroundImage: `url(${props.imgUrl})`,
        width: "100%",
        height: "400px",
        backgroundSize: "cover",
        paddingTop: "100px", 
        position: "relative",
    }

    return (
        <div style={divStyle}>
            <div className="overlay"></div>
            <div className="showcase-title">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default Showcase;