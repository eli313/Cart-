import React , {useContext} from "react";
// styles
import styles from "./product.module.css";
import functions from "../helpers/functions"
import { Link } from "react-router-dom";

import trashIcon from "../assets/images/trash.svg"

// Context 
import { CartContext } from "../contexts/CartContextProvider";

export default function Products ({productData}) {
    const { state , dispatch } = useContext(CartContext)

    // To check if the item is in cart or not
    const isInCart = (state , id) => {
        const result = !!state.selectedItem.find(item => item.id === id);
        return result
    }
    // To check if the item is just one in the cart or more
    const quantityCounter = (state , id) => {
        const index = state.selectedItem.findIndex(item => item.id === id)
        // console.log(id);
        if (index === -1) {
            return false
        }
        else {
            return state.selectedItem[index].quantity
        }
    }

    return (
        <div>
            <div className={styles.productSingle}>
                    <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={productData.image} alt="somthing" />
                        <span className={styles.text}>{productData.discription}</span></div>
                      <p className={styles.title}>{functions(productData.title)}</p>
                      <span className={styles.price}>{productData.price}$</span>
                      <div>
                        {isInCart(state , productData.id) ? 
                        <button onClick={() => dispatch({type: "INCREASE_ITEM" , payload : productData})} >
                        +
                        </button> 
                        :
                        <button onClick={() => dispatch({type: "ADD_ITEM" , payload : productData})} >
                        Add to cart
                        </button>
                        }
                        {quantityCounter(state , productData.id) > 0 && <span>{quantityCounter(state , productData.id)}</span>}
                        {quantityCounter(state , productData.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

                        </button>}
                        {quantityCounter(state , productData.id) > 1 && <button onClick={() => dispatch({type : "DECREASE_ITEM" , payload : productData})} >-</button>}
                      </div>
                    </div>
            </div>
        </div>
    )
}