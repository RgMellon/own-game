import { screen } from '@testing-library/react'

import Highlight from '.'
import { rendertWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Heading 1',
  subtitle: 'Lorem ipsum sit amet h2',
  buttonLabel: 'buy Now',
  buttonLink: '/rdr'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    rendertWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Lorem ipsum sit amet h2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })
})
