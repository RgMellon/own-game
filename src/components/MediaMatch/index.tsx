import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

// keyof is a helper from typescript, throught him we get keys of an interface
type breakpoints = keyof DefaultBreakpoints

export type MediaMatchProps = {
  lessThan?: breakpoints
  greatherThan?: breakpoints
}

const mediaMatchModifier = {
  lessThan: (size: breakpoints) => css`
    ${media.lessThan(size)` display: block`}
  `,

  greatherThan: (size: breakpoints) => css`
    ${media.greaterThan(size)` display: block`}
  `
}

export default styled.div<MediaMatchProps>`
  ${({ lessThan, greatherThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifier.lessThan(lessThan)}

    ${!!greatherThan && mediaMatchModifier.greatherThan(greatherThan)}
  `}
`
