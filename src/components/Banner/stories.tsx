import { Story, Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://www.overclockers.co.uk/media/image/Cyberpunk-2077-banner.png',
    title: 'Cyber Punk 2077',
    subtitle: '<p> Play the new <strong> Epic Game </strong>',
    buttonLabel: 'Buy Now',
    buttonLink: '/games/cyber-punk'
  },

  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div
    style={{
      width: '104rem',
      margin: '0 auto'
    }}
  >
    <Banner {...args} />
  </div>
)

export const WithRibbon: Story<BannerProps> = (args) => (
  <div
    style={{
      width: '104rem'
    }}
  >
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
