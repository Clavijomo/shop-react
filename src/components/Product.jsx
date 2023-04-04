import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleInfo, faPlus} from "@fortawesome/free-solid-svg-icons"
import useProducts from '../hooks/useProducts'

const Product = ({product}) => {

  const { nameProduct, category, descriptionProduct, Company, details, price, imageProduct, id } = product;
  const { shopProduct, setShopProduct, notification, setNotification } = useProducts();  

  const handleAddShop = () => {           
    const addProduct = {
      nameProduct,
      imageProduct,
      price,
      id,
      Company,
      details,
      descriptionProduct,
    }                
    
    // No agregarlo al carrito si está repetido
    const filterProduct = shopProduct.filter(item => item.id === addProduct.id);
    
    if(!filterProduct.length) { 
      setShopProduct([...shopProduct, addProduct]);
      setNotification('Producto agregado');
      setTimeout(() => {
        setNotification("");
      }, 5000);      
      return;
    }
    setNotification("El producto ya está en el carrito");
    setTimeout(() => {
      setNotification("");
    }, 5000);
  }

  return (
    <div className="mt-5 bg-zinc-300 rounded-xl flex shadow-xl">
      <div className="rounded-xl w-1/2">
        <div className="relative h-full">
          <img className="rounded-l-xl h-full w-full object-cover" src={imageProduct} alt=""/>
          <div 
            className="absolute bottom-0 p-3 w-full h-full flex flex-col bg-gradient-to-t from-black/80 via-black/1 justify-end rounded-l-xl">
            <p className="text-xs text-zinc-300 mb-1 uppercase">{category}</p>
            <h1 className="text-xl tracking-wide text-white">{nameProduct}</h1>      
            <p className="text-zinc-200 my-2 text-sm">{price}</p>      
          </div>
        </div>
      </div>
      <div className="p-3 w-1/2 flex flex-col justify-around gap-1">
        <div className="mb-3">          
          <p 
            className="font-semibold mb-2 text-sm flex items-center gap-2"><FontAwesomeIcon icon={faCircleInfo} className="text-zinc-500" /> 
              Descripción
          </p>
          <p className="text-xs text-zinc-500 leading-5">{details}</p>    
          <p className="text-xs mt-3 text-zinc-600 font-semibold">Empresa: {Company}</p>    
        </div>
        <div className="border-b-zinc-400 border"></div>
        <div>
          <button 
            onClick={handleAddShop}
            className="text-sm bg-blue-500 transition hover:bg-blue-600 py-2 px-3 text-white rounded-lg flex items-center gap-2 mt-1">
            <FontAwesomeIcon icon={faPlus} style={{fontSize: "15px"}} />            
              Añadir al carrito
          </button>
        </div>
      </div>        
    </div>
  )
}

export default Product;