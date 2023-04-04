import {useState} from 'react'
import {createContext} from 'react'

// Función Context
const ProductContext = createContext();

// Provider
const ProductProvider = ({children}) => {

  const [listProducts, setListProducts] = useState([]);
  const [shopProduct, setShopProduct] = useState([]);
  const [notification, setNotification] = useState('');

  return(
    <ProductContext.Provider
      value={{
        listProducts,
        setListProducts,
        shopProduct,
        setShopProduct,
        notification,
        setNotification
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export {
  ProductProvider
}

export default ProductContext;