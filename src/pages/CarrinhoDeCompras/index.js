import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";

function CarrinhoDeCompras() {
  return (
    <>
      <Cabecalho />

      <div className="container col-md-8 col-lg-6 p-5">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-body-primary">Carrinho de Compras</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>

        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Lógica de Programação com Python</h6>
              <small className="text-body-secondary">Nível: Iniciante</small>
            </div>
            <span className="text-body-secondary">R$ 380</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Java Web com Spring Boot</h6>
              <small className="text-body-secondary">
                Nível: Intermediário
              </small>
            </div>
            <span className="text-body-secondary">R$ 750</span>
          </li>
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">Java Experience</h6>
              <small className="text-body-secondary">Nível: Avançado</small>
            </div>
            <span className="text-body-secondary">R$ 450</span>
          </li>
          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Código Promocional</h6>
              <small>ABC-123-DEF-456-00</small>
            </div>
            <span className="text-success">R$ 100</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <strong>Total:</strong>
            <strong>R$ 1.480</strong>
          </li>
        </ul>

        <hr className="my-4" />

        <h4 className="mb-3">Forma de Pagamento</h4>

        <div className="my-3">
          <div className="form-check">
            <input
              id="cartaoCredito"
              name="metodoPagamento"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="cartaoCredito">
              Cartão de Crédito
            </label>
          </div>
          <div className="form-check">
            <input
              id="boletoBancario"
              name="metodoPagamento"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="boletoBancario">
              Boleto Bancário
            </label>
          </div>
          <div className="form-check">
            <input
              id="pix"
              name="metodoPagamento"
              type="radio"
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor="pix">
              PIX
            </label>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-md-12">
            <label htmlFor="cc-nome" className="form-label">
              Nome:
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-nome"
              placeholder=""
              required
            />
            <small className="text-body-secondary">
              Nome completo exibido no cartão
            </small>
          </div>

          <div className="col-md-6">
            <label htmlFor="cc-numero" className="form-label">
              Número do Cartão:
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-numero"
              placeholder=""
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-expira" className="form-label">
              Expira em:
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-expira"
              placeholder=""
              required
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-cvv" className="form-label">
              CVV:
            </label>
            <input
              type="text"
              className="form-control"
              id="cc-cvv"
              placeholder=""
              required
            />
          </div>
        </div>

        <hr className="my-4" />

        <button className="btn btn-primary btn-lg w-100" type="submit">
          Finalizar Compra
        </button>
      </div>

      <Footer />
    </>
  );
}

export default CarrinhoDeCompras;
