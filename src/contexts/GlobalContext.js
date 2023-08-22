import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const [usuarioLogado, setUsuarioLogado] = useState(obterUsuarioEmCache);

    const adicionarItem = (item) => {
        //Desestruturação da lista de carrinho de compras
        setCarrinho([...carrinho, item]);
    }

    const removerItem = (indice) => {
        const listItens = [...carrinho];
        listItens.splice(indice, 1);
        setCarrinho(listItens);
    }

    return(
        <GlobalContext.Provider value={{ carrinho, setCarrinho, adicionarItem, removerItem, usuarioLogado, setUsuarioLogado }}>
            {children}
        </GlobalContext.Provider>
    )
};

function obterUsuarioEmCache(){
    const usuarioSession = sessionStorage.getItem("usuarioLogado");
    const usuarioLocal = localStorage.getItem("usuarioLogado");

    if( usuarioSession ){
        return JSON.parse(usuarioSession);
    }else if( usuarioLocal ){
        return JSON.parse(usuarioLocal);
    }

    return false;
}