import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date'
    },

    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action']
      }
    },

    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'mac', 'windows']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
