import { render, screen } from 'utils/test-utils'

import items from 'components/CartList/mock'

import CartDropdown from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      quantity: items.length,
      total: 'R$ 300,00'
    }

    render(<CartDropdown />, { cartProviderProps })
  })

  it('should render the cart icon and its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    expect(screen.getByText(/R\$ 300,00/i)).toBeInTheDocument()
    expect(screen.getByText(/Red Dead Redemption 2/i)).toBeInTheDocument()
  })
})
