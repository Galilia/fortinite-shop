import {useEffect, useContext} from "react";
import {API_KEY, API_URL} from "../config";
import {Preloader} from "./Preloader";
import {GoodsList} from "./GoodsList";
import {Cart} from "./Cart";
import {BasketList} from "./BasketList";
import {Alert} from "./Alert";
import {ShopContext} from "../context/context";


function Shop() {
  const { loading, setGoods, isBasketShow, alertName } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        'Authorization': API_KEY,
      },
    }).then(response => response.json())
      .then((data) => {
        setGoods(data.featured);
      }).catch(e=>alert(e));;
  }, []);

  return <main className="container content">
    <Cart/>
    { loading ? <Preloader /> : <GoodsList /> }
    { isBasketShow && <BasketList/> }
    { alertName && <Alert /> }
  </main>
}

export {Shop};