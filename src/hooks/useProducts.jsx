import {useContext} from 'react'
import ProductContext from '../context/ProductsProvider'

const useProducts = () => {
  return useContext(ProductContext);
}

export default useProducts;