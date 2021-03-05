import styled, { keyframes, css } from 'styled-components'

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Label = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-top: 20px;
  `}
`

const rotate = keyframes`
   0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 1, 0.5);
  }

    0% {
    transform: rotateY(0deg);
  }

   50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`

export const Loading = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    transform: translateZ(1px);

    > div {
      display: inline-block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      background: ${theme.colors.primary};
      animation: ${rotate} 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
  `}
`
