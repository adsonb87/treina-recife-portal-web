import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import { useCursos } from "../../hooks/useCursos";

import { LISTA_CURSOS } from "../../mocks/cursos";
import CardDetail from "../../components/CardDetail";

const Curso = () => {
    
    const [curso, setCurso] = useCursos();
    const [busca, setBusca] = useState(0);

    useEffect(() => {
        const cursoFiltrado = LISTA_CURSOS.filter((curso) => curso.id === parseInt(busca));
        
        setCurso(cursoFiltrado);
        
    }, [busca]);

    return (
        <>
            <Cabecalho />
            <div className="col-md-5 container">
                <input 
                    type="number"
                    className="form-control mb-3 mt-3"
                    placeholder="Filtrar curso pelo id..."
                    min={0}
                    max={9}
                    onChange={(event) => setBusca(event.target.value)}
                />
                    {
                        curso.map((c, i) => {
                            return(
                                <CardDetail 
                                    key={i}
                                    linkImg={c.imagem}
                                    titulo={c.nome}
                                    descricao={c.descricao}
                                    cargaHoraria={c.cargaHoraria}
                                    preco={c.preco}
                                    nivel={c.nivel}
                                    professor={c.professor}
                                    ementa={c.ementa}
                                />
                            );
                        })
                    }
            </div>
            <Footer />
        </>
    );
}
    

export default Curso;