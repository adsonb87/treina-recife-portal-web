import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarItem = (item) => {
        //Desestruturação da lista de carrinho de compras
        setCarrinho([...carrinho, item]);
    }

    const removerItem = (item) => {
        carrinho.map((item,indice) => {
            <></>
        })
    }

    return(
        <GlobalContext.Provider value={{ carrinho, setCarrinho, adicionarItem }}>
            {children}
        </GlobalContext.Provider>
    )
};