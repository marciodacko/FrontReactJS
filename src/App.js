import React, {Component} from "react";


import Rodape from "./componentes/Rodape";
import Cabecalho from "./componentes/Cabecalho";
import Banner from "./componentes/Banner";
import Servicos from "./componentes/Servicos";
import Planos from "./componentes/Planos";

class App extends Component {
  render(){
    return(
      <div className="App">
        <Cabecalho/>
        <Banner/>
        <Servicos/>
        <Planos/>
        <Rodape/>
      </div>
    );
  }
}

export default App;
