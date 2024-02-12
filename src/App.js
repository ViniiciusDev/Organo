import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";



function App() {

  const [workers, setWorkers] = useState([])

  const onWorkerAdd = (worker) => {
    console.log(worker)
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        onWorkerRegister={worker => onWorkerAdd(worker)}
      />
    </div>
  );
}

export default App;
