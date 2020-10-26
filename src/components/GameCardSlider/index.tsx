import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'
import GameCard, { GameCardProp } from 'components/GameCard'

const settings: SliderSettings = {
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

type GameCardSlider = {
  items: GameCardProp[]
  color?: 'white' | 'black'
}

const GameCardSlider = ({ items, color = 'black' }: GameCardSlider) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard {...item} key={index}></GameCard>
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider
