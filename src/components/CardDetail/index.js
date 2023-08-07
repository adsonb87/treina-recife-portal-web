import { useState } from "react";

function CardDetail({titulo, descricao, cargaHoraria, preco, linkImg, ementa, professor, nivel}){
    
    const [e] = useState(ementa)
    
    return(
        <>
             <div className="card">
                 <img
                    src= {linkImg}
                    alt="" width="100%" height="280" 
                />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descricao}</p>
                        <p className="card-text">{cargaHoraria} Hrs</p>
                        <p className="card-text">R$ {preco}</p>
                        <p className="card-text">Nível: {nivel}</p>
                        <p className="card-text">Professor: {professor.nome}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li class="list-group-item">{ementa}</li>
                    </ul>
            </div>
        </>
    )
}

export default CardDetail;