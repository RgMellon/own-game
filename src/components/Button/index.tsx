import {
  forwardRef,
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardRefRenderFunction
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'large' | 'medium'
  fullWidth?: boolean
  minimal?: boolean
  icon?: React.ReactElement
  as?: React.ElementType
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size = 'medium', fullWidth = false, minimal, icon, ...props },
  ref
) => (
  <S.Wrapper
    ref={ref}
    minimal={minimal}
    fullWidth={fullWidth}
    size={size}
    hasIcon={!!icon}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
