import { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Footer from "../../components/Footer";
import { deletarUsuario, listarUsuarios } from "../../services/api";



function Usuarios() {

    const [usuarios, setUsuarios] = useState([]);

    async function handlerExcluir(id){
        await deletarUsuario(id);
        window.location.reload();
    }

    useEffect(() => {
        listarUsuarios(setUsuarios)
    }, [])

    return (
        <>
            <Cabecalho />
            <div className="container py-3">
                <h2>Usuários</h2>
                <div className="table-responsive small">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Idade</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuarios.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome} {usuario.sobrenome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.genero}</td>
                                        <td>{usuario.idade}</td>
                                        <td>
                                             <button className="btn btn-sm btn-primary" onClick={() => handlerExcluir(usuario.id)}> 
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={() => {}}> Novo Usuário </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Usuarios;