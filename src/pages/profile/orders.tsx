import OrdersList, { OrdersListProps } from 'components/OrdersList'

import Profile from 'templates/Profile'

import mockOrderList from 'components/OrdersList/mock'
import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
// import { Container } from './styles';

export default function Oders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      items: mockOrderList,
      session
    }
  }
}
