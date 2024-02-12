import "./DropDown.css"

const DropDown = (props) => {
    return(
        <div className="drop-down">
            <label>{props.label}</label>
            <select
                onChange={event => props.onChanged(event.target.value)}
                value={props.value}
                required={props.required}
            >{props.itens.map(item => <option key={item}>{item}</option>)}</select>
        </div>
    );
}

export default DropDown