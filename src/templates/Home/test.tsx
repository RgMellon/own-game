import 'match-media-mock'

import { screen } from '@testing-library/react'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighLight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighLights: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighLight: highlightMock
}

import Home from '.'
import { rendertWithTheme } from 'utils/tests/helpers'

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    rendertWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()
  })

  it('should render the sections', () => {
    rendertWithTheme(<Home {...props} />)

    expect(screen.getByRole('heading', { name: /News/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Upcomming/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Free Games/i })
    ).toBeInTheDocument()
  })
})
