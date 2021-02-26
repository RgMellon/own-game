import 'match-media-mock'

import { screen } from '@testing-library/react'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: gamesMock,
  mostPopularHighLight: highlightMock,
  mostPopularGames: gamesMock,
  upcommingGames: gamesMock,
  upcommingHighLights: highlightMock,
  freeGames: gamesMock,
  freeHighLight: highlightMock,
  newGamesTitle: 'new game',
  upcomingGamesTitle: 'up coming',
  mostPopularGamesTitle: 'most popular',
  freeGamesTitle: 'free games'
}

import Home from '.'
import { rendertWithTheme } from 'utils/tests/helpers'

//dessa forma estamos mocando o component para testar

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"> </div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock BannerSlider"> </div>
    }
  }
})

describe('<Home />', () => {
  it('should render the Banner and showCases', () => {
    rendertWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(4)
  })
})
