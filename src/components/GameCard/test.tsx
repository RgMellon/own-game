import { screen } from '@testing-library/react'
import GameCard from '.'
import { rendertWithTheme } from 'utils/tests/helpers'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    rendertWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toHaveAttribute('src', props.img)

    expect(screen.getByLabelText(/Add to wish list/i)).toBeInTheDocument()
  })
})
