import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Curso from "../pages/Curso";
import CarrinhoDeCompras from "../pages/CarrinhoDeCompras";
import Usuarios from "../pages/Usuarios";
import Usuario from "../pages/Usuarios/Usuario";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function TreinaRecifeRoutes() {
    const { usuarioLogado } = useContext(GlobalContext);

    const redirecionar = (element) => {
        if(!usuarioLogado){
            return <Login />
        }

        return element;
    }
    
    return(
    <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/cursos" element={redirecionar(<Home />)} />
          <Route path="/cursos/:id" element={redirecionar(<Curso />)} />
          <Route path="/carrinho" element={redirecionar(<CarrinhoDeCompras />)} />
          <Route path="/usuarios" element={redirecionar(<Usuarios />)}/>
          <Route path="/usuario/novo" element={redirecionar(<Usuario />)}/>
          <Route path="/usuario/:id" element={redirecionar(<Usuario />)}/>
        </Routes>
    </BrowserRouter>
    )
}

export default TreinaRecifeRoutes;