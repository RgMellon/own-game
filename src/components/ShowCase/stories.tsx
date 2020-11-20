import { Story, Meta } from '@storybook/react/types-6-0'
import ShowCase, { ShowCaseProps } from '.'

import highlighMock from '../Highlight/mock'
import gamesMock from '../GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  title: 'Most Populars',
  highlight: highlighMock,
  games: gamesMock
}

export const WithoutTitle: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutTitle.args = {
  highlight: highlighMock,
  games: gamesMock
}

export const WithoutHighLight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutHighLight.args = {
  title: 'Most Populars',
  games: gamesMock
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutGames.args = {
  title: 'Most Populars',
  highlight: highlighMock
}
