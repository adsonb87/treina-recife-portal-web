import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Curso from "./pages/Curso";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/cursos" element={<Home />} />
        <Route path="/cursos/:id" element={<Curso />} />
        <Route path="/carrinho" element={<CarrinhoDeCompras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
