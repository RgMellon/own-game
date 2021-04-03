import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProperties = Pick<TextFieldProps, 'iconPosition'>

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    //Se o filho receber um foco, tipo o input, Foca no pai
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProperties>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray} inset;
      filter: none
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    display: block;
    margin-bottom: 5px;
  `}
`

export const Icon = styled.div<IconPositionProperties>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: () => css`
    ${InputWrapper} {
      border-color: #ff6347;
    }

    ${Label},
    ${Icon} {
      color: #ff6347;
    }
  `
}
export const Wrapper = styled.div<Pick<TextFieldProps, 'disabled' | 'error'>>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${!!error && wrapperModifiers.error()}
  `}
`

export const Error = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 4px;

    span {
      color: #ff6347;
      font-size: ${theme.font.sizes.small};
    }

    & > svg {
      width: 16px;
      fill: #ff6347;
      margin-right: 5px;
    }
  `}
`
