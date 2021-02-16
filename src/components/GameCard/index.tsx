import Link from 'next/link'

import {
  FavoriteBorder,
  AddShoppingCart,
  Favorite
} from '@styled-icons/material-outlined'

import formatPrice from 'utils/format-price'

import Button from 'components/Button'
import Ribbon, { RibbonSizes, RibbonColors } from 'components/Ribbon'

import * as S from './styles'

export type GameCardProp = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const GameCard = ({
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProp) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`/game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} aria-label={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove to wish list"> </Favorite>
        ) : (
          <FavoriteBorder aria-label="Add to wish list" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button size="small" icon={<AddShoppingCart />} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
