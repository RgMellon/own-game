import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: {}
    }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: {}
    }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
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
      ],
      gamesConnection: {
        values: [{ id: 1 }, { id: 2 }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: {
      limit: 15,
      where: {},
      start: 1
    }
  },
  result: {
    data: {
      games: [
        {
          id: '2',
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
      ],
      gamesConnection: {
        values: [{ id: 1 }, { id: 2 }],
        __typename: 'GameConnection'
      }
    }
  }
}
