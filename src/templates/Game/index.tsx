import React from 'react'

import Base from 'templates/Base'

import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'

import * as S from './styles'
import TextContent from 'components/TextContent'
import GameDetails, { GameDetailProps } from 'components/GameDetails'
import { GameCardProp } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import { Divider } from 'components/Divider'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailProps
  upcomingGames: GameCardProp[]
  upcommmingHighLights: HighlightProps
  recomemendedGames: GameCardProp[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcommmingHighLights,
  recomemendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <ShowCase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcommmingHighLights}
      />

      <ShowCase title="You may like these games" games={recomemendedGames} />
    </S.Main>
  </Base>
)

export default Game
