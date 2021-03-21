import { render, screen } from 'utils/test-utils'

import galleryMock from 'components/Gallery/mock'
import gameInfoMock from 'components/GameInfo/mock'
import gameDetailsMock from 'components/GameDetails/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highLightMock from 'components/Highlight/mock'

import Game, { GameTemplateProps } from '.'

const props: GameTemplateProps = {
  cover: 'bg-img',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1> Custom HTML </h1>`,
  details: gameDetailsMock,
  upcomingGames: gamesMock,
  upcommmingHighLights: highLightMock,
  recomemendedGames: gamesMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"> </div>
    }
  }
})

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"> </div>
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"> </div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"> </div>
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

describe('<Game />', () => {
  it('should render the template with components', () => {
    render(<Game {...props} />)
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock ShowCase')).toHaveLength(2)
    expect(screen.getByText(/Custom HTML/i)).toBeInTheDocument()
  })

  it('should render the template the gallery without images', () => {
    render(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the Gallery on mobile', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyle({
      display: 'none'
    })

    expect(screen.getByTestId('Mock Gallery').parentElement).toHaveStyleRule(
      'display',
      'block',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should  render the Cover Image', () => {
    render(<Game {...props} />)

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyle({
      backgroundImage: 'url(bg-img)',
      height: '39.5rem'
    })

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyleRule(
      'height',
      '70rem',
      {
        media: '(min-width: 768px)'
      }
    )

    expect(screen.getByRole('image', { name: /cover/i })).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })
})
