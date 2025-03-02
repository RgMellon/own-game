import { render, screen } from 'utils/test-utils'

import GameInfo from '.'

const props = {
  title: 'My Game Tilte',
  description: 'My Game Descriptio',
  price: 200,
  id: '1'
}

describe('<GameInfo />', () => {
  it('should render game informations', () => {
    render(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My Game Tilte/i })
    ).toBeInTheDocument()

    expect(screen.getByText('My Game Descriptio')).toBeInTheDocument()
    expect(screen.getByText(/\$200\.00/)).toBeInTheDocument()
  })

  it('should render Buttons', () => {
    render(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishList/i })
    ).toBeInTheDocument()
  })
})
