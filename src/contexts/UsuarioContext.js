import { createContext, useState } from "react";

export const UsuarioContext = createContext();

export const UsusarioProvider = ({ children }) => {
    
    //const [usuarioLogado, setUsuarioLogado] = useState([]);

    const adicionarUsuarioLogado = (usuario) => {
        
        //setUsuarioLogado([...usuarioLogado, usuario]);
    }

    const removerUsuarioLogado = () => {
        /*usuarioLogado = [];
        setUsuarioLogado(usuarioLogado);*/
    }

    return(
        <UsuarioContext.Provider value={{adicionarUsuarioLogado, removerUsuarioLogado}}>
            {children}
        </UsuarioContext.Provider>
    )
}