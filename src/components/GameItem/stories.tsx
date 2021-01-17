import { Story, Meta } from '@storybook/react/types-6-0'
import GameItem, { GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img:
      'https://img.hype.games/cdn/facad932-4082-4d20-980d-34bb385d2233Red-Dead-Redemption-2-Ultimate-Edition-Cover.jpg',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<GameItemProps> = (args) => <GameItem {...args} />

export const WithPayment: Story<GameItemProps> = (args) => (
  <GameItem {...args} />
)
WithPayment.args = {
  downloadLink: 'https://wongames.com/game/download',
  paymentInfo: {
    flag: 'martercard',
    img: '/img/master-card.png',
    number: '**** **** **** 4365',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
}
