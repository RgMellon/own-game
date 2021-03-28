import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the heading without bad', () => {
    render(<CartIcon />)
    expect(screen.getByLabelText(/Shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the heading with bad when passing a quantity', () => {
    render(<CartIcon />, {
      cartProviderProps: { ...CartContextDefaultValues, quantity: 12 }
    })
    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/12/i)).toBeInTheDocument()
  })
})
