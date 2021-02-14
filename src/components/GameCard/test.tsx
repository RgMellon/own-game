import { screen, fireEvent } from '@testing-library/react'
import GameCard from '.'
import { rendertWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

const props = {
  slug: 'population-zero',
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

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/Add to wish list/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    rendertWithTheme(<GameCard {...props} />)

    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through when price is promotional', () => {
    rendertWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)
    const price = screen.getByText('R$ 235,00')

    expect(price).toHaveStyle({
      'text-decoration': 'line-through'
    })

    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a filled icon when favorite true', () => {
    rendertWithTheme(<GameCard {...props} favorite />)
    expect(screen.getByLabelText(/Remove to wish list/i)).toBeInTheDocument()
  })

  it('should call onFav methood  when favorite is called', () => {
    const onFav = jest.fn()

    rendertWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])
    expect(onFav).toBeCalled
  })

  it('should render a ribbon', () => {
    rendertWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
