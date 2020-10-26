import 'match-media-mock'

import GameCardSlider from '.'
import { rendertWithTheme } from 'utils/tests/helpers'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with one active item', () => {
    const { container } = rendertWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    // expect(
    //   screen.getByRole('heading', { name: /Population Zero/i })
    // ).toBeInTheDocument()

    // expect(
    //   screen.getByRole('heading', { name: /Defy death 1/i, hidden: true })
    // ).toBeInTheDocument()
  })
})
