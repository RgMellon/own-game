import { screen, fireEvent, render } from 'utils/test-utils'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)

    expect(screen.getByLabelText(/Open Menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    // expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    render(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    //clicar no botao de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show registerbox when logged out', () => {
    render(<Menu />)

    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    render(<Menu username="Renan" />)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)

    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Sign Up/i)).not.toBeInTheDocument()
  })

  it('should not able to show the menu dropdown when is loading', () => {
    render(<Menu username="Renan" loading />)

    expect(screen.queryByText(/my profile/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
  })
})
