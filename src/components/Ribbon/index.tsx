import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSizes = 'small' | 'normal'

export type RibbonPros = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSizes
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonPros) => (
  <S.Wrapper size={size} color={color}>
    {children}
  </S.Wrapper>
)

export default Ribbon
