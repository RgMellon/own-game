import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighLightFragment } from 'graphql/fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  query QueryRecomended {
    recommended {
      section {
        title
        highlight {
          ...HighLightFragment
        }
        games {
          ...GameFragment
        }
      }
    }
  }

  ${GameFragment}
  ${HighLightFragment}
`
