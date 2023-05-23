import React , {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import styles from "./NavBar.module.css"

const NavBar = () => {
    const { state } = useContext(CartContext)
    return (
        <div className={styles.navbar}>
            <div className={styles.navProducts}>
                <Link to="/products" >
                    <button>Products</button>
                    </Link>
            </div>
            <div className={styles.navCart}>
                <Link to="/cart" >
                    <button>Cart</button>
                    </Link>
                
                
            </div>
        </div>
    )
}

export default NavBar