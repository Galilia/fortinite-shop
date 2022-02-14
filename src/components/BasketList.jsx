import {BasketItem} from "./BasketItem";

const BasketList = (props) => {
  const {order = [], handleBasketShow, removeFromBasket, incQuantity, decQuantity} = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0)

  return <ul className="collection basket-list">
    <li className="collection-item active red darken-4">Basket</li>
    {
      order.length ? order.map(item => (
        <BasketItem
          key={item.id}
          {...item}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )) : <li className='collection-item'> Basket is empty </li>
    }
    <li className="collection-item" active>Total cost: { totalPrice } $ <button className='secondary-content btn-small' onClick={() => removeFromBasket(props.id)}>Pay</button></li>
    <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
  </ul>
}

export {BasketList};