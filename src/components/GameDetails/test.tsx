import { rendertWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import GameDetails, { GameDetailProps } from '.'

const props: GameDetailProps = {
  developer: 'Different Tales',
  platforms: ['linux', 'windows'],
  releaseDate: '2020-11-21T23:00:00'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    rendertWithTheme(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Release Date/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Publisher/i })
    ).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    rendertWithTheme(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    rendertWithTheme(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })
})
