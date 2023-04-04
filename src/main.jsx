import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NewProduct from './pages/NewProduct'
import Products from './pages/Products'
import { ProductProvider } from './context/ProductsProvider'
import "./styles/alert.css"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        index: true,
        element: <Products />
      },
      {
        path: '/add/product',
        element: <NewProduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <React.StrictMode>
      <RouterProvider 
        router={router}
      />
    </React.StrictMode>
  </ProductProvider>
)
