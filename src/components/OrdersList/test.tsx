import { screen } from '@testing-library/react'
import { rendertWithTheme } from 'utils/tests/helpers'

import OrdersList from '.'
import mock from './mock'

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty" />
    }
  }
})

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock GameItem"> {children} </div>
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the GameItems', () => {
    rendertWithTheme(<OrdersList items={mock} />)

    expect(
      screen.getByRole('heading', { name: /My Orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    rendertWithTheme(<OrdersList />)
    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
