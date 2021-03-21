import { render, screen } from 'utils/test-utils'

import Wishlist from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlighMock from 'components/Highlight/mock'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedHighlight: highlighMock,
  recommendedTitle: 'You may like these games'
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
    render(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByAltText(/Population Zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
  })

  it('Should render empty when there are no game', () => {
    render(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlighMock}
      />
    )

    expect(screen.queryByText(/Population Zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
