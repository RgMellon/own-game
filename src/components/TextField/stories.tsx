import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'

import { Email } from '@styled-icons/material-outlined/Email'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    error: '',

    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

export const TextWithIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} disabled />
  </div>
)

TextWithIcon.args = {
  icon: <Email />
}

export const TextWithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} error="Unvailable email" />
  </div>
)

TextWithError.args = {
  icon: <Email />
}
