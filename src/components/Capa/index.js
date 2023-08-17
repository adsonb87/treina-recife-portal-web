import { useContext } from "react";
import { UsuarioContext } from "../../contexts/UsuarioContext";

const Capa = () => {

 
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Bem vindo  ao Treina</h1>
            <p className="lead text-body-secondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don’t simply skip over it entirely.
            </p>
            <p>
              <a href="/" className="btn btn-primary my-2">
                Veja nossos cursos!
              </a>
              <a href="/" className="btn btn-secondary my-2">
                Marque uma aula gratis!
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Capa;
