import "./Card.css"

const Card = ({name, rule, image}) => {

    return(
        <div className="Card">
            <div className="Card__header">
                <img src={image} alt={name}/>
            </div>
            <div className="Card__footer">
                <h4>{name}</h4>
                <h5>{rule}</h5>
            </div>
        </div>
    )
}



export default Card