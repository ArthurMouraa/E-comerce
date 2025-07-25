import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProdutoProvider } from './context/ProductContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ProdutoProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProdutoProvider>
  </StrictMode>,
)
