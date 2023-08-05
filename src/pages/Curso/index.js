import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import { useCursos } from "../../hooks/useCursos";
import Card from "../../components/Card";
import { LISTA_CURSOS } from "../../mocks/cursos";

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
                        max={6}
                        onChange={(event) => setBusca(event.target.value)}
                    />

                    {
                        curso.map((c, i) => {
                            return(
                                <Card 
                                    titulo={c.nome}
                                    cargaHoraria={c.cargaHoraria}
                                    preco={c.preco}
                                    key={i}/>
                            );
                        })
                    }
                </div>
            <Footer />
        </>
    );
}
    

export default Curso;