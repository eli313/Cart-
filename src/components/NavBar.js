import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import styles from "./NavBar.module.css"

const NavBar = () => {
    const { state , dispatch } = useContext(CartContext)
    return (
        <div className={styles.navbar}>
            <div className={styles.navProducts}>
                <button><Link to="/products" >Products</Link></button>
            </div>
            <div className={styles.navCart}>
                <button><Link to="/cart" >Cart</Link> :
                <span> {state.itemCounter}</span></button>
                
            </div>
        </div>
    )
}

export default NavBar