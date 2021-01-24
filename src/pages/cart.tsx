import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import gameSmock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 500,00',
      cards: cardsMock,
      recommendedGames: gameSmock,
      recommendedHighlight: highlightMock
    }
  }
}
