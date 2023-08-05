import Footer from "../../components/Footer";
import logo from "../../assets/treina_recife_logo.png";
import { useEffect, useState } from "react";

function Login(){
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    useEffect(() => {
        console.log(email);
        console.log(senha);
    }, [email, senha]);

    return (
        <>
            <div className="col-md-5 container">
                <main className="form-signin w-100 m-auto">
                    <form>
                        <img className="mb-4 mt-3" src={logo} width="70" alt=""/>
                        <h1 className="h3 mb-3 fw-normal">Bem-vindo</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                    onChange={(e) => setEmail(e.target.value)}/>
                            <label for="floatingInput">E-mail</label>
                        </div>
                        <div className="form-floating my-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                    onChange={(e) => setSenha(e.target.value)}/>
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <div className="form-check text-start my-3">
                            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">Lembrar</label>
                        </div>
                        <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                    </form>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Login;