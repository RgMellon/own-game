import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSideBar, { ExploreSideBarProps } from '.'

import mock from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items: mock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSideBarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSideBarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar
      {...args}
      initialValue={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
)
