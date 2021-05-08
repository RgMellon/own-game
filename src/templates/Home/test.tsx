import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

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

//dessa forma estamos mocando o component para testar

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base"> {children} </div>
    }
  }
})

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
    render(<Home {...props} />)

    expect(screen.getByTestId('Mock BannerSlider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(4)
  })
})
