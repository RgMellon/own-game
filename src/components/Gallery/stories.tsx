import { Story, Meta } from '@storybook/react/types-6-0'
import Gallery, { GalleryProps } from '.'
import items from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: { items },
  paramaters: {
    layout: 'fullscreen',
    background: 'won-dark '
  }
} as Meta

export const Default: Story<GalleryProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Gallery {...args} />
  </div>
)
