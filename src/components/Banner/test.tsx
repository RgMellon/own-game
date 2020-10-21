import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    rendertWithTheme(
      <Banner
        img="https://www.overclockers.co.uk/media/image/Cyberpunk-2077-banner.png"
        title="Cyber Punk 2077"
        subtitle="<p> Play the new <strong> Epic Game </strong>"
        buttonLabel="Buy Now"
        buttonLink="/games/cyber-punk"
      />
    )

    expect(
      screen.getByRole('heading', { name: /Cyber Punk 2077/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new Epic Game/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Cyber Punk 2077/i })
    ).toBeInTheDocument()
  })
})
