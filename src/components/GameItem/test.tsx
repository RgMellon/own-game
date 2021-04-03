import userEvent from '@testing-library/user-event'
import { CartContextDefaultValues } from 'hooks/use-cart'
import React from 'react'
import { render, screen } from 'utils/test-utils'

import GameItem from '.'

const props = {
  img: 'image-item',
  title: 'title-game',
  price: '200',
  id: '1'
}

describe('<GameItem />', () => {
  it('should render the GameItem', () => {
    render(<GameItem {...props} />)

    expect(
      screen.getByRole('heading', { name: /title-game/i })
    ).toBeInTheDocument()

    // expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByText(/200/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /title-game/i })).toHaveAttribute(
      'src',
      props.img
    )
  })

  it('should render the Item with download link', () => {
    const downloadLink = 'https://link'

    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render remove if the item is inside the cart and call remove', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeToCart: jest.fn()
    }

    render(<GameItem {...props} />, { cartProviderProps })

    const removeItemLabel = screen.getByText(/remove/i)
    expect(removeItemLabel).toBeInTheDocument()

    userEvent.click(removeItemLabel)
    expect(cartProviderProps.removeToCart).toBeCalledWith('1')
  })

  it('should render the Payment Info ', () => {
    const paymentInfo = {
      flag: 'martercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4365',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: /martercard/i })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
