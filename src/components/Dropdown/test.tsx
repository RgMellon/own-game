import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const title = <h1 aria-label="toggle dropdown">Click here</h1>

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render the title', () => {
    expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toggle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/).parentElement!
    // nextElementSibling pega o proximo elemento dpos do content
    const overlay = content.nextElementSibling
    userEvent.click(screen.getByLabelText(/toggle dropdown/))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay!)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')
  })
})
