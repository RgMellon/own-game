import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved cart options', () => {
    rendertWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByLabelText(/4325/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument()
  })
})
