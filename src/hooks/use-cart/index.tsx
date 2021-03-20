import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localstorage'

const CART_KEY = 'cartItems'

export type CartContextData = {
  items: string[]
}

export const CartContextDefatultValues = {
  // items: []
}

export const CartContext = createContext<CartContextData>({} as CartContextData)
// CartContextDefatultValues

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider value={{ items: cartItems }}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
