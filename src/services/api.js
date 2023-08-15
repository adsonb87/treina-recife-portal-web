import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
})

export async function listarUsuarios(setUsuarios) {
    await api.get("/usuarios").then(
        (response) => {
            setUsuarios(response.data)
        }
    ).catch(() => alert("Erro de rede !"));
}

export async function deletarUsuario(indice){
    await api.delete(`/usuarios/${indice}`).catch((error) => console.error(error));
}
