import { Container } from 'components/Container'

import Heading from 'components/Heading'
import React from 'react'
import Base from 'templates/Base'
import ShowCase from 'components/ShowCase'

import GameCard, { GameCardProp } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Grid } from 'components/Grid'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProp[]
  recommendedHighlight: HighlightProps
  games?: GameCardProp[]
  recommendedTitle?: string
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games,
  recommendedTitle = 'You may like these games'
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games && games?.length >= 1 ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <ShowCase
      title={recommendedTitle}
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
