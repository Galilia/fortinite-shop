import {useEffect} from "react";

const Alert = (props) => {
  const {name = '', closeAlert} = props;

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