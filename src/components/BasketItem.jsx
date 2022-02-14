const BasketItem = (props) => {
  const {id, name, price, quantity, removeFromBasket, incQuantity, decQuantity} = props;

    return <li className='collection-item'>
        {name} <i className="material-icons basket-add" onClick={() => incQuantity(id)}>add</i> x{quantity}{' '}<i className="material-icons basket-remove" onClick={() => decQuantity(id)}>remove</i> = {price*quantity} $
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
}

export {BasketItem};