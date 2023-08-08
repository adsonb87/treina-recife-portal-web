import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import { useState } from "react";
import { LISTA_CURSOS } from "../../mocks/cursos";
import { useParams } from "react-router-dom";

function Curso() {

  const { id } = useParams();

  const [curso] = useState(LISTA_CURSOS[id - 1]);

  return (
    <>
      <Cabecalho />

      <div className="bg-body-secondary p-5 mb-4">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{curso.nome}</h1>
          <p className="col-md-6 fs-4">{curso.descricao}</p>
          <p className="col-md-6 fs-5">
            <b>Nível: </b>
            {curso.nivel} - <b>Investimento: </b>R$ {curso.preco}
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Comprar
          </button>
        </div>
      </div>

      <div className="list-group p-5">
        <h3 className="fw-600">Ementa</h3>
        <ol>
          {curso.ementa.map((item, indice) => (
            <li key={indice}>{item}</li>
          ))}
        </ol>
      </div>

      <div className="bg-body-secondary p-5">
        <img
          className="mb-3"
          src={curso.professor.imagem}
          alt={curso.professor.nome}
          width="250px"
        />
        <h3 className="fw-600">Professor: {curso.professor.nome}</h3>
        <p className="col-md-8">{curso.professor.resumo}</p>
        <a
          className="btn btn-primary"
          href={curso.professor.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Ver Linkedin &raquo;
        </a>
      </div>

      <Footer />
    </>
  );
}

export default Curso;