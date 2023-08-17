import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsusarioProvider = ({ children }) => {
    
    const [usuarioLogado, setUsuarioLogado] = useState([]);

    const adicionarUsuarioLogado = (usuario) => {        
        //setUsuarioLogado(usuario);
    }

    const removerUsuarioLogado = () => {
        /*usuarioLogado = [];
        setUsuarioLogado(usuarioLogado);*/
    }

    return(
        <UsuarioContext.Provider value={{ usuarioLogado, setUsuarioLogado, adicionarUsuarioLogado, removerUsuarioLogado, usuarioLogado}}>
            {children}
        </UsuarioContext.Provider>
    )
}