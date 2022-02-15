const Reducer = (state, {type, payload}) => {
  switch (type) {
    case 'SET_GOODS' :
      return {
        ...state,
        goods: payload || [],
        loading: false
      }
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex((orderItem) => orderItem.id === payload.id)
      // Adding if no elements in basket
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1
        }
        newOrder = [...state.order, newItem]
        // If there is an element in basket
      } else {
        newOrder = state.order.map((orderItem, index) => {
          // console.log('---setOrder2-->', order)
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1
            }
          } else {
            return orderItem;
          }
        })
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.name
      }
    }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: ''
      }
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter(el => el.id !== payload.id)
      }
    case 'TOGGLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow
      }
    case 'INC_QUANTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity
            }
          } else {
            return el;
          }
        })
      }
    case 'DEC_QUANTITY':
      return {
        ...state,
        order: state.order.map(el => {
          if (el.id === payload.id) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0
            }
          } else {
            return el;
          }
        })
      }
    default:
      return state;
  }
}

export {Reducer};