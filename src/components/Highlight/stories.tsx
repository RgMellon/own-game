import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it`s back',
    subtitle: 'Come see Jhons new adventure',
    buttonLabel: 'Buy now',
    buttonLink: '/rdf'
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
