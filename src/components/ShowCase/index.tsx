import { GameCardProp } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'

import React from 'react'
import * as S from './styles'

export type ShowCaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProp[]
  color?: 'black' | 'white'
}

const ShowCase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowCaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}

    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default ShowCase
