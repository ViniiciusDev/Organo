import "./DropDown.css"

const DropDown = (props) => {
    return(
        <div className="drop-down">
            <label>{props.label}</label>
            <select>
                {props.itens.map( item => <option>{item}</option>)}
            </select>
        </div>
    );
}

export default DropDown