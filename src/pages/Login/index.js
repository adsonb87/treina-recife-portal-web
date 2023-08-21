import logo from "../../assets/treina_recife_logo.png";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/api";
import { GlobalContext } from "../../contexts/GlobalContext";

function Login(){
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[erro, setErro] = useState("");

    const navigate = useNavigate();

    const { setUsuarioLogado } = useContext(GlobalContext);

    const handleLogin = (event) => {    
        event.preventDefault();

        if(!email || !senha){
            setErro("Campo Obrigatório!!");
  
            return;
          } else {

            login(
            {
                email,
                senha
            }, 
            navigate, setUsuarioLogado);

          }
          
    }

    return (
        <>
            <div className="col-md-5 container">
                <main className="form-signin w-100 m-auto">
                    <form onSubmit={handleLogin}>
                        <img className="mb-4 mt-3" src={logo} width="70" alt=""/>
                        <h1 className="h3 mb-3 fw-normal">Bem-vindo</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="nome@treinarecife.com.br"
                                    onChange={(e) => { 
                                        setErro("")
                                        setEmail(e.target.value)
                                    }}
                            />
                            <label htmlFor="floatingInput">E-mail</label>
                            {
                                !email && <small className="text-danger">{erro}</small>
                            }
                        </div>
                        <div className="form-floating my-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    onChange={(e) => { 
                                    setErro("")
                                    setSenha(e.target.value)
                                }}
                            />
                            <label htmlFor="floatingPassword">Senha</label>
                            {
                                !senha && <small className="text-danger">{erro}</small>
                            }
                        </div>
                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">Lembrar</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                        <p className="mt-5 mb-3 text-muted text-center">Treina Recife &copy; 2023</p>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Login;