import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
// import gameSmock from 'components/GameCardSlider/mock'
// import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QueryRecomended } from 'graphql/generated/QueryRecomended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const appoloClient = initializeApollo()

  const { data } = await appoloClient.query<QueryRecomended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      total: '$ 500,00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
