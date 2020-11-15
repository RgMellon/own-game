import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render  logos, title, children', () => {
    rendertWithTheme(<Auth title="title">children</Auth>)

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument()
    expect(screen.getByText(/children/i)).toBeInTheDocument()

    expect(
      screen.getByText(/All your favorite games in one place/i)
    ).toBeInTheDocument()

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)
  })
})
