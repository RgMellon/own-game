import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'OI',
    description: 'Ue2'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

Basic.args = {
  title: 'Moises',
  description: 'Ue?'
}
