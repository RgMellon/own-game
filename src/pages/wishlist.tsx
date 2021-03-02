import React from 'react'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'

import { initializeApollo } from 'utils/tests/apollo'
import { QueryRecomended } from 'graphql/generated/QueryRecomended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const WishlistPage = (props: WishlistTemplateProps) => {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const appoloClient = initializeApollo()

  const { data } = await appoloClient.query<QueryRecomended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}

export default WishlistPage
