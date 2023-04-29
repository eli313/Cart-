import React , {useContext, useEffect, useState} from "react"
import { Link } from "react-router-dom";
import { productsContext } from "../contexts/productProvider";
import axios from "axios";


const ProductDetail = (props) => {
    const id = props.match.params.id
    const products = useContext(productsContext);
    const selectedProduct = products[id -1];
        
        return (
        <div>
            {id}
            <div>
            {selectedProduct.title}
            </div>
            <div>
            {selectedProduct.discription}
            </div>
            <img src={selectedProduct.image} alt="product image" />
            <div>
            {selectedProduct.price} $
            </div>
            <div>
                <button>
                    <Link to="/products" >Back to shop</Link>
                </button>
            </div>
            {}
        </div>
    )
}

export default ProductDetail