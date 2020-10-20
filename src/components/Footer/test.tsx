import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    rendertWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Location/i })
    ).toBeInTheDocument()
  })
})
