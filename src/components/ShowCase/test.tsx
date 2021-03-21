import 'match-media-mock'

import { render, screen } from 'utils/test-utils'

import ShowCase from '.'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

const props = {
  title: 'Most populars',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<ShowCase />', () => {
  it('should render a full showcase', () => {
    render(<ShowCase {...props} />)

    expect(
      screen.getByRole('heading', { name: /Most populars/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without a title', () => {
    render(<ShowCase />)

    expect(screen.queryByText(/Most Popular/i)).not.toBeInTheDocument()
  })

  it('should render without a highlight', () => {
    render(<ShowCase />)

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    render(<ShowCase title={props.title} highlight={props.highlight} />)

    expect(
      screen.getByRole('heading', { name: /Most populars/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
