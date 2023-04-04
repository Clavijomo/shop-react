import useProducts from '../hooks/useProducts';

const addFavorite = () => {
  
  const {shopProduct, setShopProduct, notification, setNotification} = useProducts();  

  const handleEliminate = (id) => {        
    
    // Eliminar el producto por el ID
    const newShop = shopProduct.filter(item => item.id !== id);       
    const confirmEliminate = confirm("Seguro que quieres eliminar el producto?");

    // Preguntar antes de eliminar
    if (confirmEliminate) {
      setShopProduct(newShop);      
      setNotification('Producto eliminado');
      setTimeout(() => {
        setNotification("");
      }, 5000);    
    }    
  }
  
  return (
    <div className="mt-4">
      {shopProduct?.length && shopProduct.map((item, index) => (
        <div 
          className="flex flex-col bg-white items-center py-3 rounded-xl my-10 hover:transition shadow-sm hover:shadow-md justify-center relative" 
          key={index}
        >
          <div className="w-20">
            <img className="w-full rounded-lg" src={item.imageProduct} alt="ImagenProducto"/>
          </div>
          <div className="flex flex-col items-center w-full">
            <h1 className="text-sm font-semibold mt-3">{item.nameProduct}</h1>
            <p className="text-xs text-zinc-500 text-center mt-2">{item.price}</p>
            <button 
              onClick={() => handleEliminate(item.id)}
              className="absolute -top-6 right-0 bg-red-600 hover:transition hover:bg-red-700 text-white w-max px-2 py-1 text-xs rounded-full mt-3">
                Borrar
            </button>
          </div>          
        </div>
      ))}
    </div>
  )
}

export default addFavorite; 