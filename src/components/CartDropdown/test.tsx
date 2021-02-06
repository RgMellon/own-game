import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'
import items from 'components/CartList/mock'

import CartDropdown from '.'

describe('<CartDropdown />', () => {
  it('should render the cart icon and its badge', () => {
    rendertWithTheme(<CartDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${items.length}`)).toBeInTheDocument()
  })

  it('should render dropdown content with cart items and total', () => {
    rendertWithTheme(<CartDropdown items={items} total="R$ 300,00" />)

    expect(screen.getByText(/R\$ 300,00/i)).toBeInTheDocument()
    expect(screen.getByText(/Red Dead Redemption 2/i)).toBeInTheDocument()
  })
})
