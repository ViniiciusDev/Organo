import "./Team.css"
import Card from "../Card"

const Team = (props) =>  {
    const cardColor = { backgroundColor: props.primaryColor }
    const borderColor = { borderColor: props.secondaryColor }

    return(
        (props.workers.length > 0) &&
        <section className="Team" style={cardColor}>
            <h3 style={borderColor}>{props.name}</h3>
            <div className="Workers">
                {props.workers.map(worker => 
                    <Card 
                        name={worker.name}
                        rule={worker.rule}
                        image={worker.image}
                />)}
            </div>
        </section>
    )
}
export default Team