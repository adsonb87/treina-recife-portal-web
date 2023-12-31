import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

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
        <GlobalContext.Provider value={{ carrinho, setCarrinho, adicionarItem, removerItem }}>
            {children}
        </GlobalContext.Provider>
    )
}