import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'image-item',
  title: 'title-game',
  price: '200'
}

describe('<GameItem />', () => {
  it('should render the GameItem', () => {
    rendertWithTheme(<GameItem {...props} />)

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

    rendertWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the Payment Info ', () => {
    const paymentInfo = {
      flag: 'martercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4365',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    rendertWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: /martercard/i })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
