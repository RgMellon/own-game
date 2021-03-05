import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { rendertWithTheme } from 'utils/tests/helpers'
import filterMock from 'components/ExploreSideBar/mock'

import Games from '.'
import { QUERY_GAMES } from 'graphql/queries/games'

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
      <MockedProvider
        mocks={[
          {
            request: {
              query: QUERY_GAMES,
              variables: {
                limit: 15
              }
            },
            result: {
              data: {
                games: [
                  {
                    name: 'Warcraft I & II Bundle',
                    slug: 'warcraft-bundle',
                    cover: {
                      url: '/uploads/warcraft_bundle_d3222d5fb0.jpg'
                    },
                    developers: [
                      {
                        name: 'Blizzard Entertainment, Inc.'
                      }
                    ],
                    price: 77.79,
                    __typename: 'Game'
                  }
                ]
              }
            }
          }
        ]}
        addTypename={false}
      >
        <Games filterItems={filterMock} />
      </MockedProvider>
    )

    // it starts without data
    // shows loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    //we wait until we have data to get the elements;
    expect(await screen.findByTestId('Mock ExploreSideBar')).toBeInTheDocument()
    expect(
      await screen.findByText(/Warcraft I & II Bundle/i)
    ).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show More/i })
    ).toBeInTheDocument()
  })
})
