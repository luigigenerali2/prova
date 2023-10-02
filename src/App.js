import GradeProdutos from "./componentes/GradeProdutos";
import BarraBusca from "./templates/BarraBusca";
import Cabecalho from "./templates/Cabecalho";
import TelaMostraCarrinho from "./templates/TelaMostraCarrinho"
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });  
  },[]);

  const [produtos, setProdutos] = useState([]);
  return (
    <div className="App">
      <Cabecalho/>
      <BarraBusca/>
      <GradeProdutos listaProdutos={produtos}/>
      <BrowserRouter>
        <Routes>
          <Route path="/carrinho" element={<TelaMostraCarrinho/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
