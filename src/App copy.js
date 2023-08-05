import "./App.css";
import Cabecalho from "./components/Cabecalho";
import Footer from "./components/Footer";
import Capa from "./components/Capa";
import Card from "./components/Card";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [total, setTotal] = useState(0);
  const [lista, setLista] = useState([]);

  return (
    <>
      <Cabecalho />
      <Capa />
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Card titulo={"Lógica de programação com Python"} cargaHoraria={48} total={total} setTotal={setTotal} preco={100} lista={lista} setLista={setLista}/>
            <Card titulo={"Java Wev Spring Boot"} cargaHoraria={48} total={total} setTotal={setTotal} preco={200} lista={lista} setLista={setLista}/>
            <Card titulo={"Java Experience"} cargaHoraria={30} total={total} setTotal={setTotal} preco={300} lista={lista} setLista={setLista}/>
            <Card titulo={"Frontend"} cargaHoraria={30} total={total} setTotal={setTotal} preco={300} lista={lista} setLista={setLista}/>
            <Card titulo={"React JS"} cargaHoraria={30} total={total} setTotal={setTotal} preco={300} lista={lista} setLista={setLista}/>
            <Card titulo={"React Experience"} cargaHoraria={30} total={total} setTotal={setTotal} preco={400} lista={lista} setLista={setLista}/>
          </div>
        </div>
      </div>     
      <div className="container mt-3">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
           <span className="text-primary">Carrinho de Compras</span>
         </h4>
          <ul className="list-group mb-3">
            {
              lista.map((elementoDaLista, indice) => (
                <ListItem nome={elementoDaLista.nome} preco={elementoDaLista.preco} key={indice}/>
              ))
            }
            <li className="list-group-item d-flex justify-content-between">
             <span>Total (R$)</span>
             <strong>{total}</strong>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
