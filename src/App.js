import './App.css';
import {Routes , Route , Navigate} from "react-router-dom"

// Context
import ProductProvider from './contexts/productProvider';
import CartContextProvider from './contexts/CartContextProvider';
import NavBar from './components/NavBar';
import ShopCart from './components/ShopCart';

import Store from './components/Store';
import ProductDetail from './components/ProductDetails';

function App() {
  return (
      
    <ProductProvider>
      <CartContextProvider>
        <NavBar/>
        <Routes>
          <Route path="/products" element={<Store/>} />
          <Route path="/products/:id" element={<ProductDetail/>} />
          <Route path="/cart" element={<ShopCart/>} />
          <Route path='/*' element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductProvider>
  );
}

export default App;
