import React , {useContext} from "react";

// Context
import { productsContext } from "../contexts/productProvider";

// Styles
import styles from "./store.module.css"

// product single
import Products from "../shared/product";

const Store = () => {
    const products = useContext(productsContext)
    return ( 
        <div className={styles.productCenter}>
            {
                products.map((product) => 
                    <Products key={product.id} productData={product} />
                )
            }
        </div>
     );
}

export default Store;