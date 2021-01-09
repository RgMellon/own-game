import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Empty from '.'

const props = {
  title: 'A simple title',
  description: 'A simple description'
}

describe('<Empty />', () => {
  it('should render the Empty component', () => {
    rendertWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', {
        name: /a gamer in a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /A simple title/i }))

    expect(screen.getByText(/A simple description/i)).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /Go back to store/i })
    ).toHaveAttribute('href', '/')
  })

  it('should render the Empty component without the back button', () => {
    rendertWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /Go back to store/i })
    ).not.toBeInTheDocument()
  })
})
