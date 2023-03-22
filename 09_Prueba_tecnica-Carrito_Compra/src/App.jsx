import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { useFilter } from './hooks/useFilter'
import { Products } from "./components/Products"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App() {
  const [ products ] = useState( initialProducts )

  const { filterProducts } = useFilter({ products })
  
  return (
    <>
      <CartProvider >
        <Header />
        <Cart />
        <Products products={filterProducts} />
        <Footer />
      </CartProvider>
    </>    
  )
}
export default App
