import { gql } from '@apollo/client'

import { GameFragment } from 'graphql/fragments/game'
import { HighLightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  query QueryUpcoming {
    upcomingGames: games(
      where: { release_date_gt: "2021-01-27" }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    showCase: home {
      upcomingGames {
        title
        highlight {
          ...HighLightFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighLightFragment}
`
