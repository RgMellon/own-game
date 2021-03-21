import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the FormSignup', () => {
    render(<FormSignUp />)

    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign up now/i })
    ).toBeInTheDocument()
  })
})
