import { Linux, Windows, Apple } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'

export type GameDetailProps = {
  developer: string
  platforms: Platform[]
  releaseDate: string
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms
}: GameDetailProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="mac" size={18} />,
    windows: <Windows title="windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greatherThan="small">
        <Heading lineColor="secondary" lineLeft>
          Game Detail
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.IconsWrapper>
            <S.Label>Platforms</S.Label>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}> {platformIcons[icon]} </S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>2k</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description> 18 +</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description> Action / Adventure </S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
