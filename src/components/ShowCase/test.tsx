import 'match-media-mock'

import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

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
    rendertWithTheme(<ShowCase {...props} />)

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
    rendertWithTheme(<ShowCase />)

    expect(screen.queryByText(/Most Popular/i)).not.toBeInTheDocument()
  })

  it('should render without a highlight', () => {
    rendertWithTheme(<ShowCase />)

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    rendertWithTheme(
      <ShowCase title={props.title} highlight={props.highlight} />
    )

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
