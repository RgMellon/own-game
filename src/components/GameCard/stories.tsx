import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProp } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
  }
} as Meta

export const Default: Story<GameCardProp> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)
