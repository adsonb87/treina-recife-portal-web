export function CalcularTotal(carrinho){
    let total = 0;
    let desconto = 0;
    
    for (let i = 0; i < carrinho.length; i++){
        total += carrinho[i].preco;
    }

    if(carrinho.length >= 3){
       desconto = total * 0.10;
       total -= desconto;
    }

    return [total, desconto];
}