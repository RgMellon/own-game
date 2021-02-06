import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    rendertWithTheme(<CartList items={mockItems} total="R$ 330,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toBeInTheDocument()
  })

  it('should render the button', () => {
    rendertWithTheme(<CartList items={mockItems} total="R$ 330,00" hasButton />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render empty when there are no game', () => {
    rendertWithTheme(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })
})
