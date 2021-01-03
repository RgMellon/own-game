import React from 'react'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlighMock from 'components/Highlight/mock'

const WishlistPage = (props: WishlistTemplateProps) => {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlighMock
    }
  }
}

export default WishlistPage
