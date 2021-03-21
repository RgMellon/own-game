import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="renan" />)
    expect(screen.getByText(/renan/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="renan" />)

    userEvent.click(screen.getByText(/renan/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Sign out/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
  })
})
