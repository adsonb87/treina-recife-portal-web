import logo from "../../assets/treina_recife_logo2.png";
import { Link } from "react-router-dom"

function Cabecalho(){
    return (
           <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid mx-5">
                    <Link className="navbar-brand" to="/cursos" rel="noreferrer">
                        <img src={logo} alt="Logo" width="150" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/usuarios">
                               Usuários
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/carrinho">
                                Ver Carrinho
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Cabecalho;