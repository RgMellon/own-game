import { useCart } from 'hooks/use-cart'

import Link from 'next/link'
import GameItem from 'components/GameItem'

import Button from 'components/Button'
import Empty from 'components/Empty'
import Loader from 'components/Loader'

import * as S from './styles'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>

          <S.Footer>
            {!hasButton && <span> Total : </span>}
            <S.Total>{total}</S.Total>

            {hasButton && (
              <Link href="/cart">
                <Button as="a"> Buy it now </Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers."
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
