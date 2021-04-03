import 'match-media-mock'

import GameCardSlider from '.'

import { render, screen } from 'utils/test-utils'

const items = [
  {
    id: '1',
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 235,
    slug: 'population-zero1',
    promotionalPrice: 215
  },
  {
    id: '2',
    title: 'Population Zero2',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 235,
    slug: 'population-zero2',
    promotionalPrice: 215
  },
  {
    id: '3',
    title: 'Population Zero3',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x142',
    price: 235,
    slug: 'population-zero3',
    promotionalPrice: 215
  },
  {
    id: '4',
    title: 'Population Zero4',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x143',
    price: 235,
    slug: 'population-zero4',
    promotionalPrice: 215
  },
  {
    id: '5',
    title: 'Population Zero5',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x144',
    price: 235,
    slug: 'population-zero5',
    promotionalPrice: 215
  },
  {
    id: '6',
    title: 'Population Zero6',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x145',
    price: 235,
    promotionalPrice: 215,
    slug: 'population-zero6'
  }
]

describe('<GameCardSlider />', () => {
  it('should render with one active item', () => {
    const { container } = render(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
