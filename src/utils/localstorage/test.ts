import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from localstorage', () => {
    window.localStorage.setItem(
      'WONGAMES_cartItems',
      JSON.stringify(['1', '2'])
    )

    expect(getStorageItem('cartItems')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should add the item to localstorage', () => {
    setStorageItem('cartItems', ['1', '2'])

    expect(window.localStorage.getItem('WONGAMES_cartItems')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
