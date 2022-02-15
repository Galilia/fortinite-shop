import {useContext, useEffect} from "react";
import {ShopContext} from "../context/context";

const Alert = () => {
  const {alertName: name = '', closeAlert} = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    }
  }, [name])

  return <div className="toast-container">
    <div className="toast">
      {name} added to basket
    </div>
  </div>
}

export {Alert};