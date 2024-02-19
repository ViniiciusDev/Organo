import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

function App() {

  const teams = [
    {
      name: "Programação",
      primaryColor: "#D9F7E9",
      secondaryColor: "#57C278",
    },
    {
      name: "Front-End",
      primaryColor: "#E8F8FF",
      secondaryColor: "#82CFFA",
    },
    {
      name: "Data Science",
      primaryColor: "#F0F8E2",
      secondaryColor: "#A6D157",
    },
    {
      name: "Devops",
      primaryColor: "#FDE7E8",
      secondaryColor: "#E06B69",
    },
    {
      name: "UX e Design",
      primaryColor: "#FAE9F5",
      secondaryColor: "#DB6EBF",
    },
    {
      name: "Mobile",
      primaryColor: "#FFF5D9",
      secondaryColor: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FFEEDF",
      secondaryColor: "#FF8A29",
    },
  ];

  const [workers, setWorkers] = useState([]);

  const onWorkerAdd = (worker) => {
    console.log(worker);
    setWorkers([...workers, worker]);
  };



  return (
    <div className="App">
      <Banner />
      <Form
        onWorkerRegister={(worker) => onWorkerAdd(worker)}
        teams={teams.map((team) => team.name)}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          workers={workers.filter(worker => worker.team === team.name)}

        />
      ))}
    </div>
  );
}

export default App;
