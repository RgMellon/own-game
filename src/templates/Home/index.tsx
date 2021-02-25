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
  newGamesTitle: string
  newGames: GameCardProp[]
  mostPopularHighLight: HighlightProps
  mostPopularGamesTitle: string
  mostPopularGames: GameCardProp[]
  upcomingGamesTitle: string
  upcommingGames: GameCardProp[]
  upcommingHighLights: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProp[]
  freeHighLight: HighlightProps
}

const Home = ({
  newGamesTitle,
  mostPopularGamesTitle,
  upcomingGamesTitle,
  freeGamesTitle,
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
      <ShowCase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <ShowCase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighLight}
      games={mostPopularGames}
    />

    <ShowCase
      title={upcomingGamesTitle}
      games={upcommingGames}
      highlight={upcommingHighLights}
    />

    <ShowCase
      title={freeGamesTitle}
      highlight={freeHighLight}
      games={freeGames}
    />
  </Base>
)

export default Home
