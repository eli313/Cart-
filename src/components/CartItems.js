import React , {useContext} from "react";

import { CartContext } from "../contexts/CartContextProvider";
import styles from "./CartItems.module.css"
import shortener from "../helpers/functions";

const CartItems = (props) => {
    const {dispatch} = useContext(CartContext)
    const {image , title , quantity , price} = props.data;
    return (
        <div className={styles.cartItem}>
            <div>
                <img src={image}  alt="product"/>
            </div>
            <div className={styles.details}>
                <span>
                    {shortener(title)}
                </span>
                <br/>
                <span>
                    {price}$
                </span>
            </div>
            <div className={styles.buttons}>
                <button onClick={() => dispatch({type: "INCREASE_ITEM" , payload : props.data})} >
                +
                </button> 
                {quantity === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : props.data})}>Delete</button>}
                <span>
                    {quantity}
                </span>
                {quantity > 1 && <button onClick={() => dispatch({type : "DECREASE_ITEM" , payload : props.data})} >-</button>}
            </div>
        </div>
    )
}

export default CartItems