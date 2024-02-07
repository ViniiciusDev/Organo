import Button from "../Button";
import DropDown from "../DropDown";
import TextBox from "../TextBox";
import "./Form.css";

const Form = () => {

    const team = [
        "Programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const onSave = (event) => {
        event.preventDefault();
    }

    return (
        <section className="form-container">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextBox required={true} label="Nome" placeholder="Digite seu nome" />
                <TextBox required={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextBox required={true} label="Imagem" placeholder="Informe o endereço da imagem" />
                <DropDown required={true} label="Time" itens={team}/>
                <Button>Create Card</Button>
            </form>
        </section>
    );
};

export default Form;
