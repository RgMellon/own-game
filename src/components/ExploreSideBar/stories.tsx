import { Story, Meta } from '@storybook/react/types-6-0'
import ExploreSideBar, { ExploreSidebarProps } from '.'

import mock from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items: mock,
    onFilter: () => console.log('filter')
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar {...args} />
  </div>
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSideBar
      {...args}
      initialValues={{
        platforms: ['windows', 'linux'],
        sort_by: 'low-to-high'
      }}
    />
  </div>
)
