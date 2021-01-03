import { Container } from 'components/Container'

import Heading from 'components/Heading'
import React from 'react'
import Base from 'templates/Base'
import ShowCase from 'components/ShowCase'

import GameCard, { GameCardProp } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProp[]
  recommendedHighlight: HighlightProps
  games?: GameCardProp[]
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <ShowCase
      title="You may like these game"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
