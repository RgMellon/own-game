import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rendertWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    rendertWithTheme(<UserDropdown username="renan" />)
    expect(screen.getByText(/renan/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    rendertWithTheme(<UserDropdown username="renan" />)

    userEvent.click(screen.getByText(/renan/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Sign out/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
  })
})
