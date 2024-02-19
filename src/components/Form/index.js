import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextBox from "../TextBox";
import "./Form.css";

const Form = (props) => {

    const [name, setName] = useState('')
    const [rule, setRule] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const onSave = (event) => {
        event.preventDefault();
        props.onWorkerRegister({
            name,
            rule,
            image,
            team
        })

        setName('')
        setRule('')
        setImage('')
        setTeam('')
        console.log('Form send =>', name, rule, image, team);
    }

    return (
        <section className="form-container">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextBox 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChanged={value => setName(value)}
                    />
                <TextBox 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={rule}
                    onChanged={value => setRule(value)}
                    />
                <TextBox   
                    required={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    value={image}
                    onChanged={value => setImage(value)}
                    />
                <DropDown 
                    required={true} 
                    label="Time" 
                    itens={props.teams}
                    value={team}
                    onChanged={value => setTeam(value)}
                    />
                <Button>Create Card</Button>
            </form>
        </section>
    );
};

export default Form;
