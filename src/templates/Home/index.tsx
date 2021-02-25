import Base from 'templates/Base'
import { Container } from 'components/Container'

import { BannerProps } from 'components/Banner'

import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'
import ShowCase from 'components/ShowCase'
import { GameCardProp } from 'components/GameCard'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProp[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProp[]
  upcommingGames: GameCardProp[]
  upcommingHighLights: HighlightProps
  freeGames: GameCardProp[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upcommingGames,
  upcommingHighLights,
  freeGames,
  freeHighLight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} color="black" />
    </S.SectionNews>

    <ShowCase
      title="Most Popular"
      highlight={mostPopularHighLight}
      games={mostPopularGames}
    />

    <ShowCase
      title="Upcoming"
      games={upcommingGames}
      highlight={upcommingHighLights}
    />

    <ShowCase title="Free games" highlight={freeHighLight} games={freeGames} />
  </Base>
)

export default Home
