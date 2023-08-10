import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Curso from "./pages/Curso";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/cursos" element={<Home />} />
          <Route path="/cursos/:id" element={<Curso />} />
          <Route path="/carrinho" element={<CarrinhoDeCompras />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
