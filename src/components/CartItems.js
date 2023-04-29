import React , {useContext , useEffect , useState} from "react";
import axios from "axios";

import { CartContext } from "../contexts/CartContextProvider";

const CartItems = (props) => {
    const id = props.data.id
    const BASE_URL = "https://fakestoreapi.com"
    const [product , setProduct] = useState({})
    useEffect(
        () => {
            let data = {}
            setProduct(axios.get(`https://fakestoreapi.com/products/${id}`).then(res => data = res.data)
            )
        }
    , [])
    const {state , dispatch} = useContext(CartContext)
    const {image , title , quantity , price} = props.data
    return (
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <span>
                    {title}
                </span>
                <span>
                    {quantity}
                </span>
                <br/>
                <span>
                    {price}
                </span>
            </div>
            <div>
            <button onClick={() => dispatch({type: "INCREASE_ITEM" , payload : props.data})} >
            +
            </button> 
            {quantity === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : props.data})}>Delete</button>}
            {quantity > 1 && <button onClick={() => dispatch({type : "DECREASE_ITEM" , payload : props.data})} >-</button>}
            </div>
        </div>
    )
}

export default CartItems