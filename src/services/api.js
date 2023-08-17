import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
})

export async function listarUsuarios(setUsuarios) {
    await api
    .get("/usuarios").then(
        (response) => {
            setUsuarios(response.data);
        }
    ).catch(() => alert("Erro de rede !"));
}

export async function deletarUsuario(indice){
    await api.delete(`/usuarios/${indice}`).catch((error) => console.error(error));
}

export async function cadastrarNovoUsuario(usuario, navigate){
    await api
    .post("/usuarios", usuario)
    .then(() => {
            navigate("/usuarios");
        }
    ).catch(() => alert("Erro de rede !"));
}

export async function obterUsuarioPeloId(idUsuario, 
                                         setNome,
                                         setSobrenome,
                                         setEmail,
                                         setSenha,
                                         setGenero,
                                         setIdade){
    await api
    .get(`/usuarios/${idUsuario}`)
    .then((response) => {
            setNome(response.data.nome);
            setSobrenome(response.data.sobrenome);
            setEmail(response.data.email);
            setSenha(response.data.senha);
            setGenero(response.data.genero);
            setIdade(response.data.idade);
        }
    ).catch(() => alert("Erro de rede !"));
}

export async function atualizarUsuario(usuario, navigate){
    await api
    .put(`/usuarios/${usuario.id}`, usuario)
    .then(() => {
            navigate("/usuarios");
        }
    ).catch(() => alert("Erro de rede !"));
}

export async function login(usuario, navigate){
    const response = await api.get("/usuarios");

    let valid = false;
    
    response.data.map((user) => {
        if(user.email === usuario.email && user.senha === usuario.senha){
            valid = true;
            navigate("/cursos");
        }
    })

    if(!valid) {
        alert("credenciais inválidas");
    }
}

/**
 * TODO:
 * Criar tela de usuario (cadastro e edição)
 * criar as funções de cadastrar e atualizar
 * criar uma funcao de login
 * ao fazer login, salvar o usuario logado em um estado global usuarioLogado
 * armazenamento local
 */