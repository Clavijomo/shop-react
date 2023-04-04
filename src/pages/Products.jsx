import React, { useEffect } from 'react'
import products from '../data';
import useProducts from '../hooks/useProducts';
import Product from '../components/Product'

const Products = () => {

  const { listProducts, setListProducts } = useProducts();

  useEffect(() => {
    productList();
  }, [])  

  const productList = () => {
    setListProducts(products);
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold">Lista de productos</h1>
      <p className="text-zinc-500 my-2">Aquí encontrarás los productos más usados en todo el mundo</p>      
      <div className="grid grid-cols-3 gap-3 border">
        {listProducts?.length && listProducts.map((product) => (        
          <Product 
            key={product.id}
            product={product}          
          />
        ))}
      </div>
    </div>
  )
}

export default Products;