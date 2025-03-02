import { render, waitFor, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import PaymentOptions from '.'

import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved cart options', () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })

  it('should handle selected card when clicking on the label', async () => {
    render(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/4326/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4326/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePlayment = jest.fn()

    render(<PaymentOptions cards={cards} handlePayment={handlePlayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePlayment).not.toHaveBeenCalled()
  })

  it('should  call handlePayment when credit card is selected', async () => {
    const handlePlayment = jest.fn()

    render(<PaymentOptions cards={cards} handlePayment={handlePlayment} />)

    userEvent.click(screen.getByLabelText(/4326/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePlayment).toHaveBeenCalled()
    })
  })
})
