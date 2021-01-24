import { screen } from '@testing-library/react'

import Cart from '.'

import itemsMock from 'components/CartList/mock'
import gameSmock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { rendertWithTheme } from 'utils/tests/helpers'

const props = {
  items: itemsMock,
  total: '$ 500,00',
  cards: cardsMock,
  recommendedGames: gameSmock,
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base"> {children} </div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase" />
    }
  }
})

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Cart" />
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions" />
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty" />
    }
  }
})

describe('<Cart />', () => {
  it('should render the sections', () => {
    rendertWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Cart')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render the empty component if there are no items', () => {
    rendertWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
