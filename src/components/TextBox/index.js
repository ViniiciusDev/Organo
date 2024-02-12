import "./TextBox.css"

const TextBox = (props) => {

    const onWritter = (event) => {
        props.onChanged(event.target.value)
    }

    return(
        <div className="text-box">
            <label>{props.label}</label>
            <input 
                onChange={onWritter} 
                required={props.required} 
                placeholder={props.placeholder}
                value={props.value}    
            ></input>
        </div>
    );
}

export default TextBox