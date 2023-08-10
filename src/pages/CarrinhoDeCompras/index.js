import { useContext, useEffect } from "react";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import { GlobalContext } from "../../contexts/GlobalContext";
import { CalcularTotal } from "../utils/carrinho";
import { AiFillDelete } from "react-icons/ai";

function CarrinhoDeCompras() {

  const { carrinho, removerItem } = useContext(GlobalContext);

  const [total, desconto] = CalcularTotal(carrinho);

  return (
    <>
      <Cabecalho />

      <div className="container col-md-8 col-lg-6 p-5">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-body-primary">Carrinho de Compras</span>
          <span className="badge bg-primary rounded-pill">{carrinho.length}</span>
        </h4>
        <ul className="list-group mb-3">
          {
            carrinho.map((item, indice) => (
              <li className="list-group-item d-flex justify-content-between lh-sm" key={indice}>
                <div>
                  <div className="d-flex align-items-center">
                    <h6 className="my-0">{item.nome}</h6>
                    <button className="btn ms-2" onClick={() => removerItem(indice)}> 
                      <AiFillDelete color="#001681" />
                    </button>              
                  </div>
                  <small className="text-body-secondary">Nível: {item.nivel}</small>
                </div>
                <span className="text-body-secondary">R$ {item.preco}</span>
              </li>
            ))
          }

          {carrinho.length >= 3 && (
            <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
              <div className="text-success">
                <h6 className="my-0">Código Promocional</h6>
                <small>ABC-123-DEF-456-00</small>
              </div>
              <span className="text-success">R$ {desconto}</span>
            </li>
          )}

          <li className="list-group-item d-flex justify-content-between">
            <strong>Total:</strong>
            <strong>R$ {total}</strong>
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
