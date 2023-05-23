import React , {useContext} from "react";
// styles
import styles from "./product.module.css";
import functions from "../helpers/functions"
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
                        <img src={productData.image} alt="something" />
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
                        {quantityCounter(state , productData.id) > 0 && <button>{quantityCounter(state , productData.id)}</button>}
                        {quantityCounter(state , productData.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}>
                            Remove
                        </button>}
                        {quantityCounter(state , productData.id) > 1 && <button onClick={() => dispatch({type : "DECREASE_ITEM" , payload : productData})} >-</button>}
                      </div>
                    </div>
            </div>
        </div>
    )
}