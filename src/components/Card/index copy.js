const Card = ({ titulo, cargaHoraria, total, setTotal, preco, setLista, lista }) => {

  const atualizarTotal = () => {
    setTotal(total + preco)
    //...lista, é a desestruturação da lista
    setLista([...lista, { nome: titulo, preco: preco }])
  }

  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em"> Thumbnail </text>
        </svg>
        <div className="card-body">
          <p className="card-text">{titulo}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary"> Detalhes </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={atualizarTotal}
              >
                Comprar
              </button>
            </div>
            <small className="text-body-secondary">{cargaHoraria} Hrs</small>
            <small className="text-body-secondary">R$ {preco}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
