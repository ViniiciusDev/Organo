import Banner from "./components/Banner";
import TextBox from "./components/TextBox";


function App() {
  return (
    <div className="App">
      <Banner />
      <TextBox label="Nome" placeholder="Digite seu nome"/>
      <TextBox label="Cargo" placeholder="Digite seu cargo"/>
      <TextBox label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>
  );
}

export default App;
