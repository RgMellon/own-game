// import { gql, useQuery } from '@apollo/client'

import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getServerSideProps() {
  // const apolloClient = initializeApollo()

  // const { data } = await apolloClient.query({ query: GET_GAMES })

  return {
    props: {
      // data,
      // initialApolloState: apolloClient.cache.extract(),
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighLight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighLights: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighLight: highlightMock
    }
  }
}
