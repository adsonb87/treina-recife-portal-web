import { useEffect, useState } from "react";
import Cabecalho from "../../../components/Cabecalho";
import Footer from "../../../components/Footer";
import { atualizarUsuario, cadastrarNovoUsuario, obterUsuarioPeloId } from "../../../services/api";
import { useNavigate, useParams } from "react-router-dom";

function Usuario() {

    const { id } = useParams();

    const [idUsuario] = useState(6);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [genero, setGenero] = useState("");
    const [idade, setIdade] = useState(0);

    useEffect(() => {
        if(id){
            obterUsuarioPeloId(
                id, 
                setNome,
                setSobrenome,
                setEmail,
                setSenha,
                setGenero,
                setIdade);
        }
        
    }, [id]);

    const navigate = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(id){
            await atualizarUsuario(
                {
                    id,
                    nome,
                    sobrenome,
                    email,
                    senha,
                    genero,
                    idade,
                },
                 navigate);

        }else{
            await cadastrarNovoUsuario(
                {
                    id: idUsuario,
                    nome,
                    sobrenome,
                    email,
                    senha,
                    genero,
                    idade,
                },
                 navigate);
        }

       
    }

    return (
        <>
            <Cabecalho />
            <div className="container">
                <div className="col-md-7 col-lg-8">
                    <h4 className="my-3">Cadastro de Usuário</h4>
                    <form className="needs-validation" onSubmit={handleFormSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="nome" className="form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    placeholder="Nome"
                                    defaultValue={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="sobrenome" className="form-label">
                                    Sobrenome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="sobrenome"
                                    placeholder="Sobrenome"
                                    defaultValue={sobrenome}
                                    onChange={(e) => setSobrenome(e.target.value)}
                                />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="senha" className="form-label">
                                    Senha
                                </label>
                                <input type="password" 
                                       className="form-control" 
                                       id="senha"
                                       defaultValue={senha} 
                                       onChange={(e) => setSenha(e.target.value)}
                                />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="email" className="form-label">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="usuário@exemplo.com"
                                    defaultValue={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="col-sm-6 mb-3">
                                <label htmlFor="idade" className="form-label">
                                    Idade:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="idade"
                                    defaultValue={idade}
                                    required
                                    onChange={(event) => setIdade(event.target.value)}
                                />
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="genero" className="form-label">
                                    Gênero
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="genero"
                                    placeholder="M/F"
                                    defaultValue={genero}
                                    onChange={(e) => setGenero(e.target.value)}
                                />
                            </div>

                            <div className="d-flex col-12 mb-3">
                                <button className="btn btn-primary" type="submit">
                                    Salvar
                                </button>
                                <button
                                    className="btn btn-outline-primary border ms-2"
                                    type="submit"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Usuario;
