import logo from "../../assets/treina_recife_logo2.png"

function Cabecalho(){
    return (
           <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand" href="https://treinarecife.com.br/" target="_blank" rel="noreferrer">
                        <img src={logo} alt="Logo" width="150" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Cursos</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Professores</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Cabecalho;