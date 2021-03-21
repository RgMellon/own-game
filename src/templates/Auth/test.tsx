import { render, screen } from 'utils/test-utils'

import Auth from '.'

describe('<Auth />', () => {
  it('should render  logos, title, children', () => {
    render(<Auth title="title">children</Auth>)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()

    expect(
      screen.getByText(/All your favorite games in one place/i)
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })
})
