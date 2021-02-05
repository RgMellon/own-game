import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the heading without bad', () => {
    rendertWithTheme(<CartIcon />)
    expect(screen.getByLabelText(/Shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the heading with bad when passing a quantity', () => {
    rendertWithTheme(<CartIcon quantity={12} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/12/i)).toBeInTheDocument()
  })

  it('should render with badge only if has a positive number', () => {
    rendertWithTheme(<CartIcon quantity={-1} />)

    expect(screen.queryByText(/-1/i)).not.toBeInTheDocument()
  })
})
