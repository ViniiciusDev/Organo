import TextBox from "../TextBox";
import "./Form.css";

const Form = () => {
    return (
        <section className="form-container">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextBox label="Nome" placeholder="Digite seu nome" />
                <TextBox label="Cargo" placeholder="Digite seu cargo" />
                <TextBox label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    );
};

export default Form;
