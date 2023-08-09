import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ curso, carrinho, setCarrinho }) {
  const [desabilitado, setDesabilitado] = useState(false);

  const navigate = useNavigate();

  const handleComprar = () => {
    setCarrinho([...carrinho, curso]);

    setDesabilitado(true);
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={curso.imagem} alt="Curso" width="100%" height="225" />

        <div className="card-body">
          <p className="card-text fw-bold">{curso.nome}</p>
          <p className="card-text">{curso.descricao}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-primary border"
                disabled={desabilitado}
                onClick={() => handleComprar}
              >
                Comprar
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary border"
                onClick={() => navigate(`/cursos/${curso.id}`)}
              >
                Ver Detalhes
              </button>
            </div>
            <strong className="text-body-primary">R$ {curso.preco}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;