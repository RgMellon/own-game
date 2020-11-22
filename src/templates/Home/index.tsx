import { Container } from 'components/Container'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

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
  upcommingMoreGames: GameCardProp[]
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
  upcommingMoreGames,
  freeGames,
  freeHighLight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <ShowCase title="News" games={newGames} />
    </S.SectionNews>

    <ShowCase
      title="Most Popular"
      highlight={mostPopularHighLight}
      games={mostPopularGames}
    />

    <S.SectionUpcoming>
      <ShowCase title="Upcoming" games={upcommingGames} />
      <ShowCase highlight={upcommingHighLights} games={upcommingMoreGames} />
    </S.SectionUpcoming>

    <ShowCase title="Free games" highlight={freeHighLight} games={freeGames} />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
