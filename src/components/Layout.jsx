import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Outlet, Link, useLocation } from 'react-router-dom'
import AddFavorite from './AddFavorite'
import useProducts from '../hooks/useProducts'
import Notification from './Notification'

const Layout = () => {
  
  const location = useLocation();
  const { shopProduct, setShopProduct, notification, setNotification } = useProducts();

  return (
    <div className="flex h-screen gap-3 p-3">              
      <aside className="w-64 bg-zinc-100 rounded-2xl p-3">
        <div className="h-full rounded-xl">
          <ul className="flex flex-col gap-5">
            <Link 
              className={`${location.pathname === '/' ? 'text-white bg-blue-500' : 'text-zinc-400'} 
                block p-3 rounded-lg transition hover border-slate-300`}
              to="/">
                Inicio
            </Link>
            <Link 
              className={`${location.pathname === '/add/product' ? 'text-white bg-blue-500' : 'text-zinc-400'} 
                block p-3 rounded-lg transition hover border-slate-300`} 
              to ="/add/product">
                Añadir producto
            </Link>
          </ul>
        </div>
      </aside>
      <main className="w-full bg-zinc-200 rounded-2xl shadow-2xl p-10 h-full overflow-y-auto">
        <Outlet />
      </main>

      <aside className="bg-zinc-100 w-64 rounded-2xl px-3 py-5">
        <div className="h-full overflow-y-auto rounded-2xl">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCartShopping} className="text-zinc-400"/>
            <h1 className="text-zinc-400 text-lg font-thin">Carrito</h1>
          </div>
          <div>
            {shopProduct?.length ? 
              <>
                <AddFavorite /> 
              </>
              : 
              <div className="h-96 flex items-end">
                <p className="text-sm text-zinc-500 text-center">Aún no tienes productos en el carrito</p>
              </div>
            }
          </div>
        </div>
      </aside>      
      {notification && <Notification>{notification}</Notification>}      
    </div>
  )
}

export default Layout;