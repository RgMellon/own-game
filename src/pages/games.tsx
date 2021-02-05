import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterMock from 'components/ExploreSideBar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterMock
    }
  }
}
