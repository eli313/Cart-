import React , {useContext} from "react";
import {CartContext} from "../contexts/CartContextProvider"

import CartItems from "./CartItems";

const ShopCart = () => {
    const {state , dispatch} = useContext(CartContext)

    return (
       <div>
         <div>
            {state.selectedItem.map(item => <CartItems key={item.id} data={item} />)}
        </div>        
       </div>
    )
}

export default ShopCart