import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the FormSignup', () => {
    rendertWithTheme(<FormSignUp />)

    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign up now/i })
    ).toBeInTheDocument()
  })
})
