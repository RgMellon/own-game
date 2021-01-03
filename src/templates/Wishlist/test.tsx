import { screen } from '@testing-library/react'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlighMock from 'components/Highlight/mock'
import { rendertWithTheme } from 'utils/tests/helpers'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlighMock
}

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"> </div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the wishlist page', () => {
    rendertWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByAltText(/Population Zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
  })
})
