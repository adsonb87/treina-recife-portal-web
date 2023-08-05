const ListItem = ({nome, preco}) => {
    return (
        <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{nome}</h6>
            </div>
            <span class="text-body-secondary">R$ {preco}</span>
        </li>
    )
}

export default ListItem;