import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { rendertWithTheme } from 'utils/tests/helpers'
import filterMock from 'components/ExploreSideBar/mock'

import Games from '.'

import { fetchMoreMock, gamesMock } from './mocks'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSideBar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSideBar">{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    rendertWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render the heading', async () => {
    rendertWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterMock} />
      </MockedProvider>
    )

    // it starts without data
    // shows loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    //we wait until we have data to get the elements;
    expect(await screen.findByTestId('Mock ExploreSideBar')).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show More/i })
    ).toBeInTheDocument()
  })

  it('Should render more games when show more is clicked', async () => {
    rendertWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()
    userEvent.click(await screen.findByRole('button', { name: /show More/i }))
    expect(await screen.findByText(/Fetch More Games/i)).toBeInTheDocument()
  })
})
