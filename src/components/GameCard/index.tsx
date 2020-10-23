import {
  FavoriteBorder,
  AddShoppingCart
} from '@styled-icons/material-outlined'

import * as S from './styles'
import Button from 'components/Button'

export type GameCardProp = {
  title: string
  developer: string
  img: string
  price: string
}

const GameCard = ({ title, developer, img, price }: GameCardProp) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title} aria-label={title} />
    </S.ImageBox>

    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>

    <S.FavButton role="button">
      <FavoriteBorder aria-label="Add to wish list" />
    </S.FavButton>

    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button size="small" icon={<AddShoppingCart />} />
    </S.BuyBox>
  </S.Wrapper>
)

export default GameCard
