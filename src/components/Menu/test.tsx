import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    rendertWithTheme(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()

    expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
})
