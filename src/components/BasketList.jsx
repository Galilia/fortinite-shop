import {BasketItem} from "./BasketItem";
import {useContext} from "react";
import {ShopContext} from "../context/context";

const BasketList = () => {
  const {order = [], handleBasketShow, removeFromBasket} = useContext(ShopContext);

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
        />
      )) : <li className='collection-item'> Basket is empty </li>
    }
    <li className="collection-item" active>Total cost: { totalPrice } $ <button className='secondary-content btn-small'>Pay</button></li>
    <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
  </ul>
}

export {BasketList};