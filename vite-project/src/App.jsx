import Header from "./Componentes/Header/Header";
import Myname from "./Componentes/Main/Main";
import Footer from "./Componentes/Footer/Footer";
import { useState } from "react";
import { AppContext } from "./Componentes/Context/AppContext";
import "./App.css";
import Background from "./Componentes/Background/Background";

function App() {
  const [x1, setX1] = useState("Start Value");
  const [c1, setC1] = useState("Rowan Networks");
  const [d1, setD1] = useState("Elena Deras");

  return (
    <>  
      <AppContext.Provider value={{ c1, setC1, d1, setD1}}>
          <Header setX1={setX1} d1 = {d1}/>
          <Background>
            <Myname x1={x1} />
            <Footer setX1={setX1} x1={x1} setD1 = {setD1}/>
          </Background>
        <h1> Esto esta en app {x1}</h1>
        <h1>{c1}</h1>
      </AppContext.Provider>
    </>
  );
}

export default App
