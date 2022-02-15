import {useContext} from "react";
import {ShopContext} from "../context/context";

function GoodsItem(props) {
  const {id, name, description, price, full_background} = props;

  const {addToBasket} = useContext(ShopContext);

  return <div className="card">
    <div className="card-image">
      <img src={full_background} alt={name}/>
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      {description}
    </div>
    <div className="card-action">
      <button onClick={() => addToBasket({id, name, price})} className='btn red darken-4'>Buy</button>
      <span className='right' style={{fontSize: '1.8rem'}}>{price} $</span>
    </div>
  </div>

}

export {GoodsItem}