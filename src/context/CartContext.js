import React, {createContext, useState} from 'react'

export const CartContext = createContext()

const CartContextProvider = props => {
    const [cart, setCart] = useState({items:[], total:0})

    const cartRemove = (id, name) => {
        let deleteSingle = false;
        setCart({
          ...cart,
          items: cart.items.filter(item => {
            if(item.id == id && item.name == name) {
              if(deleteSingle) {
                return item
              }
              deleteSingle = true;
            }else{
              return item
            }
          })
        })
    }
    
    const cartAdd = part => {
      setCart(prevCart => ({
          ...prevCart,
          items:[...prevCart.items, part]
      }))
    }
    return(
        <CartContext.Provider value={{cart, setCart, cartRemove, cartAdd}}>
            {props.children}
        </CartContext.Provider>
    )
}