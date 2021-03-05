import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
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
          name: 'Sample Game',
          slug: 'sample-game',
          cover: {
            url: 'sample-game.jpg'
          },
          developers: [
            {
              name: 'sample developer'
            }
          ],
          price: 77.79,
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      start: 1
    }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Games',
          slug: 'fetch-more',
          cover: {
            url: '/fetch-more.jpg'
          },
          developers: [
            {
              name: 'sample-developer'
            }
          ],
          price: 77.79,
          __typename: 'Game'
        }
      ]
    }
  }
}
