import { gql } from '@apollo/client'

export const HighLightFragment = gql`
  fragment HighLightFragment on ComponentPageHighlight {
    title
    subtitle
    background {
      url
    }
    floatImage {
      url
    }
    buttonLabel
    buttonLink
    alignment
  }
`
