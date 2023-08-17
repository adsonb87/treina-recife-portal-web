import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Curso from "./pages/Curso";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";
import { GlobalProvider } from "./contexts/GlobalContext";
import Usuarios from "./pages/Usuarios";
import Usuario from "./pages/Usuarios/Usuario";


function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/cursos" element={<Home />} />
          <Route path="/cursos/:id" element={<Curso />} />
          <Route path="/carrinho" element={<CarrinhoDeCompras />} />
          <Route path="/usuarios" element={<Usuarios />}/>
          <Route path="/usuario/novo" element={<Usuario />}/>
          <Route path="/usuario/:id" element={<Usuario />}/>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
