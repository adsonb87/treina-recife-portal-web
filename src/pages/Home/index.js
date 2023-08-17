import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Capa from "../../components/Capa"
import { useContext, useEffect, useState } from "react";
import { LISTA_CURSOS } from "../../mocks/cursos";
import { useCursos } from "../../hooks/useCursos";

function Home() {
    const [cursos, setCursos] = useCursos();
    const [busca, setBusca] = useState(""); 

    useEffect(() => {
        const cursosFiltrados = LISTA_CURSOS.filter((curso) => curso.nome.toLowerCase().includes(busca.toLowerCase()));

        setCursos(cursosFiltrados);

    }, [busca]);

    return (
        <>
            <Cabecalho />
            <Capa />
            <div className="album py-5 bg-body-tertiary">
                <div className="container">

                    <input 
                        type="text"
                        className="form-control mb-3"
                        placeholder="Filtrar curso pelo nome..."
                        onChange={(event) => setBusca(event.target.value)}
                    />


                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {
                            cursos.map((curso, indice) => {
                                return (
                                    <Card 
                                        curso={curso}
                                        key={indice}
                                    />
                                );
                            })
                        }                        
                    </div>
                </div>
            </div>
            <Footer />  
        </>
    );
}

export default Home;