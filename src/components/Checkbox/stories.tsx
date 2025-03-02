import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox isChecked {...args} label="Ação" />
    <Checkbox {...args} label="Aventura" />
    <Checkbox {...args} label="Estrategia" />
  </div>
)
