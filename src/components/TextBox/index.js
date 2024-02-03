import "./TextBox.css"

const TextBox = (props) => {
    return(
        <div className="text-box">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    );
}

export default TextBox