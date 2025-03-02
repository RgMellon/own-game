import { MockedProvider } from '@apollo/client/testing'
import { act, renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localstorage'

import { useCart, CartProvider, CartProviderProps } from '.'
import { cartItems, gamesMock } from './mock'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return items and its info if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.loading).toBe(true)
    await waitForNextUpdate()
    expect(result.current.loading).toBe(false)

    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.quantity).toBe(2)
    expect(result.current.total).toBe('$21.00')
  })

  it('should return true/false if the item is already in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.isInCart('2')).toBe(false)
  })

  it('should add itens in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    //metodo responsavel de avisar que o estado vai ser mudado
    act(() => {
      result.current.addToCart('1')
    })

    expect(result.current.quantity).toBe(1)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify(['1'])
    )
  })

  it('should remove itens in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    setStorageItem('cartItems', ['1'])
    //metodo responsavel de avisar que o estado vai ser mudado
    act(() => {
      result.current.removeToCart('1')
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    )
  })

  it('should clear the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    setStorageItem('cartItems', ['1'])
    //metodo responsavel de avisar que o estado vai ser mudado
    act(() => {
      result.current.clearCart()
    })

    expect(result.current.quantity).toBe(0)
    expect(window.localStorage.getItem('WONGAMES_cartItems')).toBe(
      JSON.stringify([])
    )
  })
})
