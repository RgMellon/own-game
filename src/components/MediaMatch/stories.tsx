import { Story, Meta } from '@storybook/react/types-6-0'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = () => (
  <MediaMatch greatherThan="medium"> Only on Desktop</MediaMatch>
)

export const Mobile: Story = () => (
  <MediaMatch lessThan="medium"> Only on mobile</MediaMatch>
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
