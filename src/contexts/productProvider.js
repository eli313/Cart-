import React , {useState , useEffect , createContext} from "react";

// API
import getProducts from "../services/getProducts";

export const productsContext = createContext()

const ProductProvider = (props) => {
    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        };
        fetchAPI()
    }, [])
    return ( 
        <productsContext.Provider value={products} >
            {props.children}
        </productsContext.Provider>
     );
}

export default ProductProvider ;