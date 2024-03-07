import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [cardItem, setCardItem] = useState(localStorage.getItem("CardItem") ? JSON.parse(localStorage.getItem("CardItem")) : [] )
    
    useEffect(() => {
        localStorage.setItem("CardItem",JSON.stringify(cardItem))
    },[cardItem])
  
    const AddBasket = (item) => {
        setCardItem((prevCart) => [
            ...prevCart,
            {
                ...item,
                quantity:item.quantity ? item.quantity:1       
            }
    ])
      }

    const removeBasket =(itemId) => {
        const filteredBasket = cardItem.filter((item) => item.id !==itemId)
        setCardItem(filteredBasket)
    }
    return(
        <CartContext.Provider value={{
            AddBasket,
            cardItem,
            setCardItem,
            removeBasket,
          
        }}>
            {children}
        </CartContext.Provider>
    
    )

}

export default CartProvider