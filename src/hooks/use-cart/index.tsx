import { useQueryGames } from 'graphql/queries/games'
import { createContext, useContext, useEffect, useState } from 'react'
import formatPrice from 'utils/format-price'
import { getStorageItem, setStorageItem } from 'utils/localstorage'
import { cartMappers } from 'utils/mappers'

const CART_KEY = 'cartItems'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeToCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

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

  const { data, loading } = useQueryGames({
    //o skip faz o seguinte : n roda a query se n tiver items no carrinho
    skip: !cartItems?.length,
    variables: {
      where: { id: cartItems }
    }
  })

  const total = data?.games.reduce((initialValue, game) => {
    return initialValue + game.price
  }, 0)

  const isInCart = (id: string) => {
    return cartItems.includes(id)
  }

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    const newItems = [...cartItems, id]
    saveCart(newItems)
  }

  const removeToCart = (id: string) => {
    const newItems = cartItems.filter((cartItem) => cartItem !== id)
    saveCart(newItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartMappers(data?.games),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        removeToCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
