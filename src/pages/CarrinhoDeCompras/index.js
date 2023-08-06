import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import ListItem from "../../components/ListItem";
import { useCursos } from "../../hooks/useCursos";

const CarrinhoDeCompras = () => {

    const [cursos] = useCursos();
    const [total, setTotal] = useState(0);
   
    useEffect(() => {
        setTotal(cursos.reduce((acc, {preco}) => acc + preco, 0));
    }, [total]);

   
    return (
        <>
            <Cabecalho />
            <div className="container mt-3">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Carrinho de Compras</span>
                    </h4>
                     <ul className="list-group mb-3">
                        {
                            cursos.map((curso, indice) => (
                                <ListItem 
                                    nome={curso.nome} 
                                    preco={curso.preco} 
                                    key={indice}
                                />
                            ))
                        }
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (R$)</span>
                            <strong>{total}</strong>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CarrinhoDeCompras;